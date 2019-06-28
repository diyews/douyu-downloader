import { get, post, jar } from 'request';
import { VM } from 'vm2';
import * as MD5 from 'crypto-js/md5';
import { URLSearchParams } from 'url';

export async function getM3u8Url(url: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    get(url, (err, res, body) => {
      if (err) {
        reject(err);
      }
      const matched = body.match(/var \$ROOM[\s\S]+function (.+?)\(.+?,.+?,.+?\)\{.+?return eval.+?\}/);
      let urlParam = {};
      if (matched) {
        const s = new VM({ timeout: 2e3, sandbox: { CryptoJS: { MD5 } } })
          .run(`${matched[0]};var param=${matched[1]}($ROOM.point_id, 'fbb90694fa8949fe7897b95e320dd19f', ${Math.floor(Date.now() / 1e3)});param+=('&vid='+$ROOM.vid)`);
        console.log(s);
        for (const entry of new URLSearchParams(s).entries()) {
          urlParam[entry[0]] = entry[1];
        }
      }

      const cookieJar = jar();
      cookieJar.setCookie('dy_did=fbb90694fa8949fe7897b95e320dd19f', 'https://v.douyu.com');
      post('http://v.douyu.com/api/stream/getStreamUrl', { form: urlParam, jar: cookieJar }, (err, res, _body) => {
        if (err) {
          reject(err);
        }
        try {
          const data = JSON.parse(_body).data;
          if (data.thumb_video) {
            resolve(
              (data.thumb_video.high && data.thumb_video.high.url) ||
              (data.thumb_video.normal && data.thumb_video.normal.url)
            )
          } else {
            reject(new Error('Get m3u8 url failed'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });
  });
}

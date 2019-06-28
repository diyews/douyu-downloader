import { getM3u8Url } from './get-url';
import { m3u8Merger } from 'm3u8-merger';

export function douyuDownloader({ url, dir }: { url: string, dir: string }) {
  getM3u8Url(url)
    .then(m3u8Url => {
      console.log(m3u8Url);
      m3u8Merger({ url: m3u8Url, dir });
    }, err => {
      console.error(err);
    });
}


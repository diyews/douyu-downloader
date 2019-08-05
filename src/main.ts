import { getM3u8Url } from './get-url';
import { m3u8Merger } from 'm3u8-merger';

export function douyuDownloader({ url, dir, format }: { url: string, dir: string, format: string }) {
  getM3u8Url(url)
    .then(m3u8Url => {
      console.log(m3u8Url);
      m3u8Merger({ url: m3u8Url, dir, format });
    }, err => {
      console.error(err);
    });
}


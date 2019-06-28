import { argv } from 'yargs'
import { getM3u8Url } from './get-url';
import { m3u8Merger } from 'm3u8-merger';

getM3u8Url(argv._[0])
  .then(url => {
    console.log(url);
    // @ts-ignore
    m3u8Merger(url, argv.d);
  }, err => {
    console.error(err);
  });

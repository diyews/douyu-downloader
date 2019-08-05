#!/usr/bin/env node
import { argv } from 'yargs';
import { douyuDownloader } from './main';

const format = (argv.format || 'mp4') as string;
douyuDownloader({ url: argv._[0], dir: (argv.d as string), format });

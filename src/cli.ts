#!/usr/bin/env node
import { argv } from 'yargs';
import { douyuDownloader } from './main';

douyuDownloader({ url: argv._[0], dir: (argv.d as string) });

# douyu-downloader

### downlaod video from [v.douyu.com](https://v.douyu.com/)

## Installation

- package:

  `npm i douyu-downloader -g`

- Thrid party:

  FFmpeg is required. Download for your platform [here](https://ffmpeg.org/download.html). After downloaded, set environment variable `%FFMPEG_PATH%` that the directory includes `ffmpeg.exe`.

## Usage
`douyu-dwonloader url [--options]`

eg: download video that url is `https://v.douyu.com/show/X3JzMaJ6lzGWPQro`

`douyu-downloader https://v.douyu.com/show/X3JzMaJ6lzGWPQro`

## Options
```
--convert
  Default: true. If convert to format.
  
--format
  Default: mp4. Output format.
```

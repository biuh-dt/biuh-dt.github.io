<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>抖音横屏嵌入</title>
  <style>
    /* 横屏容器：强制16:9，自适应宽度 */
    .douyin-landscape {
      position: relative;
      width: 100%;
      max-width: 1200px; /* 最大宽度，可改 */
      margin: 20px auto;
      aspect-ratio: 16/9; /* 核心：16:9横屏 */
      overflow: hidden;
    }
    .douyin-landscape iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  </style>
</head>
<body>
  <h2>抖音横屏播放</h2>
  <div class="douyin-landscape">
    <iframe
      src="https://open.douyin.com/player/video?vid=7656298464939517376&autoplay=1"
      referrerpolicy="unsafe-url"
      allowfullscreen
      scrolling="no"
    ></iframe>
  </div>
</body>
</html>


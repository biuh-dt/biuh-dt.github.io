<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>抖音强制横屏（16:9）</title>
  <style>
    /* 核心：强制16:9横屏容器，压住抖音竖屏逻辑 */
    .douyin-16x9 {
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 20px auto;
      /* 16:9 双保险：兼容所有浏览器 */
      padding-bottom: 56.25%;
      aspect-ratio: 16/9;
      height: 0;
      overflow: hidden;
      background: #000; /* 黑边背景，视觉更像横屏 */
    }
    .douyin-16x9 iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      /* 关键：视频按原比例居中，不拉伸、不裁剪，自动黑边 */
      object-fit: contain;
    }
  </style>
</head>
<body>
  <div class="douyin-16x9">
    <iframe
      src="https://open.douyin.com/player/video?vid=7656298464939517376&autoplay=1&muted=1"
      referrerpolicy="unsafe-url"
      allow="autoplay; fullscreen"
      allowfullscreen
      scrolling="no"
      playsinline
      x5-video-player-type="h5-page"
      x5-video-orientation="landscape"
    ></iframe>
  </div>
</body>
</html>

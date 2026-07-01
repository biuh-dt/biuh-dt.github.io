
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .douyin-landscape {
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 20px auto;
      padding-bottom: 56.25%; /* 16:9 兼容写法 */
      aspect-ratio: 16/9;
      height: 0;
      overflow: hidden;
      background: #000; /* 黑色背景填充黑边 */
    }
    .douyin-landscape iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* 核心：让iframe在容器里居中 */
      width: 100%;
      height: 100%;
      border: 0;
      object-fit: contain; /* 保持视频原始比例，不拉伸 */
    }
  </style>
</head>
<body>
  <div class="douyin-landscape">
    <iframe
      src="https://open.douyin.com/player/video?vid=7656298464939517376&autoplay=1&muted=1"
      referrerpolicy="unsafe-url"
      allow="autoplay; fullscreen"
      allowfullscreen
      scrolling="no"
      playsinline
    ></iframe>
  </div>

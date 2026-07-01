<style>
  /* 右侧模块横屏：16:9，窄容器适配 */
  .douyin-sidebar-landscape {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 */
    aspect-ratio: 16/9;
    height: 0;
    overflow: hidden;
    background: #000;
    margin: 10px 0;
  }
  .douyin-sidebar-landscape iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border: 0;
    object-fit: contain;
  }
</style>

<div class="douyin-sidebar-landscape">
  <iframe
    src="https://open.douyin.com/player/video?vid=7656298464939517376&autoplay=0"
    referrerpolicy="unsafe-url"
    allow="autoplay; fullscreen"
    allowfullscreen
    scrolling="no"
    playsinline
  ></iframe>
</div>

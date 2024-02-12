<template>
  <div class="c__star" ref="ref_star" @mousemove="handleMouseMove">
    <canvas class="cvs" ref="ref_cvs" :width="Star.width" :height="Star.height"></canvas>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";

interface IStar {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  vr: number;
  size: number;
  opacity: number;
  img: number;
  deleted: boolean;
}

const ref_star = ref<Element>();
const ref_cvs = ref<HTMLCanvasElement>();

const Star = reactive({
  config: {
    size: 60,
    rotation_speed: 6,
    gravity: 8,
  },
  width: 1920,
  height: 1080,
  img1: new Image(),
  img2: new Image(),
  img3: new Image(),
  img4: new Image(),
  list: [] as IStar[],

  getStyle(item: IStar) {
    const rect = ref_star.value?.getBoundingClientRect() ?? { x: 0, y: 0 };
    return {
      width: `${item.size}px`,
      height: `${item.size}px`,
      left: `${item.x - rect.x}px`,
      top: `${item.y - rect.y}px`,
      transform: `translate(-50%, -50%) rotate(${(item.r * 180) / Math.PI}deg)`,
      opacity: item.opacity,
    };
  },
  addStar(x: number, y: number) {
    const direction = Math.random() * Math.PI * 2;
    Star.list.push({
      x,
      y,
      r: Math.random() * Math.PI * 2,
      vx: Math.cos(direction),
      vy: Math.sin(direction),
      vr: Math.random() * Star.config.rotation_speed - Star.config.rotation_speed / 2,
      size: Math.random() * Star.config.size + Star.config.size / 2,
      opacity: Math.random() * 0.2 + 0.4,
      img: Math.floor(Math.random() * 4),
      deleted: false,
    });
  },
  enterFrame() {
    const rect = ref_star.value?.getBoundingClientRect() ?? { width: 1920, height: 1080, x: 0, y: 0 };
    Star.width = rect.width;
    Star.height = rect.height;

    const cvs = ref_cvs.value;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, Star.width, Star.height);

    Star.list = Star.list.filter((star) => !star.deleted);
    Star.list.forEach((star: IStar) => {
      star.x += star.vx;
      star.y += star.vy;
      star.r += star.vr / 100;
      star.vy += Star.config.gravity / 1000;
      star.opacity -= 0.005;
      if (star.opacity < 0) {
        star.deleted = true;
      }
      const imgMap: any = {
        1: Star.img1,
        2: Star.img2,
        3: Star.img3,
        4: Star.img4,
      };
      const img = imgMap[star.img];
      if (!img) return;
      ctx.globalAlpha = star.opacity;
      ctx.drawImage(img, star.x - Star.config.size / 2 - rect.x, star.y - Star.config.size / 2 - rect.y, Star.config.size, Star.config.size);
      ctx.globalAlpha = 0;
    });
    requestAnimationFrame(Star.enterFrame);
  },
});

const handleMouseMove = (e: MouseEvent) => {
  Star.addStar(e.clientX, e.clientY);
};
onMounted(() => {
  Star.width = window.innerWidth;
  Star.height = window.innerHeight;
  Star.img1.src = "http://wikil.fl.lovetly.top/lib/exe/fetch.php?media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:starone.png";
  Star.img2.src = "http://wikil.fl.lovetly.top/lib/exe/fetch.php?media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:startwo.png";
  Star.img3.src = "http://wikil.fl.lovetly.top/lib/exe/fetch.php?media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:starthree.png";
  Star.img4.src = "http://wikil.fl.lovetly.top/lib/exe/fetch.php?media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:starfour.png";
  Star.enterFrame();
});
</script>

<style scoped lang="scss">
.c__star {
  position: fixed;
  inset: 0;
  display: grid;
  overflow: hidden;
}
.cvs {
  position: absolute;
  inset: 0;
}
.content {
  position: absolute;
  display: grid;
  inset: 0;
}
</style>

<template>
  <div>
    <div class="box">
      <button class="button">LOGIN</button>
      <div class="space">
        <span style="--i: 31" class="star"></span>
        <span style="--i: 12" class="star"></span>
        <span style="--i: 57" class="star"></span>
        <span style="--i: 93" class="star"></span>
        <span style="--i: 23" class="star"></span>
        <span style="--i: 70" class="star"></span>
        <span style="--i: 6" class="star"></span>
        <span style="--i: 12; margin-left: 20px" class="star"></span>
        <span style="--i: 15; margin-left: 30px" class="star"></span>
        <span style="--i: 41; margin-left: 40px" class="star"></span>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.box {
  --clr-shadow__border: #d9a1ff;
  --clr-text: #f6f4eb;
  --clr-space: #120e1e;
  --clr-space-gr: #271950;
  --clr-star: #e9f8f9;
  --size: 3rem;
  position: relative;
}

.button {
  display: block;
  width: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  background: transparent;
  font-family: ysbth;
  padding: calc(var(--size) / 3) var(--size);
  border: none;
  cursor: pointer;
  color: var(--clr-text);
  text-shadow: 2px 0px var(--clr-shadow__border), 0px 2px var(--clr-shadow__border), -2px 0px var(--clr-shadow__border), 0px -2px var(--clr-shadow__border);
}

.space {
  width: 100%;
  height: 100%;
  bottom: 0%;
  gap: 1.5rem;
  transition: 0.5s ease-in-out;
  z-index: -1;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  display: flex;
  background: linear-gradient(160deg, var(--clr-space), var(--clr-space-gr));
}

.box:hover .space {
  opacity: 1;
}

.star {
  height: 4rem;
  width: 0.3rem;
  transition: 0.5s;
  border-radius: 50px;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  position: relative;
  background-color: var(--clr-star);
  animation: space-animation calc(0.1s * var(--i)) linear infinite;
}

@keyframes space-animation {
  0% {
    transform: rotate(-30deg) translateY(calc(-52% * var(--i)));
  }

  100% {
    transform: rotate(-30deg) translateY(calc(52% * var(--i)));
  }
}
</style>

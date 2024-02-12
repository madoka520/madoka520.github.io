import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    ReactivityTransform(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: '::',
    proxy: {
      "/api": {
        target: "http://192.168.1.11:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});

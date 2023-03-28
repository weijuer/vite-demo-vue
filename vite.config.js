import { defineConfig } from "vite";
import { resolve } from 'path'
import antFix from "./src/plugins/vite-plugin-ant-fix";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// const AntFixResolver = (componentName) => {
//   if (/^A(\w+)Group/.test(componentName)) {
//     return {
//       name: componentName.replace(/^A(\w+)(Group)/, "$1"),
//       from: "ant-design-vue/es",
//     };
//   }
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    antFix(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    Components({
      version: 2.7,
      transformer: "vue2",
      dirs: ["src/components"],
      extensions: ["vue"],
      resolvers: [AntDesignVueResolver()],
    }),
    AutoImport({
      imports: ["vue", "vue-router/composables", "pinia"],
    }),
  ],
  resolve: {
    alias: {
      Views: resolve('src/views'),
    }
  }
});

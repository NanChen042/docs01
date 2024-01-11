/*
 * @Description: 
 * @Autor: Southern Wind
 * @Date: 2024-01-10 13:16:40
 * @LastEditors: Southern Wind
 * @LastEditTime: 2024-01-10 13:33:18
 */

import DefaultTheme from 'vitepress/theme';
import "element-plus/dist/index.css";

import './custom.css';

export default {
  ...DefaultTheme,
  vue: {
    // @vitejs/plugin-vue options
  },
  enhanceApp: async ({ app, router, siteData, isServer }) => {
   /*  import("element-plus").then((module) => {
      app.use(module);
    }); */
  },
};
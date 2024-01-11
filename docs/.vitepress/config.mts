/*
 * @Description: 
 * @Autor: Southern Wind
 * @Date: 2024-01-10 11:24:34
 * @LastEditors: Southern Wind
 * @LastEditTime: 2024-01-10 13:26:13
 */
import { defineConfig } from 'vitepress'
import { nav,sidebar } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "blog-demo😶‍🌫️",
 
  description: "A VitePress Site",
  head:[['link',{rel:'icon',href: '/docs/bitbug_favicon.ico'}],],
  themeConfig: {
    
    outline: {
      level: [2, 6],
      label: '目录'
    },
    
    siteTitle:'blog-demo😶‍🌫️',
    logo:'/ceshi.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    i18nRouting: true,
    sidebar: sidebar, 
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
    
    },
    
      // 站点页脚配置
      footer: {
        message: "According to the information provided by the front desk staff",
        copyright: "Copyright © 2023-present Southern Wind",
      },
  },
  lastUpdated:true,

})

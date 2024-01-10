/*
 * @Description: 
 * @Autor: Southern Wind
 * @Date: 2024-01-10 11:24:34
 * @LastEditors: Southern Wind
 * @LastEditTime: 2024-01-10 13:26:13
 */
import { defineConfig } from 'vitepress'
import { nav,sidebar,harmonyos } from './relaConf';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/docs/',
  title: "blog-demo😶‍🌫️",
  description: "A VitePress Site",
  head:[['link',{rel:'icon',href: '/public/bitbug_favicon.ico'}],],
  themeConfig: {
    outline: {
      level: [2, 6],
      label: '目录'
    },
    logo:'/ceshi.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav
/*       { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' } */
      
    ,
    i18nRouting: true,

 /*    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ], */
    sidebar: harmonyos, 


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
    
    }
  }
})

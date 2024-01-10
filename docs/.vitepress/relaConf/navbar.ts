/*
 * @Description: 
 * @Autor: Southern Wind
 * @Date: 2024-01-10 11:29:56
 * @LastEditors: Southern Wind
 * @LastEditTime: 2024-01-10 11:30:09
 */
import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '个人历程',
    items: [
      {
        text: '🤯 沪上漂泊记',
        link: '/column/Travel/' // 表示docs/column/Travel/index.md
      },
      {
        text: '所思·所想',
        link: '/column/Growing/' // 表示docs/column/Growing/index.md
      }
    ]
  },
  {
    text: '相关技术文章',
    items: [
      {
        text: '👶 HarmonyOS 4.0',
        link: '/column/Travel/harmony-os-4.0-series/HarmonyOS4.0系列——01、下载、安装、配置环境、搭建页面以及运行示例代码.md' // 表示docs/column/Travel/index.md
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
      {
        text: '飞书社区',
        link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
      }
    ]
  }
];

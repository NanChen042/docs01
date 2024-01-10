import { DefaultTheme } from 'vitepress';
export const harmonyos: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/Travel/harmony-os-4.0-series': [
     // 第一部分
    {
      text: 'HarmonyOS4.0',
      items: [
        {
          text: '1.下载、安装、配置环境、搭建页面',
          link: '/column/Travel/harmony-os-4.0-series/HarmonyOS4.0系列——01、下载、安装、配置环境、搭建页面以及运行示例代码.md'
        },
        {
          text: '02、汉化插件、声明式开发范式ArkTS和类web开发范式',
          link: '/column/Travel/harmony-os-4.0-series/HarmonyOS4.0系列——02、汉化插件、声明式开发范式ArkTS和类web开发范式'
        },
        {
          text: '03、声明式UI、链式编程、事件方法、以及自定义组件简单案例',
          link: '/column/Travel/harmony-os-4.0-series/HarmonyOS4.0系列——03、声明式UI、链式编程、事件方法、以及自定义组件简单案例'
        },
        {
          text: '04、@Styles、@Extend、@Extend事件以及多态样式stateStyles',
          link: '/column/Travel/harmony-os-4.0-series/HarmonyOS4.0系列——04、@Styles、@Extend、@Extend事件以及多态样式stateStyles'
        },
        {
          text: '05、状态管理之@Prop、@Link、@Provide、@Consume，以及@Watch装饰器',
          link: '/column/Travel/harmony-os-4.0-series/HarmonyOS4.0系列——05、状态管理之@Prop、@Link、@Provide、@Consume，以及@Watch装饰器'
        },

      ]
    },
  ]
};

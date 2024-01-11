---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: SW
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
    name: Hi,Southern Wind
    text: Endless Learning, Endless Growth.
    tagline: /午餐达人/办公室英雄/工具控/
    image:
        # 首页右边的图片
        src: /fwy.png
        # 图片的描述
        alt: 作者logo
    # 按钮相关
    actions:
    - theme: brand
      text: 进入主页
      link: /column/api-examples
    - theme: alt
      text: 个人成长
      link: /column/markdown-examples
# 按钮下方的描述
features:
  - icon: 🤹♀️
    title: 前端开发
    details: 小厂程序猿，国内某不知名互联网厂搬砖。
    link: /column/Travel/harmony-os-4.0-series/
  - icon: 👩🎨
    title: 学习语言
    details: HarmonyOS4.0、Typescript、JavaScript、HTML、CSS、Vue、WebGL
  - icon: 🧩
    title: 青年成功之道
    details: 真正的成功不在于你得到了什么，而是在于你成为了什么样的人。
---
<!-- 自定义组件 -->
<script setup lang="ts">

import home from './.vitepress/components/home.vue';
</script>

<home />
<style>

</style>
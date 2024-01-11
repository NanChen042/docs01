---
layoutClass: m-nav-layout
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

</script>
<style src="./index.scss"></style>

# 前端导航

## 效率工具

<MNavLinks :items="[{
    icon:'https://www.tutieshi.com/images/logo.png',
    title:'图贴士（原工具之家）',
    desc:'图贴士(原GIF工具之家)在线图片压缩尺寸大小和视频转gif在线制作工具，支持JPG压缩、PNG压缩、GIF压缩等免费在线图片制作工具网。',
    link:'https://www.tutieshi.com/'
},{
    icon:'http://zhongguose.com/img/favicon.ico',
    title:'中国色, 中国传统色, 色名, 色谱, 中国色名综览',
    desc:'提供各种中国的传统颜色的名称，CMYK值，RGB值，16进制表示。',
    link:'http://zhongguose.com/#'
},{
    icon:'https://fanyi-cdn.cdn.bcebos.com/webStatic/translation/img/favicon/favicon-32x32.png',
    title:'百度翻译',
    desc:'翻译工具',
    link:'https://fanyi.baidu.com/'
},
]"/>

## 常用工具

<MNavLinks :items="[]"/>


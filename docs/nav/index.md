---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'
import  {NAV_DATA}  from './data'
console.log(NAV_DATA)
</script>
<style src="./index.scss"></style>


# 前端导航

想用什么就来逛逛吧~
<MNavLinks    v-for="{title, items} in NAV_DATA" :title="title"  :items="items"/>
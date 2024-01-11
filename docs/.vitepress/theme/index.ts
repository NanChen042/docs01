/*
 * @Description: 
 * @Autor: Southern Wind
 * @Date: 2024-01-10 13:16:40
 * @LastEditors: Southern Wind
 * @LastEditTime: 2024-01-10 13:33:18
 */
import { h, App } from 'vue'
import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";
import { useData } from 'vitepress'
import ElementPlus from 'element-plus'
import './custom.css';
// 图标并进行全局注册
export default {
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
  
  enhanceApp({app}) {

   // 全局注册基础组件
   app.use(ElementPlus)
  }
};

// import { h, App } from 'vue'
// import { useData } from 'vitepress'
// import Theme from 'vitepress/theme'
// // import "element-plus/dist/index.css";
// import './custom.css';
// export default Object.assign({}, Theme, {
//   Layout: () => {
//     const props: Record<string, any> = {}
//     // 获取 frontmatter
//     const { frontmatter } = useData()

//     /* 添加自定义 class */
//     if (frontmatter.value?.layoutClass) {
//       props.class = frontmatter.value.layoutClass
//     }

//     return h(Theme.Layout, props)
//   },
  

// })

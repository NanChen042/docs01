import{_ as n,f as h,o as k,aM as a,e as s,h as i}from"./chunks/framework.c_X9LrYI.js";const l="/docs/assets/recording.Sdzb1gf3.gif",p="/docs/assets/recording-1.2NfMDYCh.gif",t="/docs/assets/recording-2.CPCx7B6I.gif",D=JSON.parse('{"title":"HarmonyOS4.0 系列——06、渲染之条件渲染、循环渲染以及懒加载渲染","description":"","frontmatter":{},"headers":[],"relativePath":"column/harmony-os-4.0-series/HarmonyOS06.md","filePath":"column/harmony-os-4.0-series/HarmonyOS06.md","lastUpdated":null}'),E={name:"column/harmony-os-4.0-series/HarmonyOS06.md"},e=a("",26),r=s("table",{class:"layoutFixed idpTab"},[s("thead",null,[s("tr",null,[s("th",{align:"left",class:"cellrowborder",id:"mcps1.3.3.1.5.1.1",valign:"top",width:"22.567743225677432%"},[s("p",null,"参数名")]),i(),s("th",{align:"left",class:"cellrowborder",id:"mcps1.3.3.1.5.1.2",valign:"top",width:"25.497450254974503%"},[s("p",null,"参数类型")]),i(),s("th",{align:"left",class:"cellrowborder",id:"mcps1.3.3.1.5.1.3",valign:"top",width:"8.129187081291871%"},[s("p",null,"必填")]),i(),s("th",{align:"left",class:"cellrowborder",id:"mcps1.3.3.1.5.1.4",valign:"top",width:"43.80561943805619%"},[s("p",null,"参数描述")])])]),i(),s("tbody",null,[s("tr",null,[s("td",{class:"cellrowborder",valign:"top",width:"22.567743225677432%"},[s("p",null,"dataSource")]),i(),s("td",{class:"cellrowborder",valign:"top",width:"25.497450254974503%"},[s("p",null,[s("a",{href:"/consumer/cn/doc/harmonyos-guides-V2/arkts-rendering-control-lazyforeach-0000001524417213-V2#section4825812108"},"IDataSource")])]),i(),s("td",{class:"cellrowborder",valign:"top",width:"8.129187081291871%"},[s("p",null,"是")]),i(),s("td",{class:"cellrowborder",valign:"top",width:"43.80561943805619%"},[s("p",null,"LazyForEach数据源，需要开发者实现相关接口。")])]),i(),s("tr",null,[s("td",{class:"cellrowborder",valign:"top",width:"22.567743225677432%"},[s("p",null,"itemGenerator")]),i(),s("td",{class:"cellrowborder",valign:"top",width:"25.497450254974503%"},[s("p",null,"(item: any) => void")]),i(),s("td",{class:"cellrowborder",valign:"top",width:"8.129187081291871%"},[s("p",null,"是")]),i(),s("td",{class:"cellrowborder",valign:"top",width:"43.80561943805619%"},[s("p",null,"子组件生成函数，为数组中的每一个数据项创建一个子组件。"),i(),s("div",null,[s("div",{class:"hw-editor-tip"},[s("div",{class:"icon-panel"},[s("div",{class:"icon-img icon-img-info"})]),s("div",{class:"content-panel"},[s("div",{class:"title"},"说明"),s("div",{class:"content"},[s("p",null,"itemGenerator的函数体必须使用大括号{...}。itemGenerator每次迭代只能并且必须生成一个子组件。itemGenerator中可以使用if语句，但是必须保证if语句每个分支都会创建一个相同类型的子组件。itemGenerator中不允许使用ForEach和LazyForEach语句。")])]),s("div",{class:"link"})])])])]),i(),s("tr",null,[s("td",{class:"cellrowborder",valign:"top",width:"22.567743225677432%"},[s("p",null,"keyGenerator")]),i(),s("td",{class:"cellrowborder",valign:"top",width:"25.497450254974503%"},[s("p",null,"(item: any) => string")]),i(),s("td",{class:"cellrowborder",valign:"top",width:"8.129187081291871%"},[s("p",null,"否")]),i(),s("td",{class:"cellrowborder",valign:"top",width:"43.80561943805619%"},[s("p",null,"键值生成函数，用于给数据源中的每一个数据项生成唯一且固定的键值。当数据项在数组中的位置更改时，其键值不得更改，当数组中的数据项被新项替换时，被替换项的键值和新项的键值必须不同。键值生成器的功能是可选的，但是，为了使开发框架能够更好地识别数组更改，提高性能，建议提供。如将数组反向时，如果没有提供键值生成器，则LazyForEach中的所有节点都将重建。"),i(),s("div",null,[s("div",{class:"hw-editor-tip"},[s("div",{class:"icon-panel"},[s("div",{class:"icon-img icon-img-info"})]),s("div",{class:"content-panel"},[s("div",{class:"title"},"说明"),s("div",{class:"content"},[s("p",null,"数据源中的每一个数据项生成的键值不能重复。")])]),s("div",{class:"link"})])])])])])],-1),d=a("",7),g=[e,r,d];function y(F,c,o,C,B,u){return k(),h("div",null,g)}const m=n(E,[["render",y]]);export{D as __pageData,m as default};

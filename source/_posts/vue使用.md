---
title: vue使用
date: 2025-04-05 10:32:14
tags:
- vue
categories:
- 前端框架 vue
---

# vue使用
## 知识点

##### 1. export default 和export 的区别
  ES6中，在JavaScript ES6中，export与export default均可用于导出常量、函数、文件、模块等
  export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能
  ``` javascript
    export var str = "export的内容";
    export var year =2019;
    export function message(sth) {
        return sth;
    }
  ```
  ```javascript
    var str = "export的内容";
    var year =2019;
    function message(sth) {
        return sth;
    }
    export {str,year,message}
  ```
  export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。一个文件内不能有多个export default。
  export与export default均可用于导出常量、函数、文件、模块等
  在一个文件或模块中，export、import可以有多个，export default仅有一个
  通过export方式导出，在导入时要加{ }，export default则不需要，并可以起任意名称
  输出单个值，使用export default
  输出多个值，使用export
  export default与普通的export不要同时使用
##### 2. 选项式API 和组合式API
    `<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。
    选项式 API 是在组合式 API 的基础上实现的
##### 3. vue 搭配使用的框架  
    - vite 前端构建工具,一个开发服务器，基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热替换（HMR）,一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
    - pinia 状态管理,pinia就是Vuex的新版本,我们需要创建一个根存储传递给应用程序，简单来说就是创建一个存储数据的数据桶，放到应用程序中去
    - router 路由管控
##### 4. 指令
|指令|说明|
|--|--|
|v-text|插值表达式相同,在页面加载时不会显示'message'，解决了插值表达式闪烁问题，因为他是属性而不是插值表达式|
|v-html||
|v-if|||
|v-else|必须和 v-if 连用|
|v-else-if| 必须和 v-if 连用|
|v-show|控制元素是否显示 的，其功能与 v-if 指令相似|
|v-for||
|v-on||绑定事件监听器 可简写为 @ 例如v-on:click|
|v-bind|绑定属性 可以缩写为:|
|v-model|在表单上创建双向数据绑定|
|v-pre|按原样输出|
|v-cloak|用来保持在元素上直到关联实例结束时进行编译|
|v-once|实例 只会渲染一次，执行 一次性地插值，当数据改变时，插值处的内容不会更新|
##### 5. setup 
``` ts
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      // 在 JavaScript 中需要 .value
      count.value++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      count,
      increment
    }
  }
}
```
`setup` 是一个特殊的钩子，专门用于组合式 API。
在 setup() 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用单文件组件 (SFC) 来避免这种情况。我们可以使用 <script setup> 来大幅度地简化代码：
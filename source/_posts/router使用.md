---
title: router使用
date: 2025-04-05 13:33:12
tags:
- vue
categories:
- 前端框架 vue
---

# router使用
#### 安装
```
npm install vue-router –save

# 
import VueRouter from 'vue-router'
Vue.use(VueRouter)

RouterLink ：不同于常规的 <a> 标签，使用组件 RouterLink 来创建链接
RouterView
在组件模板中使用 $route 来访问当前的路由对象

```
#### 术语
router 路由器实例 在组合式 API 中，它可以通过调用 useRouter() 来访问。在选项式 API 中，它可以通过 this.$router 来访问
route 当前路由 在组合式 API 中，它可以通过调用 useRoute() 来访问。在选项式 API 中，它可以通过 this.$route 来访问
#### 不同的历史模式
1. createWebHashHistory 它在内部传递的实际 URL 之前使用了一个井号（#）,这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。不过，它在 SEO 中确实有不好的影响
2. createMemoryHistory 不会假定自己处于浏览器环境，因此不会与 URL 交互也不会自动触发初始导航。这使得它非常适合 Node 环境和 SSR,不会有历史记录，这意味着你无法后退或前进 
3. createWebHistory URL 会看起来很 "正常"，例如 https://example.com/user/id, 后端处理路径404时，要指定index.html

#### 这个插件做了什么，它的职责包括：

全局注册 RouterView 和 RouterLink 组件。
添加全局 $router 和 $route 属性。
启用 useRouter() 和 useRoute() 组合式函数。
触发路由器解析初始路由。

#### vue-router 使用
1. 选项式 API
``` ts
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
```
2. 组合式 API
``` ts
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>
```
#### 嵌套路由
``` ts
// User.vue 
<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view />
  </div>
</template>

const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```
#### 注意
1. 使用带有参数的路由时需要注意的是，当用户从 /users/johnny 导航到 /users/jolyne 时，相同的组件实例将被重复使用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会被调用。
2. 
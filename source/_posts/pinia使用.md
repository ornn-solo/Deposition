---
title: pinia使用
date: 2025-04-05 11:19:47
tags:
- vue
categories:
- 前端框架 vue
---

# pinia使用
### pinia 介绍
#### 安装pinia 
    `npm install pinia`
1. src目录下新建store文件夹，用来存放各种store，然后在该目录下新建xxx.ts文件，主要用来存放与xxx相关的store
```
// xx.ts
export const xxxStore = defineStore('xxx', {
    state: () => {
    return {
      name: "xxx",
      num: 25
    };
  },
})

// 使用 xxxStore的地方，一般是 xxx.vue 文件
import { xxxStore } from "../src/store/user";
const store = xxxStore();

// 取值法 一
const name = ref<string>(store.name);
const num = ref<number>(store.num);
// 取值法 二：没有 ref 非响应式
const { name, num } = store;
// 取值法 三：响应式
const { nname, num } = storeToRefs(store);

// 重置，比如清空表单，搜索条件等
store.$reset();

// 批量修改:全部
store.$patch({
      name: "xxx2",
      num: 26
})
// 批量修改:其中几个数据
store.$patch(()=>{
  state.items.push({ name: 'xxx2'})
  state.hasChanged = true
})

// 替换整个state
store.$state = { age: 27, name: 'xxx3' }

// state 的 getters属性：返回一个新的结果，它和Vue中的computed属性类似
export const xxxStore = defineStore("users", {
  state: () => {
    return {};
  },
  getters: {
    getName: (state) => {
      return state.name;
    },
    getNameAndNum(): string {
      return this.num + this.getName; // 调用其它getter
    },
  },
});
// 使用 getters 的地方直接 {{store.getName}} 即可

// getters需要传参时，getters属性返回一个函数，使用这个属性的地方调用这个函数,例如 {{store.getName(12)}}
export const xxxStore = defineStore("users", {
  state: () => {
    return {};
  },
  getters: {
    getName: (state) => {
      return (order)=>state.name+ order;
    }
  },
});

// 业务代码写在 actions属性,使用的地方执行 store.changeName("yyy") 即可
export const xxxStore = defineStore("users", {
  state: () => {
    return {name:"xxx"};
  },
  getters: {},
  actions：{
    changeName(name: string) {
      this.name = name;
    }
  }
});
```

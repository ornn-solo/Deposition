---
title: hexo使用
date: 2025-04-04 22:17:59
tags: 
- Hexo
categories: 
- 其他
description: hexo 安装，部署到 github page，配置 butterfly 主题 
---

# hexo
## hexo 介绍
- [hexo 文档](https://hexo.io/zh-cn/docs/github-pages)
## hexo 命令

```
npm install -g hexo-cli                 // 安装 hexo  
hexo init                               // 初始化文件结构 
npm install                             // 安装hexo的支撑包 
hexo new "postName"                     // 新建文章
hexo new page "pageName"                // 新建页面
hexo server                             //开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo clean
hexo generate                          
hexo deploy                            // 一键部署 _config.yml 有部署配置（例如：部署到github，对应的整个 repo 会被占用）
```
## hexo 部署
一键部署会占用整个 repo；
换另一种部署方式，博客的源代码保存在github，用 github 的 action 部署
- 新增文件 .github/workflows/pages.yml <strong>[hexo官网介绍](https://hexo.io/zh-cn/docs/github-pages)</strong>
- github setting/pages 启用 action
- 确保 repo 名 是 username.github.io ,这样可以不用 username.github.io/projectname 访问
## hexo 更换主题

#### 使用 butterfly 主题
```
npm install hexo-theme-butterfly
npm install hexo-renderer-pug hexo-renderer-stylus --save

_config.yml 中改主题为 theme: butterfly

```

  
---
title: hexo使用
date: 2025-04-04 22:17:59
tags:
categories:
---
# hexo
## hexo 介绍
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
hexo deploy                            // _config.yml 有部署配置（例如：部署到github）
```

## hexo 更换主题

- 下载主题
```
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly 
npm i hexo-theme-butterfly 

```
_config.yml 中改主题为 theme: butterfly
  
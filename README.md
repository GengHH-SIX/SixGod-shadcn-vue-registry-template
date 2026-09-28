# Vue 3 + TypeScript + Vite + Shadcn-vue生态

## 项目

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

### 主要介绍

- 构建shadcn-vue生态资源，在原本的vue-ts模版中加入了Shadcn-vue 生态；

### 新增功能

1. 添加了Shadcn-vue 生态，配置`components.json`文件，使用`pnpm dlx shadcn-vue@latest add <component>`等指令添加组件。

2. 使用`pnpm shadcn:build` 指令 构建自己的属于shadcn-vue生态中的组件，block，hooks 等！

### 基本要求

1. shadcn-vue 生态默认使用CSS 框架的是`tailwindcss`，所以需要安装`tailwindcss`，并配置`tailwindcss`。
2. shadcn-vue 生态默认使用组件库的是 `rake-ui`，所以需要安装`rake-ui`。

### 安装使用内置组件

```shell
pnpm dlx shadcn-vue@latest add GengHH-SIX/SixGod-shadcn-vue-registry-template/card
```

- 可以使用类似的此命令来进行下载使用

### Shadcn-vue 生态

详情查看官网 [Shadcn-vue](https://www.shadcn-vue.com)

---

## 🚀 第三方安装与使用

通过这个模版项目构建自己的组件库，该组件库能全面兼容 `shadcn-vue` 生态。使用者可以通过以下任意一种方式将组件一键安装到你的项目中：

### 方案 A：一键直连（无需任何配置）

在他的项目根目录下直接运行：

```bash
pnpm dlx shadcn-vue@latest add https://githubusercontent.com
```

### 方案 B：配置短命名空间（推荐频繁使用者）

1. 在你项目的 `components.json` 中配置自定义源：
   ```json
   "registries": {
     "@Temp": "https://github.usercontent.com{name}.json"
   }
   ```
2. 运行短命令安装：
   ```bash
   pnpm dlx shadcn-vue@latest add @Temp/组件名
   ```

# Vue 3 + TypeScript + Vite + Shadcn-vue生态

## 项目

这个模板可以帮助你开始使用 Vue 3 和 TypeScript 在 Vite 环境中进行开发。该模板使用了 Vue 3 的 `<script setup>` SFCs，如需了解更多相关信息，请参考相关的文档说明[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)。

更多关于推荐的项目设置以及 IDE 支持的信息，请参阅 Vue 文档[Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup) 中的 TypeScript 指南。

### 主要介绍

- 构建shadcn-vue生态资源，在原本的`vite + vue-ts`模版中加入了`shadcn-vue` 生态；

### 新增功能

1. 添加了Shadcn-vue 生态，配置`components.json`文件，使用`pnpm dlx shadcn-vue@latest add <component>`等指令添加组件。

2. 使用`pnpm shadcn:build` 指令 构建自己的属于shadcn-vue生态中的组件，block，hooks 等！

3. `build` 时候，你可以指定不同的资源部署方式
    - 方式一（**默认**）：“Vercel（通过部署到静态网站，然后下载和使用）”，生成`registry.json`文件；
    - 方式二：“Github Pages（通过部署到静态网站，然后下载和使用）”，生成`registry.json`文件；
        - 提价代码到Github时候，请手动将`registry.json`文件放入到项目根目录下；
    - 方式三：“同时生成这两种”，生成`registry.json`和`registry-github.json`文件；
        - 提价代码到Github时候，请手动修改`registry-github.json`文件名为`registry.json`，并放入到项目根目录下，再提交代码到github；

### 基本要求

1. shadcn-vue 生态默认使用CSS 框架的是`tailwindcss`，所以使用该项目开发shadcn-vue生态资源时候，需要安装`tailwindcss`，并配置`tailwindcss`。
2. shadcn-vue 生态默认使用组件库的是 `rake-ui`，所以需要安装`rake-ui`。

### 安装使用内置组件

- 该模版中默认内置的资源：

| 组件名称    | 组件描述   | 组件类型 |
| ----------- | ---------- | -------- |
| hello-word  | 简单页面   | block    |
| card        | 卡片       | 组件     |
| collapsible | 折叠卡片   | 组件     |
| use-card    | 展示的demo | example  |

- 可以使用类似的此命令来进行下载使用

```shell
pnpm dlx shadcn-vue@latest add GengHH-SIX/SixGod-shadcn-vue-registry-template/card
```

### Shadcn-vue 生态

- 详情查看官网 [Shadcn-vue](https://www.shadcn-vue.com)

---

## 🚀 第三方安装与使用

通过这个模版项目构建自己的组件库，该组件库能全面兼容 `shadcn-vue` 生态。使用者可以通过以下任意一种方式将组件一键安装到他的项目中：

### 前提条件

- 目标指定的资源采用的资源部署方式是`静态资源部署方式`，也就是将资源部署到静态资源服务器`如：https://yourwebsit.com/`，然后下载使用

### 方案 A：一键直连（无需任何配置）

在他的项目根目录下直接运行：

```bash
pnpm dlx shadcn-vue@latest add https://yourwebsit.com/**/{name}.json
```

### 方案 B：配置短命名空间（推荐频繁使用者）

1. 在你项目的 `components.json` 中配置自定义源：

    ```json
    "registries": {
      "@Temp": "https://yourwebsit.com/**/{name}.json"
    }
    ```

2. 运行短命令安装：

    ```bash
    pnpm dlx shadcn-vue@latest add @Temp/组件名
    ```

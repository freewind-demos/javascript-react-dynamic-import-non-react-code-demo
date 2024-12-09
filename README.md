# React 动态导入非React代码演示

这个项目演示了如何在 React 应用中动态导入普通的 JavaScript 文件，并通过 DOM 操作添加内容。

## 功能特点

- 使用 React 作为基础框架
- 演示了动态导入（Dynamic Import）功能
- 展示如何在 React 应用中使用原生 DOM 操作
- 通过样式边界清晰展示动态加载的内容

## 如何运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm start
```

## 项目结构

- `src/App.jsx`: 主应用组件，包含动态导入逻辑
- `src/components/DynamicDom.js`: 包含原生 JavaScript DOM 操作的模块

## 使用说明

1. 运行项目后，你会看到一个带有按钮的页面
2. 点击 "Load Dynamic Content" 按钮
3. 将会动态加载并执行 JavaScript 代码，在页面上添加新的内容
4. 添加的内容会有明显的虚线边框，便于识别

## 技术说明

项目使用了以下技术：
- React
- Vite
- Dynamic Import (动态导入)
- 原生 DOM 操作

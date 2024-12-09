# React动态导入与状态共享演示

这个项目演示了如何在React中实现动态导入（Dynamic Import）组件，并通过React Context在主组件和动态导入的组件之间共享状态。

## 功能特点

1. 使用 `import()` 实现组件的动态加载
2. 通过React Context实现主组件和动态组件之间的状态共享
3. 组件之间的状态实时同步更新

## 使用方法

```bash
pnpm install
pnpm start
```

## 工作原理

1. 主组件包含一个用于加载动态组件的按钮
2. 两个组件都可以访问和修改共享的计数器状态
3. 任一组件中的状态变化都会立即反映在另一个组件中

## 技术栈

- React
- Vite
- React Context API（状态管理）

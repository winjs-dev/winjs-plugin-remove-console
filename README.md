# winjs-plugin-remove-console

适配 WinJS 的控制台输出移除插件。

<p>
  <a href="https://npmjs.com/package/@winner-fed/plugin-remove-console">
   <img src="https://img.shields.io/npm/v/@winner-fed/plugin-remove-console?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/@winner-fed/plugin-remove-console?minimal=true"><img src="https://img.shields.io/npm/dm/@winner-fed/plugin-remove-console.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## 功能介绍

在生产环境构建时自动移除代码中的 `console` 语句，减少打包体积并提升性能。该插件基于 `unplugin-remove` 实现，同时支持 Vite 和 Webpack 构建工具。

## 特性

- 🚀 **构建时移除**: 仅在构建（build）过程中运行，不影响开发环境
- 🔧 **双构建支持**: 同时支持 Vite 和 Webpack 构建工具
- ⚙️ **灵活配置**: 支持自定义配置选项
- 📦 **零配置**: 开箱即用，无需额外配置

## 安装

```bash
npm install @winner-fed/plugin-remove-console --save-dev
# 或者
yarn add @winner-fed/plugin-remove-console
# 或者
pnpm add @winner-fed/plugin-remove-console
```

或者使用 yarn:

```bash
yarn add @winner-fed/plugin-remove-console --dev
```

## 使用方法

### 基础用法

在 WinJS 项目中，插件会自动检测并移除构建时的 console 语句：

```javascript
// 开发环境 - 保留 console
console.log('这是开发环境的日志');
console.warn('这是警告信息');
console.error('这是错误信息');

// 生产环境构建后 - 自动移除上述 console 语句
```

### 配置选项

在 `win.config.ts` 中进行配置：

```typescript
import { defineConfig } from '@winner-fed/winjs';

export default defineConfig({
  plugins: [
    // 其他插件...
  ],
  removeConsole: {
    // 配置选项
  }
});
```

### 高级配置

```typescript
export default defineConfig({
  removeConsole: {
    // 自定义要移除的方法
    include: ['console.log', 'console.warn'],
    // 排除特定的方法
    exclude: ['console.error'],
    // 其他 unplugin-remove 配置选项
  }
});
```

## 配置参数

| 参数        | 类型         | 默认值        | 描述             |
| ----------- | ------------ | ------------- | ---------------- |
| `include` | `string[]` | `undefined` | 指定要移除的方法 |
| `exclude` | `string[]` | `undefined` | 指定要排除的方法 |

更多配置选项请参考 [unplugin-remove](https://github.com/Talljack/unplugin-remove) 文档。


## 技术实现

- 基于 `unplugin-remove` 实现跨构建工具支持
- 通过 AST 分析和转换自动移除指定的函数调用
- 支持 Vite 和 Webpack 两种构建工具

## 依赖

- `unplugin-remove`: 核心移除功能实现

## 注意事项

1. **仅构建时生效**: 插件只在 `npm run build` 时运行，开发环境不会移除 console 语句
2. **生产环境推荐**: 建议在生产环境中使用，以减少打包体积
3. **调试影响**: 移除 console 语句后，可能会影响生产环境的调试，请谨慎使用

 
## 许可证

[MIT](./LICENSE).

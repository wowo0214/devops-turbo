# Shared UI

shadcn 基础组件、认证界面和主题样式由 `@repo/ui` 统一维护。项目业务组件由各应用自己管理。

```tsx
import { Button } from "@repo/ui/button"
import { Input } from "@repo/ui/input"
import { Auth, Settings } from "@repo/ui/auth"
```

应用添加 `"@repo/ui": "workspace:*"` 依赖，在全局 CSS 中引入：

```css
@import "@repo/ui/styles";
```

字体加载及字体变量由各应用配置。使用 Toaster 的应用需要提供 next-themes 的 ThemeProvider。

认证组件从 AuthProvider 获取客户端及导航配置。各应用保留页面路由、Providers、auth-client、服务端 auth 和环境变量；公共包提供 AuthProvider、Auth、Settings 和配套插件。

公共组件可在本目录通过 `pnpm dlx shadcn@latest add <组件名>` 添加。
应用 components.json 的 ui、utils 别名也已指向公共包；业务组件仍生成在应用目录。

所有公开组件由 Bunchee 编译到 `dist`，公共 CSS 同步到 `dist/styles.css`。Auth 的辅助文件属于内部实现，不单独导出。

目录划分：

```text
packages/ui/src/
├─ button/index.tsx     # shadcn 公共组件
├─ input/index.tsx
├─ auth/                # 公共认证组件，index.tsx 是唯一公开入口
│  └─ lib/              # Auth 内部工具，不对外导出
├─ counter-button/      # index.tsx、index.test.tsx
├─ link/                # index.tsx、index.test.tsx
└─ styles.css           # 公共主题
```

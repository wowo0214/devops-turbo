# @repo/vite-config

公共配置独立导出，Next.js、Vite 等项目按需导入，不需要解构聚合配置。

```ts
import lint from '@repo/vite-config/oxlint'
import fmt from '@repo/vite-config/oxfmt'
import test from '@repo/vite-config/vitest'
```

项目自行声明 `"@repo/vite-config": "workspace:*"` 开发依赖，并决定配置入口与执行命令。
各工具为可选 peer dependency，只使用 Oxlint 的项目无需依赖 Oxfmt 或 Vitest。

Next.js 项目可以直接继承 Oxlint 配置：

```ts
import { defineConfig } from 'oxlint'
import base from '@repo/vite-config/oxlint'

export default defineConfig({
  ...base,
  rules: {
    ...base.rules,
    'no-empty': 'warn',
  },
})
```

Oxfmt 配置：

```ts
import { defineConfig } from 'oxfmt'
import base from '@repo/vite-config/oxfmt'

export default defineConfig({ ...base, printWidth: 100 })
```

Vitest 配置：

```ts
import { defineConfig } from 'vitest/config'
import base from '@repo/vite-config/vitest'

export default defineConfig({
  test: { ...base, environment: 'jsdom' },
})
```

Vite+ 项目可以自行组合所需配置：

```ts
import { defineConfig } from 'vite-plus'
import lint from '@repo/vite-config/oxlint'
import fmt from '@repo/vite-config/oxfmt'
import test from '@repo/vite-config/vitest'

export default defineConfig({ lint, fmt, test })
```

对象展开是浅合并，覆盖嵌套对象或追加数组时需显式保留原有字段。

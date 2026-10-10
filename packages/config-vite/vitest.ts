import type { ViteUserConfig } from 'vitest/config'

// 测试配置，使用 Vitest 进行单元测试
const base = {
  globals: true,
  environment: 'node',
  include: ['__tests__/**/*.{test,spec}.ts'],
} satisfies NonNullable<ViteUserConfig['test']>

export default base

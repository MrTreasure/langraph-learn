/** @type {import('jest').Config} */
module.exports = {
  // 基础配置
  testEnvironment: 'node',

  // 测试文件匹配模式
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],

  // 模块文件扩展名
  moduleFileExtensions: ['ts', 'js', 'json'],

  // 转换配置 - 使用 Babel 处理 TypeScript 和 JavaScript
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // 关键：不忽略任何 node_modules 的转换，确保所有 ES 模块都被处理
  transformIgnorePatterns: [],

  // 收集测试覆盖率
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],

  // 测试超时时间
  testTimeout: 30000,

  // 测试前设置的脚本
  // setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],

  // 忽略的测试路径
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // 覆盖率收集的目录
  collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.d.ts', '!src/**/*.test.{ts,js}', '!src/**/*.spec.{ts,js}'],
};

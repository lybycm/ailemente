module.exports = {
  transform: {
    // .vue文件用 vue-jest处理
    '^.+\\.vue$': 'vue-jest',
    // .js或者.jsx用babel-jest处理
    '^.+\\.jsx?$': 'babel-jest',
    // .ts文件用ts-jest处理
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
  collectCoverage: false,
  coverageReporters: ['json', 'html']
}
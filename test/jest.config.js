// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsconfig = require('../tsconfig.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '../',
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper,
}

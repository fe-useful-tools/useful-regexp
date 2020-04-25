const { defaults } = require('jest-config');

module.exports = {
  roots: [
    'test',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  testRegex: 'test/(.*?/)?.*test.ts$',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*',
  ],
};

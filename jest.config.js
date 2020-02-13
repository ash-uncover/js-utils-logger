module.exports = {
  "modulePaths": [
    "src",
    "test"
  ],
  "moduleFileExtensions": [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  "transform": {
    '^.+\\.ts?$': 'ts-jest',
  },
  "collectCoverageFrom": [
    "src/**/*.js",
    "src/**/*.ts",
    "!**/node_modules/**"
  ],
  "coverageDirectory": "test/__coverage__",
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  "coverageReporters": [
    "json",
    "lcov",
    "text",
    "text-summary"
  ]
}
module.exports = {
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  coverageReporters: [
    "text-summary",
    "lcov",
  ],
}

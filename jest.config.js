// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@context/(.*)$': '<rootDir>/context/$1',
    '^@misc/(.*)$': '<rootDir>/misc/$1',
    '^@model/(.*)$': '<rootDir>/model/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@services/(.*)$': '<rootDir>/services/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['cypress'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

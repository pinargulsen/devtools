/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    cache: false,
    testEnvironment: 'node',
    testTimeout: 300_000,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    transformIgnorePatterns: ['node_modules/(?!zx)'],
};

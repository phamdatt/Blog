// jest.config.js
module.exports = {
    // other configurations...
    testEnvironment: 'jsdom',
    coverageReporters: ["json", "lcov", "text", "clover"],
    collectCoverageFrom: ["src/**/*.js"],
};

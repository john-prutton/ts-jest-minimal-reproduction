module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: ".*\\.test\\.ts$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
}

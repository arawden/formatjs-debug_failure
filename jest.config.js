module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      astTransformers: {
        before: [{
          path: "@formatjs/ts-transformer/ts-jest-integration",
          options: {
            overrideIdFn: "[sha512:contenthash:base64:6]",
            ast: true,
          },
        },],
      },
    },
  },
};
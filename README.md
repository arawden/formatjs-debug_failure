# FormatJS - `Debug Failure. Test expression`

With the following code, running `npm run test` yields the error in the title of the README.

This error only occurs in files in our codebase which use the `FormattedMessage` component.
I've tried to isolate the issue as best I can.

I feel like there are probably 2 likely issues:
1. Some kind of bad config between `jest.config.js`, `webpack.config.js`, and `tsconfig.json`
2. Some kind of bad setup in the `test-utils.tsx` file. 
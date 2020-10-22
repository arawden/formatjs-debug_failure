import * as React from 'react';

import { IntlProvider } from 'react-intl';

import Component from './Component';

const App = (): JSX.Element => {
  return (
    <IntlProvider defaultLocale="en" locale="en">
      <Component />
    </IntlProvider>
  );
}

export default App;

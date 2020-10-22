import React from "react";
import { render as rtlRender } from "@testing-library/react";

import { IntlProvider } from "react-intl";
import IntlPolyfill from "intl";
import "intl/locale-data/jsonp/en";
import "intl/locale-data/jsonp/ar";

// exports a custom render function for react testing library
// which provides us with a clean way to interact with redux
// https://testing-library.com/docs/example-react-redux
//

// typescript version found here:
// https://github.com/testing-library/react-testing-library/issues/634#issuecomment-613168127
function render(ui: React.ReactElement, renderOptions?) {
  const locale = renderOptions?.locale ?? "en";
  const messages = renderOptions?.messages;

  setupIntlTests();

  function Wrapper({ children }): React.ReactElement {
    return (
      <IntlProvider locale={locale} messages={messages} defaultLocale="en">
        {children}
      </IntlProvider>
    );
  }
  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
}

function setupIntlTests() {
  if (global.Intl) {
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  } else {
    global.Intl = IntlPolyfill;
  }
}

// re-export everything from RTL
export * from "@testing-library/react";

// override render method
export { render };

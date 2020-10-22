import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

let reactRoot = document.getElementById('react-root');
if (reactRoot) {
  ReactDOM.render(
    <App />,
    reactRoot
  )
}
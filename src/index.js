// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './global-styles/page.scss';

const rootDomElement = document.getElementById('root');
if (rootDomElement === null) {
  throw new Error("No root element to bootstrap react applciation");
}

ReactDOM.render(<App />, rootDomElement);

registerServiceWorker();


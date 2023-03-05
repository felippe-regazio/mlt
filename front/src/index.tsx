import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from './store/'

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './global.css';

if (typeof window !== 'undefined') {
  document.body.classList.add('plume');
  document.body.style.margin = '0px';
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
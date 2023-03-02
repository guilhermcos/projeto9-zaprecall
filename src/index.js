import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderApp from './App';
import GlobalStyle from './globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RenderApp />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>  {/* to je len obal ktorý ti v developmente vypisuje extra varovania ak niečo robíš zle */}
      <App />
    </React.StrictMode>,
  )
}

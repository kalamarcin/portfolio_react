import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './i18next'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading ~~~</div>)}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);



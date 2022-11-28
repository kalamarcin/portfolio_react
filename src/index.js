import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './i18next'
import GlobalStore from './components/Store/GlobalStore';
import './index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStore>
    <Suspense fallback={(<div>Loading ~~~</div>)}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Suspense>
  </GlobalStore>
  </React.StrictMode>
);



import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './i18next'
import GlobalStore from './components/Store/GlobalStore'
import './index.scss'
import Loading from './components/Loading/Loading'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStore>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </GlobalStore>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './store/index.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider  store={Store}>
    <App />
  </Provider>
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './sass/@globals.sass'
import { Provider } from "react-redux";
import { store } from "./store";
import './sass/@normalize.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

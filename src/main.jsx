import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext.jsx'
import RouteGuardContext from './contextAPI/RouteGuardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='98655777662-agiecsceli3t8gjmtla7gbbnoti7a2k9.apps.googleusercontent.com'>
        <ShareContext>
          <RouteGuardContext>
            <App />
          </RouteGuardContext>
        </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

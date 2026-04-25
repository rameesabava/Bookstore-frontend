import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='98655777662-agiecsceli3t8gjmtla7gbbnoti7a2k9.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

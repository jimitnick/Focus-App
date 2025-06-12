import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from './components/LoginAndLogout/Login.jsx'
import { UserContext, UserProvider } from './contextProviders/UserContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/homepage' element={<App />}/>
        </Routes>
      </BrowserRouter>  
    </UserProvider>
  </StrictMode>,
)

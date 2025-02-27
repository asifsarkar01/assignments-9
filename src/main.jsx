import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './utils/router'
import Authprovider from './components/Authprovider/Authprovider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider routes={<RouterProvider router={router} ></RouterProvider>}>
    
    </Authprovider>
    
  </StrictMode>,
)

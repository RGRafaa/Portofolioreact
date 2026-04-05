import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx' // <-- Import router yang tadi lu bikin
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Di sini kita panggil RouterProvider-nya, bukan <App /> lagi */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
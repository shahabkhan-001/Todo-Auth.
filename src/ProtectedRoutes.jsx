import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
  return ( localStorage.getItem("uid") ? <Outlet/> : <Navigate to="/" />
  )
}
export default ProtectedRoutes

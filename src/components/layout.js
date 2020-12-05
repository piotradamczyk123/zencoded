import React from "react"
import Navbar from "../components/navbar"
import Link from "gatsby"

const Layout=({ children }) => {
  return (
  
    <div>
       <Navbar/>
      
      {children}
    </div>
  )
}

export default Layout
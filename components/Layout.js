import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={` bg-[url('/images/netflixBg.jpg')] bg-no-repeat bg-cover bg-fixed ${className}  
    
    `}>
        {children}
    </div>
  )
}

export default Layout
import React from 'react'
import { motion } from 'framer-motion'

const BgGradient = () => {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen  
    bg-gradient-to-br from-dark to-pink bg-opacity-40 -z-10 '
        initial={{x:"100%",width:"100%"}}
        />
    </>
  )
}

export default BgGradient
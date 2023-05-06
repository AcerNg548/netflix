import React from 'react'
import { motion } from 'framer-motion'

const Dark = () => {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen -z-10 bg-black bg-opacity-60 '
        initial={{x:"100%",width:"100%"}}
        />
    </>
  )
}

export default Dark
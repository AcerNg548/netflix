import React from 'react'
import { motion } from 'framer-motion'

const Dark = () => {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen  bg-dark '
        initial={{x:"100%",width:"100%"}}
        />
    </>
  )
}

export default Dark
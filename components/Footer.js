import React from 'react'

import Link from 'next/link'

const Footer = () => {
    return (
      <footer className='w-screen h-3/5 bg-black text-neutral-500 pt-8 pb-16 flex justify-center mt-20
      items-center text-xs  cursor-pointer gap-40 bg-opacity-60 '>
          <div className='flex flex-col'>
            <a href='https://help.netflix.com/contactus'  className='mb-2 hover:underline'>Questions? Contact us</a>
            <a href='https://help.netflix.com/support/412'  className='my-2  hover:underline'>FAQ</a>
            <a href='http://localhost:3000/auth'  className='mt-2  hover:underline'>Cookie Preferences</a>
          </div>
          <div className='flex flex-col'>
            <a href='https://help.netflix.com/' className='my-2 hover:underline'>Help Center</a>
            <a href='https://help.netflix.com/legal/corpinfo' className='mt-2 hover:underline'>Corporate Information</a>
          </div>
          <div className='flex flex-col'>
            <a href='https://help.netflix.com/legal/termsofuse' className='my-2 hover:underline'>Terms of Use</a>
          </div>
          <div className='flex flex-col'>
            <a href='https://help.netflix.com/legal/privacy' className='my-2 hover:underline'>Privacy</a>
            <a href='https://github.com/AcerNg548' className='my-2 hover:underline'>..psst😎design by AcerNg548</a>
          </div>
      </footer>
    )
  }
  
  export default Footer
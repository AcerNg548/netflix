import React from 'react'

const Foot = () => {
  return (
    
    <footer className='w-screen h-3/5 bg-dark text-slate-400 pt-8 pb-16 flex flex-col justify-start  mt-20 mx-24
       text-sm  cursor-default gap-14 font-semibold'>
        
        <div>
          <a href='https://help.netflix.com/contactus'  className='underline'>Questions? Contact us</a>
        </div>
        
        <div className="items-start flex  ">
        
        <div className='flex flex-col mr-20'>
            <a href='https://help.netflix.com/support/412'  className='mb-2  underline'>FAQ</a>
            <a href='http://localhost:3000/auth'  className='my-2  underline'>Investor Relations</a>
            <a href='http://localhost:3000/auth'  className='my-2  underline'>Privacy</a>
            <a href='http://localhost:3000/auth'  className='mt-2  underline'>Speed Test</a>
        </div>
        <div className='flex flex-col mx-20'>
            <a href='https://help.netflix.com/' className='mb-2 underline'>Help Center</a>
            <a href='https://help.netflix.com/legal/corpinfo' className='my-2 underline'>Jobs</a>
            <a href='http://localhost:3000/auth'  className='my-2  underline'>Cookie Preferences</a>
            <a href='http://localhost:3000/auth'  className='mt-2  underline'>Legal Notices</a>
        </div>
        <div className='flex flex-col mx-20'>
            <a href='https://help.netflix.com/legal/termsofuse' className='mb-2 underline'>Account</a>
            <a href='https://help.netflix.com/legal/termsofuse' className='my-2 underline'>Ways to Watch</a>
            <a href='https://help.netflix.com/legal/termsofuse' className='my-2 underline'>Corporate Information</a>
            <a href='https://help.netflix.com/legal/termsofuse' className='mt-2 underline'>Only on Netflix</a>
        </div>
        <div className='flex flex-col ml-20'>
            <a href='https://help.netflix.com/legal/privacy' className='mb-2 underline'>Media Center</a>
            <a href='https://help.netflix.com/legal/privacy' className='my-2 underline'>Terms of Use</a>
            <a href='https://help.netflix.com/legal/privacy' className='my-2 underline'>Contact Us</a>
            <a href='https://github.com/AcerNg548' className='mt-2 underline'>..psst😎design by AcerNg548</a>
        </div>
        </div>
        <p>Netflix Nigeria</p>
      </footer>
  )
}

export default Foot
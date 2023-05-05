import React from 'react'
import Input from '@/components/input'

const auth = () => {
  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')]  bg-no-repeat bg-center bg-cover sm:bg-black ">
        <div className="w-full h-full bg-black bg-opacity-50">
            <nav className="px-12 py-5">
            <img src='/images/logo.png' alt='logo' className="h-12" />
            </nav>
            <div className='flex justify-center'>
                <div className='p-16 bg-black bg-opacity-70 self-center rounded-md mt-2 w-full lg:w-2/5 lg:max-w-md'>
                    <h2 className='text-white text-4xl font-semibold mb-8'>Sign in</h2>
                    <div className='flex flex-col gap-4'>
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default auth
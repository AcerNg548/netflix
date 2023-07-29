import React from 'react'
import RightSign from '../components/icons'

const Email = () => {
  return (
    <>
        <div className="mt-6 flex w-2/5 gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
              <div className='flex'>
              <button
                type="submit"
                className="flex-none rounded-md flex bg-netRed px-3.5 py-2.5 text-md justify-center items-center font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get Started
                <RightSign  />
              </button>
              
              </div>
              
            </div>
    </>
  )
}

export default Email
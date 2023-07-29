import React from 'react'
import Image from 'next/image'
import Footer from '../components/Foot'
import net1 from '../public/images/en.png'
import net from '../public/images/en1.png'
import net2 from '../public/images/en2.png'
import net3 from '../public/images/en3.png'
import Input from '@/components/input'
import BgGradient from '../components/BgGradient'
import inputEmail from '../components/inputEmail'
import Acc from '../components/Acc'
import { RightSign } from '@/components/icons'
const signIn = () => {
  return (
    <>
    
    <div className='flex justify-between my-5 mx-10 ' >
        <nav className="">
            <img src="/images/logo.png" alt="logo" className="h-12"/>
        </nav>
        <div>
            <button className='bg-netRed text-white font-bold text-sm px-4 py-2 rounded-md
            hover:bg-red-700
            ' >
                Sign In
            </button>
        </div>
    </div>
    <div className="rounded-2xl mx-10 bg-[url('../netflixBg1.jpg')] bg-no-repeat bg-cover mb-4 "  >
    <div className="w-full   
            bg-gradient-to-tr from-dark/70 from-15% via-dark1/70 via-50%  to-pink1/70 to-95%  rounded-2xl ">
        <div className="py-60 pl-24 w-full flex flex-col items-center">
            
            <h2 className='text-5xl  text-white leading-normal mb-4 font-black  ' >Unlimited movies, TV shows, and more</h2>
            <h2 className='text-xl font-bold text-white leading-normal my-4 ' >Watch anywhere. Cancel anytime.</h2>
            <h2 className='text-lg font-semibold text-white leading-normal mb-2' >Ready to watch? Enter your email to create or restart your membership.</h2>
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
                className="flex-none rounded-md flex bg-netRed px-3.5 py-2.5 text-md justify-center items-center font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get Started
                <RightSign  />
              </button>
              
              </div>
              
            </div>

        </div>
    </div>
    </div>
    <div className='bg-gradient-to-br from-dark  from-15% via-dark1 via-75%  to-pink to-100% mx-10 rounded-lg mt-5  ' >
    <div className='py-20 justify-center pl-24 w-full'>
        <div className="flex flex-row justify-center  items-center  ">
            <div className='w-2/5'>
                <h2 className='text-5xl font-black text-white leading-normal mb-4 ' >Enjoy on your TV</h2>
                <h2 className='text-xl font-bold text-white leading-normal mt-4 mb-6 ' 
                >Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>
            <div className="ml-20">
                <Image src={net} className="w-11/12" alt='img1'/>
            </div>
        </div>
    </div>

    <div className='px-20'>
    <div className="w-full h-2 bg-b px-20 justify-center"><p className="text-b"></p></div>
    </div>

    <div className='py-20 justify-center pl-16 w-full'>
        <div className="flex flex-row  items-center justify-center  ">
            <div className="">
                <Image src={net1} className="w-11/12" alt='img2'/>
            </div>
            <div className='w-2/5 '>
                <h2 className='text-5xl font-black text-white leading-normal mb-4 ' >Watch everywhere</h2>
                <h2 className='text-xl font-bold text-white leading-normal mt-4 mb-6 ' 
                >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
            </div>
        </div>
    </div>

    <div className='px-20'>
    <div className="w-full h-2 bg-b px-20 justify-center"><p className="text-b"></p></div>
    </div>


    <div className='py-20 justify-center pl-24 w-full'>
        <div className="flex flex-row justify-center  items-center  ">
            <div className='w-2/5'>
                <h2 className='text-5xl font-black text-white leading-normal mb-4 ' >Create profiles for kids</h2>
                <h2 className='text-xl font-bold text-white leading-normal mt-4 mb-6 ' 
                >Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
            </div>
            <div className="ml-20">
                <Image src={net2} className="w-11/12" alt='img1'/>
            </div>
        </div>
    </div>

    <div className='px-20'>
    <div className="w-full h-2 bg-b px-20 justify-center"><p className="text-b"></p></div>
    </div>
    
    <div className='py-20 justify-center pl-16 w-full'>
        <div className="flex flex-row  items-center justify-center  ">
            <div className="">
                <Image src={net3} className="w-11/12" alt='img2'/>
            </div>
            <div className='w-2/5 '>
                <h2 className='text-5xl font-black text-white leading-normal mb-4 ' >Download your shows to watch offline</h2>
                <h2 className='text-xl font-bold text-white leading-normal mt-4 mb-6 ' 
                >Save your favorites easily and always have something to watch.</h2>
            </div>
        </div>
    </div>
    
    </div>

    <div className='w-5/8 my-40 flex flex-col gap-10 items-center'>
        
        <h2 className='text-5xl items-center font-black text-center text-slate-100'>Frequently Asked Questions</h2>
        <div className='w-4/5 justify-center flex flex-col gap-20'>
            <div>
                <Acc />
            </div >
                <div className="flex flex-col items-center justify-center gap-5">
                    <h2 className='font-bold text-3xl text-netWhite text-center'>Ready to watch? Enter your email to create or restart your membership.</h2>
                <div className="mt-6 flex w-3/5 gap-x-4">
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
                className="flex-none rounded-md flex bg-netRed px-3.5 py-2.5 text-md justify-center items-center font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get Started
                <RightSign  />
              </button>
              
              </div>
              
            </div>
                </div>
        </div>
        
        
    </div>
    
    <Footer />
    
    </>
  )
}

export default signIn
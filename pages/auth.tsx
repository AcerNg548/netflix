import { useCallback, useState } from 'react';
import Input from '@/components/input'
import {  Check } from '@/components/icons'



const auth = () => {

    const[email, setEmail] = useState ('');
    const[name, setName] = useState ('');
    const[password, setPassword] = useState ('');

    const[variant, setVariant] = useState ('login');

    const toggleVariant = useCallback (() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, [])


  return (
    <div className="relative w-full h-full bg-[url('/images/netflixBg.jpg')]  bg-no-repeat bg-center bg-cover sm:bg-black ">
        <div className="w-full h-full bg-black lg:bg-opacity-50">
            <nav className="px-12 py-5 ">
            <img src="/images/logo.png" alt="logo" className="h-12 " />
            </nav>
            <div className='flex justify-center'>
                <div className='p-16 bg-black bg-opacity-70 self-center rounded-md mt-2 w-full lg:w-2/5 lg:max-w-md'>
                    <h2 className='text-white text-4xl font-semibold mb-8'>
                        {variant === 'login' ? 'Sign In' : 'Register'}
                    </h2>
                    <div className='flex flex-col gap-4 '>
                        {variant === 'register' && (
                            <Input 
                            label="Username" 
                            onChange={(ev: any) => setName(ev.target.value)} 
                            value={name} 
                            id="name" 
                               />
                        )}
                        
                        <Input 
                        label="Email or phone number" 
                        onChange={(ev: any) => setEmail(ev.target.value)} 
                        value={email} 
                        id="email" 
                        type="email"   />
                        <Input 
                        label="Password" 
                        onChange={(ev: any) => setPassword(ev.target.value)} 
                        value={password} 
                        id="password"
                        type="password"  
                           />
                    </div>
                    <button 
                    className=" bg-red-700 py-3 rounded-md text-white w-full mt-10
                   \
                    "  >
                        {variant === 'login' ? 'Sign in' : 'Sign up'}
                    </button>
                    
                    {variant === 'login' && (
                            <div className='flex justify-between text-neutral-300 mt-4 text-sm'>
                    
                            <div className='flex'>
                            <label htmlFor='check-box-1' className='cursor-pointer relative'>
                                <input type='checkbox' id='check-box-1'
                                className='appearance-none w-5 h-5 bg-neutral-700 rounded-sm  ' />
                                <Check className={"text-opacity-0 text-black z-10 w-4 h-4 absolute top-0.5 left-0.5 check-1 transition"} />
                            </label>
                            <h2 className='ml-1 cursor-default '>Remember me</h2>
                            </div>      
                            <h2 className='hover:underline cursor-pointer'>Need help?</h2>
                            </div>
                        )}

                    
                    <p className="text-neutral-500 mt-12  ">
                        {variant === 'login' ? 'New to Netflix?' : 'Already have an account?'}
                        <span onClick={toggleVariant} className="ml-2 text-white hover:underline cursor-pointer">
                        {variant === 'login' ? 'Create an account' : 'Login'}
                        </span>
                    </p>
                    <p className="text-neutral-400 mt-2 ">
                        <span className="text-xs text-justify leading-tight ">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        </span>
                        &nbsp;
                        <button className='text-blue-500 hover:underline text-xs'>Learn more</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default auth
import { useCallback, useState } from 'react';
import Input from '@/components/input'
import {  Check } from '@/components/icons'
import axios from 'axios';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


const auth = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback (() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, [])

    const login = useCallback(async () => {
        try {
          await signIn('credentials', {
            email,
            password,
            redirect: false,
            callbackUrl: '/'
          });
    
          router.push('/profiles');
        } catch (error) {
          console.log(error);
        }
      }, [email, password, router]);
    
      const register = useCallback(async () => {
        try {
          await axios.post('/api/register', {
            email,
            name,
            password
          });
    
          login();
        } catch (error) {
            console.log(error);
        }
      }, [email, name, password, login]);

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
                            onChange={(e: any) => setName(e.target.value)} 
                            value={name} 
                            id="name" 
                               />
                        )}
                        
                        <Input 
                        label="Email or phone number" 
                        onChange={(e: any) => setEmail(e.target.value)} 
                        value={email} 
                        id="email" 
                        type="email"   />
                        <Input 
                        label="Password" 
                        onChange={(e: any) => setPassword(e.target.value)} 
                        value={password} 
                        id="password"
                        type="password"  
                           />
                    </div>
                    <button onClick={variant === 'login' ? login : register }
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
            
                      <div className="flex flex-row items-center gap-10 mt-8 justify-center">
                          <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                            <FcGoogle size={32} />
                          </div>
                          <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                              <FaGithub size={32} />
                      </div>
                      </div>

                    <div>
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
    <div>
      
    </div>
    </div>
  )
}

export default auth
import Head from 'next/head'
import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react'
import useAuth from '../hooks/useAuth';
interface Inputs{
  email:String 
  password:String 
}
const Login = () => {
  const [login,setLogin]=useState(false)
  const {signIn,signUp}=useAuth();//get this function from useAuth from hooks folder
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({email,password}) => {
    if(login){
      await signIn(email,password)
    }else{
      await signUp(email,password)
    }
  };
  return (
    <div className='relative flex h-screen flex-col bg-black  md:items-center
      md:justify-center md:bg-transparent'>
      <Head>
        <title>Login - Netflix</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt=''
      />
      <img 
        src="https://rb.gy/ulxxee"
        className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6'
        width={150} height={150}
        />
        {/*"handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form 
        onSubmit={handleSubmit(onSubmit)}
        ///* register your input into the hook by invoking the "register" function

        className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6
        md:mt-0 md:max-w-md md:px-14'>
        <h1 className='text-4xl font-semibold'>Sign in</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input 
              type="email" 
              placeholder='Email' 
              {...register('email',{required:true})}
              className='input'/>
              {errors.email && 
                (
                  <p className='p-1 text-[13px] font-light text-orange-500'>
                  Please Enter a valid email
                </p>
                )
              }
          </label>
          <label className='inline-block w-full'>
            <input 
              type="password" 
              {...register('password',{required:true})}
              placeholder='Password' 
              className='input'/>
              {errors.password && 
                (
                  <p className='p-1 text-[13px] font-light text-orange-500'>
                    Your password must be contain 4 to 60 Character 
                  </p>
                )
              }
          </label>
        </div>
        <button 
          onClick={()=>{setLogin(true)}}
          className='w-full rounded bg-[#E50914] py-3 font-semibold'>
          Sign In 
        </button>
        <div className='text-[gray]'>
          New to Netflix?{' '}
          <button 
            type="submit" 
            onClick={()=>setLogin(false)}
            className='text-white hover:underline'>
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login

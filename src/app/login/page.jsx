/* eslint-disable react/no-unescaped-entities */
import { Button,Checkbox, Input} from 'antd';
// import {GoogleOutlined} from '@ant-design/icons';

export default function login() {
  return (
    // Main Body
    <main className="flex items-center justify-center p-10 lg:pt-10 flex-col">
        {/* LOGO */}
        <h6 className="mt-20 lg:mt-1">logo</h6>
        <h4 className="lg:mt-5 text-xl font-bold text-[#343434]">Sign in to your account</h4>
        {/* FORM Section */}
        <section className=" w-full mt-10  lg:mt-5 flex flex-col shadow-md p-4 lg:w-[35%] border border-slate-100">
            <div className='p-2 mt-3'>
            <label htmlFor="email" className='text-sm text-[#353535]'>Email address</label>
            <Input className=' h-10 lg:h-8' name='email'/>
            </div>
            <div className='p-2 mt-3'>
            <label htmlFor="password" className='text-sm text-[#353535]'>Password</label>
            <Input className='h-10 lg:h-8' name='password' label="Fullname"/>
            </div>
            <div className='flex justify-between  p-2 mt-3'>
            <Checkbox>
            Remember me
            </Checkbox>
            <p className='text-xs text-[#0042EC]'>Forgot Password?</p>
            </div>
            <Button type='primary' className=' h-10 mt-4 bg-[#0042EC] border-none text-sm ml-2 text-white'>Sign in</Button>
            <h5 className='text-center text-sm text-[#353535] mt-5'>Or</h5>
            <Button className='mt-4 h-10 border border-slate-200 text-sm ml-2 text-black'>Sign in with Google</Button>
        </section>

        <h6 className='mt-5 text-sm'>Don't have an account? <span className='text-[#0042EC]'>Sign Up</span></h6>

      </main>
  )
}

 
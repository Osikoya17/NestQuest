/* eslint-disable react/no-unescaped-entities */
import { Button,Checkbox, Input} from 'antd';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons'
// import {GoogleOutlined} from '@ant-design/icons';

export default function login() {
  return (
    <main className="flex items-center pt-10  flex-col">
        <h6 className="">logo</h6>
        <h4 className="mt-2 text-xl font-bold text-[#343434]">Sign in to your account</h4>
        <section className=" mt-5 flex flex-col shadow-md p-4 w-[35%] border border-slate-100">
            <div className='p-2 mt-3'>
            <label htmlFor="email" className='text-sm text-[#353535]'>Email address</label>
            <Input className='h-7' name='email'/>
            </div>
            <div className='p-2 mt-3'>
            <label htmlFor="password" className='text-sm text-[#353535]'>Password</label>
            <Input className='h-7' name='password' label="Fullname"/>
            </div>
            <div className='flex justify-between  p-2 mt-3'>
            <Checkbox>
            Remember me
            </Checkbox>
            <p className='text-xs text-[#0042EC]'>Forgot Password?</p>
            </div>
            <Button type='primary' className='mt-4 bg-[#0042EC] border-none text-sm ml-2 text-white'>Sign in</Button>
            <h5 className='text-center text-sm text-[#353535] mt-5'>Or</h5>
            <Button className='mt-4 border border-slate-200 text-sm ml-2 text-black'>Sign in with Google</Button>
        </section>

        <h6 className='mt-5 text-sm'>Don't have an account? <span className='text-[#0042EC]'>Sign Up</span></h6>

      </main>
  )
}

 
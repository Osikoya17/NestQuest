
import { Button,Checkbox, Input} from 'antd';


export default function signup() {
    return (
      <main className="flex items-center pt-5  flex-col">
        <h6 className="">logo</h6>
        <h4 className="mt-2 text-xl font-bold text-[#343434]">Create an account </h4>
        <section className=" mt-5 flex flex-col shadow-lg p-4 w-[35%] border border-slate-100">
            <div className='p-2'>
            <label htmlFor="fullname" className='text-sm text-[#353535]'>Fullname</label>
            <Input className='h-7' name='fullname'/>
            </div>
            <div className='p-2 mt-3'>
            <label htmlFor="email" className='text-sm text-[#353535]'>Email address</label>
            <Input className='h-7' name='email'/>
            </div>
            <div className='p-2 mt-3'>
            <label htmlFor="password" className='text-sm text-[#353535]'>Password</label>
            <Input className='h-7' name='password' label="Fullname"/>
            </div>
            <div className='flex justify-between  p-2 mt-3'>
            <Button className='w-48 h-7 text-[#ABA5A5]'> I am a Student</Button>
            <Button className='w-48 h-7 text-[#ABA5A5]'>I am a LandLord</Button>
            </div>
            <Checkbox className='p-2 text-[#353535] mt-3'>
            I agree to all Terms and Conditions
            </Checkbox>
            <Button type='primary' className='mt-4 bg-[#0042EC] border-none text-sm ml-2 text-white'>Sign Up</Button>
        </section>

        <h6 className='mt-5 text-sm'> Already have an account? <span className='text-[#0042EC]'>Sign In</span></h6>

      </main>
    )
  }
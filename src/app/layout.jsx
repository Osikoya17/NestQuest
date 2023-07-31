import './globals.css'
import { Button} from 'antd'
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='flex flex-row justify-between w-full  h-16 p-5'>
          <div className="basis-1/4 flex justify-center text-sm"><h1>logo<b>NestQuest</b></h1></div>
          <div className=" hidden basis-1/2 md:flex  justify-evenly text-slate-500">
            <h6 className='text-sm font-bold border-b-2 border-black text-black '>Home</h6>
            <h6 className='text-sm'>Search</h6>
            <h6 className='text-sm'>FAQs</h6>
            <h6 className='text-sm'>Contact Us</h6>
          </div>
          <div className="basis-1/4 flex justify-center">
            <Link href={"/login"} ><Button type='text' className='text-sm'>Sign In</Button></Link>
            <Link href={"/signup"} ><Button type='primary' className='bg-[#0042EC] border-none text-sm ml-2 h-8 text-white'>Sign Up</Button></Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

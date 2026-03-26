import { ArrowRightIcon, CloudFogIcon, CloudIcon } from 'lucide-react'
import { Link } from 'react-router'
import SkyBackGround from '../components/SkyBackGround'

const WelcomePage = () => {
  return (
    <div className='w-screen h-screen text-white'>
        <SkyBackGround />
        <div className='absolute top-0 left-0 w-full h-full'>
            <div>
                <div className='absolute top-0 left-0 w-full text-shadow-2xl'>
                    <div className='max-w-350 mx-auto h-20 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <CloudIcon className='size-9' />
                            <p className='text-2xl font-extrabold'>rahona</p>
                        </div>
                        <div className='flex gap-8'>
                            <Link to={"/login"}>
                                Log In
                            </Link>
                            <Link to={"/signup"}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full h-screen flex items-center text-center'>
                    <div className='max-w-350 mx-auto '>
                        <p className='font-extrabold text-8xl'>Rahona</p>
                        <p className=''></p>
                        <button className='btn btn-primary rounded-4xl py-3 px-7 mt-5'>
                            Get started
                            <ArrowRightIcon size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage
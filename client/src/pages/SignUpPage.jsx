import { EyeClosed, User2Icon } from "lucide-react"
import SkyBackGround from "../components/SkyBackGround"
import { Link } from "react-router"

const SignUpPage = () => {
  return (
    <div className='w-screen h-screen text-white'>
            <SkyBackGround />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className="bg-white text-black w-fit p-5 rounded-2xl">
                    <p className="font-bold text-2xl mb-3 text-center">Sign Up</p>
                    <form action="" className="">
                        <div className="">
                            <div>
                                <label htmlFor="emailIN" className="">Your email</label>
                                <input id="emailIN" placeholder="Rakoto" className="input outline-0 w-full my-2.5"></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-full my-3.5">Continue</button>
                    </form>
                    <div className="pt-2.5">
                        <p className="text-black/50 text-sm">
                            Have an account already?
                            <Link to={"/login"} className="btn btn-link ml-auto">Log In</Link>
                        </p>
                    </div>
                </div>   
            </div>
        </div>
  )
}

export default SignUpPage
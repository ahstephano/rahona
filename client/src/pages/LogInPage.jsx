import { EyeClosed, User2Icon } from "lucide-react"
import SkyBackGround from "../components/SkyBackGround"
import { Link } from "react-router"

const LogInPage = () => {
    return (
        <div className='w-screen h-screen text-white'>
            <SkyBackGround />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className="bg-white text-black w-fit p-5 rounded-2xl">
                    <p className="font-bold text-2xl mb-3 text-center">Log In</p>
                    <form action="" className="">
                        <div className="">
                            <div>
                                <label htmlFor="idIn" className="">Email</label>
                                <input id="idIn" placeholder="example@example.com" className="input outline-0 w-full my-2.5"></input>
                            </div>
                            <div>
                                <label htmlFor="pwdIn">Password</label>
                                <div className="flex items-center gap-2.5">
                                    <input id="pwdIn" placeholder="Your password" className="input outline-0 my-2.5" type="password"></input>
                                    <EyeClosed />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-full my-3.5">Log In</button>
                    </form>
                    <div className="text-center">
                        <p className="text-black/50 text-sm">Log In with</p>
                        <div className="grid grid-cols-2 gap-5 mt-2.5">
                            <button className="btn btn-soft">Google</button>
                            <button className="btn btn-soft bg-blue-500 text-white">FaceBook</button>
                        </div>
                    </div>
                    <div className="pt-2.5">
                        <p className="text-black/50 text-sm">
                            Don't have an account yet?
                            <Link to={"/signup"} className="btn btn-link">Create an account</Link>
                        </p>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default LogInPage
import SkyBackGround from "../../components/SkyBackGround"
import { Link } from "react-router"

const CreateUserPage = () => {
    return (
        <div className='w-screen h-screen text-white'>
            <SkyBackGround />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className="bg-white text-black w-fit p-5 rounded-2xl">
                    <p className="font-bold text-2xl mb-3 text-center">User creation</p>
                    <p className="mb-3 text-black/75">Fill all the Input correctly</p>
                    <form action="" className="">
                        <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-5">
                            <div>
                                <label htmlFor="fNameIN" className="">First name</label>
                                <input id="fNameIN" placeholder="Rakoto" className="input outline-0 w-full"></input>
                            </div>
                            <div>
                                <label htmlFor="sNameIN" className="">Second name</label>
                                <input id="sNameIN" placeholder="Derrick" className="input outline-0 w-full"></input>
                            </div>
                            <div>
                                <label htmlFor="pwdIn" className="">Enter your new password</label>
                                <input id="pwdIN" placeholder="At least 8 characters" className="input outline-0 w-full"></input>
                            </div>
                            <div>
                                <label htmlFor="pwdCoIN" className="">Confirm your password</label>
                                <input id="pwdCoIN" placeholder="Rewrite the password" className="input outline-0 w-full"></input>
                            </div>

                            <button type="submit" className="btn btn-primary ">Create the user</button>
                        </div>
                        
                    </form>
                    <div className="">
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

export default CreateUserPage
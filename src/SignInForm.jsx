import React, { useContext, useState } from 'react'
import signup_image from '../src/assets/chair.png'
import gooogle_logo from '../src/assets/google_logo.png'
import sign_up_icon from '../src/assets/sign_up_icon.png'
import apple_logo from '../src/assets/apple_logo.png'
import visibility_off from '../src/assets/visibility_off.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthenticationContext } from './ContextAPI/AuthenticationProvider'
function SignInForm() {
  
  const [success,setSuccess]=useState('');
  const [error,setError]=useState('');
  const {logIn,googleSignIn,appleSignIn}=useContext(AuthenticationContext);

  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/'
const handleLogin=event=>{
  event.preventDefault();
  const form=event?.target;
  const email=form?.email?.value;
  const password=form?.password?.value;
  logIn(email,password).then(result=>{
    const loggedInUser=result.user;
    console.log(loggedInUser);
    form.reset();
    navigate(from, { replace: true })
    setError('')
    setSuccess('Login Successful!')
   
  }).catch(error=>setError(error.message))
}

const handleGoogleSignIn=()=>{
  googleSignIn().then(()=>navigate(from, { replace: true })).catch(error=>console.log(error))
  
}
const handleAppleSignIn=()=>{
  appleSignIn().then(()=>navigate(from, { replace: true })).catch(error=>console.log(error))
}

    return (

        <>
  <div className="flex flex-col md:flex-row w-full h-full items-center justify-center">
      <div className="p-5 w-full md:w-1/2 flex items-center justify-center">
        <div className="p-3 bg-[#FAFAFA] w-full max-w-[500px] h-auto text-start">
          <p style={{ color: "red" }} className="font-bold text-center">{error ? error : ''}</p>
          <p style={{ color: "green" }} className="font-bold text-center">{success ? success : ''}</p>
          <h3 style={{ fontWeight: "700", fontSize: "24px" }} className="text-center">Welcome Back!</h3>
          <h4 style={{ color: "#787878" }} className="text-center">Enter your credentials to access your account</h4>
          <form onSubmit={handleLogin} className="container1">
            <div className="email_input_div flex justify-center mt-4 w-full relative">
              <input className="border-2 border-gray-300 p-2 rounded-[5px] w-full cursor-pointer" type="text" name="email" placeholder="Email address" />
            </div>
            <div className="email_input_div flex justify-center mt-4 w-full relative">
              <input className="border-2 border-gray-300 p-2 rounded-[5px] w-full cursor-pointer" type="password" name="password" placeholder="Password" />
              <img className="absolute top-[17px] right-[15px] cursor-pointer" src={visibility_off} style={{ width: "20px", height: "20px" }} alt="Toggle visibility" />
            </div>
            <div className="tickdiv mt-3 flex items-center">
              <input type="checkbox" className="cursor-pointer" />
              <h4 className="text-start ml-2 font-semibold">
                I agree to the <a href="#" className="underline">Terms and Policy</a>
              </h4>
            </div>
            <div className="tickdiv mt-3 w-full">
              <button className="bg-black text-white w-full p-3 rounded-[5px]">Sign In</button>
            </div>
            <div className="divider mt-3">
              <span className="divider-text">or</span>
            </div>
            <div className="flex gap-x-6 items-center justify-center mt-5">
              <button onClick={handleGoogleSignIn} className="flex gap-x-2 items-center border-2 border-gray-300 py-1 px-4 rounded-[5px]">
                <img src={gooogle_logo} style={{ width: "30px", height: "30px" }} alt="Google Logo" />Sign In With Google
              </button>
              <button onClick={handleAppleSignIn} className="flex gap-x-2 items-center border-2 border-gray-300 py-1 px-4 rounded-[5px]">
                <img src={apple_logo} style={{ width: "30px", height: "30px" }} alt="Apple Logo" />Sign In With Apple
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <h4>Don't have an account? <a href="/register" className="text-blue-600">Sign Up</a></h4>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative h-[50vh] md:h-full hidden md:flex items-center justify-center">
        <img className="w-full h-full object-cover" src={signup_image} alt="Sign Up" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <img className="sign_icon mb-4" src={sign_up_icon} style={{ width: "89px", height: "85px" }} alt="FurniFlex Icon" />
          <h2 className="text-white font-bold text-4xl">Furni<span className="text-blue-400">Flex</span></h2>
          <h4 className="text-white text-center mt-4 px-4 w-[300px]">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</h4>
        </div>
      </div>
    </div>
        </>
    )
}

export default SignInForm

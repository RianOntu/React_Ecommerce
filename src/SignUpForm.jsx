import React, { useContext, useState } from 'react'
import signup_image from '../src/assets/chair.png'
import gooogle_logo from '../src/assets/google_logo.png'
import sign_up_icon from '../src/assets/sign_up_icon.png'
import apple_logo from '../src/assets/apple_logo.png'
import visibility_off from '../src/assets/visibility_off.png'
import { auth, AuthenticationContext } from './ContextAPI/AuthenticationProvider'
import { updateProfile } from 'firebase/auth'
function SignUpForm() {
  const [success,setSuccess]=useState('');
  const [error,setError]=useState('');
  const {registerUser,setLoading}=useContext(AuthenticationContext);

const handleRegister=(event)=>{

  event.preventDefault();
  const form=event?.target;
  const name=form?.name?.value;
  const email=form?.email?.value;
  const password=form?.password?.value;
  const photo_url=form?.purl?.value;
console.log(password);

  if(password?.length<6){
      setError('Password should be six characters long!');
      return;
  }
  const trimmedPassword = password?.trim()
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(trimmedPassword)) {
    
    setError("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
    
    return;
}
  registerUser(email,password).then(result=>{
    const newUser=result.user;
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo_url
    }).then(() => {
      setError('');
      
      setSuccess('User has been registered successfully!Please login')
     
    }).catch((error) => {
      
    });
    console.log(newUser);
  }).catch(error=>{
    
    setError(error.message)
   

  })
  form.reset();

 

}
  
    return (

        <>
        <div className="flex flex-col md:flex-row w-full h-full items-center justify-center sign_in_up">
      <div className="p-5 w-full md:w-1/2 flex items-center justify-center">
        <div className="p-3 bg-[#FAFAFA] w-full max-w-[500px] h-auto md:h-[618px] text-center">
          <p className="font-bold text-red-500">{error ? error : ''}</p>
          <p className="font-bold text-green-500">{success ? success : ''}</p>
          <h3 className="font-bold text-2xl">Welcome To</h3>
          <h2 className="font-extrabold text-4xl">Furni<span className="text-blue-500">Flex</span></h2>
          <h4 className="text-gray-500">Sign up to purchase your desired product</h4>
          <form onSubmit={handleRegister} className="container1">
            <div className="first_two_inputs flex flex-col md:flex-row gap-y-3 md:gap-y-0 md:gap-x-4 justify-center mt-5">
              <div className="relative w-full">
                <input className="border-2 border-gray-300 p-2 rounded-md w-full" type="text" name="firstName" placeholder="First name (Optional)" />
              </div>
              <div className="relative w-full">
                <input className="border-2 border-gray-300 p-2 rounded-md w-full" type="text" name="lastName" placeholder="Last name (Optional)" />
              </div>
            </div>
            <div className="email_input_div justify-center flex mt-4 w-full relative">
              <input className="border-2 border-gray-300 p-2 rounded-md w-full" type="text" name="email" placeholder="Email address" />
            </div>
            <div className="email_input_div justify-center flex mt-4 w-full relative">
              <input className="border-2 border-gray-300 p-2 rounded-md w-full" type="password" name="password" placeholder="Password" />
              <img className="absolute top-[14px] right-[15px] cursor-pointer" src={visibility_off} style={{ width: "20px", height: "20px" }} alt="Toggle visibility" />
              <a href="#" className="absolute top-[54px] right-0 text-blue-400">Forgot Password?</a>
            </div>
            <div className="tickdiv mt-5 flex items-center gap-x-2">
              <input type="checkbox" className="cursor-pointer" />
              <h4 className="text-start font-semibold">
                I agree to the <a href="#" className="underline text-blue-500">Terms and Policy</a>
              </h4>
            </div>
            <div className="tickdiv mt-3 w-full">
              <button className="bg-black text-white w-full p-3 rounded-md">Sign Up</button>
            </div>
            <div className="divider mt-3 flex items-center justify-center">
              <span className="divider-text">or</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-5">
              <button className="flex gap-x-2 items-center border-2 border-gray-300 py-2 px-4 rounded-md">
                <img src={gooogle_logo} style={{ width: "30px", height: "30px" }} alt="Google logo" />
                Sign In With Google
              </button>
              <button className="flex gap-x-2 items-center border-2 border-gray-300 py-2 px-4 rounded-md">
                <img src={apple_logo} style={{ width: "30px", height: "30px" }} alt="Apple logo" />
                Sign In With Apple
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <h4>Have an account? <a href="/login" className="text-blue-600">Sign In</a></h4>
            </div>
          </form>
        </div>
      </div>

      <div className="chair_image hidden md:flex w-full md:w-1/2 relative h-[50vh] md:h-auto">
        <img src={signup_image} className="w-full h-full object-cover" alt="Sign Up" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <img className="sign_icon mb-4" src={sign_up_icon} style={{ width: "89px", height: "85px" }} alt="FurniFlex Icon" />
          <h2 className="font-extrabold text-4xl text-white">Furni<span className="text-blue-400">Flex</span></h2>
          <div className="w-[80%] md:w-[331px] mt-4 text-center">
            <h4 className="text-white">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</h4>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default SignUpForm

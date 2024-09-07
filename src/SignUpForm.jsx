import React from 'react'
import signup_image from '../src/assets/chair.png'
import gooogle_logo from '../src/assets/google_logo.png'
import sign_up_icon from '../src/assets/sign_up_icon.png'
import apple_logo from '../src/assets/apple_logo.png'
import visibility_off from '../src/assets/visibility_off.png'
import { auth, AuthenticationContext } from './ContextAPI/AuthenticationProvider'
function SignUpForm() {
  const [success,setSuccess]=useState('');
  const [error,setError]=useState('');
  const {registerUser}=useContext(AuthenticationContext);

const handleRegister=(event)=>{

  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const email=form.email.value;
  const password=form.password.value;
  const photo_url=form.purl.value;

  if(password.length<6){
      setError('Password should be six characters long!');
      return;
  }
  if(!/^(?=.*[\W_].*[\W_])/.test(password)){
    setError("Please enter atleast two special characters!")
    return;
  }
  registerUser(email,password).then(result=>{
    const newUser=result.user;
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo_url
    }).then(() => {
      setError('');
      setSuccess('User has been registered successfully!')
    }).catch((error) => {
      
    });
    console.log(newUser);
  }).catch(error=>setError(error.message))
  form.reset();

 

}
  
    return (

        <>
         <div className="flex w-full h-full">
  <div className="p-5 w-1/2 flex items-center justify-center">
   <div className='p-3 bg-[#FAFAFA] w-[500px] h-[618px] text-center'>
    <h3 style={{fontWeight:"700",fontSize:"24px"}}>Welcome To</h3>
    <h2 style={{fontWeight:"800",fontSize:"40px"}}>Furni<span style={{color:"#1E99F5"}}>Flex</span></h2>
    <h4 style={{color:"#787878"}}>Sign up for purchase your desire product</h4>
    <form onSubmit={handleRegister} action="" className='container'>
     <div className="first_two_inputs flex gap-x-[15px] justify-center mt-5">
      <div className="relative w-[100vw]">
      <input className='border-2 border-[#E5E5E5]-300 p-2 rounded-[5px] w-[100%] cursor' type="text" name="" id="" />
      <h6 className='text-[#C0C0C0] absolute top-0 left-[11px]'>First name(Optional)</h6>
      </div>
      <div className="relative w-[100vw]">
      <input className='border-2 border-[#E5E5E5]-300 p-2 rounded-[5px] w-[100%] cursor' type="text" name="" id="" />
      <h6 className='text-[#C0C0C0] absolute top-0 left-[11px]'>Last name(Optional)</h6>
      </div>

     </div>
     <div className="email_input_div justify-center flex mt-[15px] w-[100%] relative">
     <input className='border-2 border-[#E5E5E5]-300 p-2 rounded-[5px] w-[100%] cursor' type="text" name="" id="" />
     <h6 className='text-[#C0C0C0] absolute top-0 left-[11px]'>Email address</h6>
     </div>
     <div className="email_input_div justify-center flex mt-[15px] w-[100%] relative">
     <input className='border-2 border-[#E5E5E5]-300 p-2 rounded-[5px] w-[100%] cursor' type="password" name="" id="" />
    <a href=""><h6 className='text-[#70BDF6] absolute top-0 forgot_password top-[54px] right-[0px]'>Forgot Password?</h6></a>
     <h6 className='text-[#C0C0C0] absolute top-0 left-[11px]'>Password</h6>
     <img className='absolute top-[17px] right-[15px]' src={visibility_off} style={{width:"20px",height:"20px"}} alt="" />
     </div>
     <div className="tickdiv mt-5 flex  gap-x-0.5">
     <input type="checkbox" class=" cursor" />
     <h4 className='text-start ml-2' style={{fontWeight:"700"}}>I agree to the <a href=""><u>Terms and Policy</u></a></h4>
     </div>
     <div className="tickdiv mt-3 w-full ">
      <button className='bg-[#000000] text-white w-full p-3 rounded-[5px]'>Sign Up</button>
     </div>
     <div class="divider mt-3">
    <span class="divider-text">or</span>
     </div>
     <div className="flex gap-x-[25px] items-center justify-center mt-5">
      <button className='flex gap-x-[5px] items-center border-2 border-[#E5E5E5]-300 py-1 px-4 rounded-[5px]'><img src={gooogle_logo} style={{width:"30px",height:"30px"}} alt="" />SignIn With Google</button>
      <button className='flex gap-x-[5px] items-center border-2 border-[#E5E5E5]-300 py-1 px-4 rounded-[5px]'><img src={apple_logo} style={{width:"30px",height:"30px"}} alt="" />SignIn With Apple</button>
     </div>
     <div className="flex justify-center mt-3">
      <h4>Have an account? <a href="/login" className='text-[#0F3DDE]'>Sign In</a></h4>
     </div>
     
    </form>
   </div>
  </div>
  
  <div className='chair_image w-1/2 relative'>
    <img src={signup_image} className='w-full h-[100vh] object-cover'  alt="" />
    <div className="absolute furni_flex_icon">
      
      <img className='sign_icon'  src={sign_up_icon} style={{width:"89px",height:"85px"}}  alt="" />
      <h2 className='furni' style={{fontWeight:"800",fontSize:"40px",color:"white"}}>Furni<span style={{color:"#1E99F5"}}>Flex</span></h2>
      
   
     
    
    </div>
    <div className="absolute w-full signup_description_wrapper">
    <div className="signup_description  w-[331px]">
    <h4 className='text-white text-center'>Discover a seamless shopping experience with our curated collection of products.From fashion to electronics,we bring quality.</h4>
    </div>
    </div>
  
    
    
  </div>
 
 
 </div>
        </>
    )
}

export default SignUpForm

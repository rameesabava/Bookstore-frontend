import { useFormik } from 'formik'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function Auth({ insideRegister }) {
  const navigate = useNavigate()
  const [togglePasswordType, setTogglePasswordType] = useState(false)

  const formik = useFormik({
    initialValues: {
      username: "Demo",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "Must be atleast 3 characters").required("Username Required"),
      email: Yup.string().email("Invalid email").required("Email Required"),
      password: Yup.string().required("Password Required")
    }),
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      if(insideRegister){
        console.log("register api call");

        handleRegister(values)
      }else{
                console.log("login api call");
handleLogin(values)
      }
resetForm()
    }
  })

  const handleRegister = async (userData)=>{
const result = await registerAPI(userData)
console.log(result);
if(result.status==201){
  toast.success("Successfully registered.... Please login!!!")
}else{
  toast.error(result.response)
}
navigate('/login')
  }

  const handleLogin = async (userData)=>{
const result = await loginAPI(userData)
console.log(result);
if(result.status==200){
  toast.success("Login Successful!!!!")
  sessionStorage.setItem("token",result.data.token)
  sessionStorage.setItem("user",JSON.stringify(result.data.user))
  if(result.data.user.role=="admin"){
    navigate('/admin')
  }else{
    navigate('/')
  }

}else{
  toast.error(result.response)
}
  }

  const handleGoogleLogin = async (credentialResponse)=>{
     console.log("Inside handleGoogleLogin");
     console.log(credentialResponse);
           const {email,name,picture} = jwtDecode(credentialResponse.credential)
console.log(email,name,picture);
// api call
const result = await googleLoginAPI({username:name,email,password:"googlePassword", picture})
if(result.status==200){
  toast.success("Login Successful!!!!")
  sessionStorage.setItem("token",result.data.token)
  sessionStorage.setItem("user",JSON.stringify(result.data.user))
  setTimeout(()=>{
if(result.data.user.role=="admin"){
    navigate('/admin')
}else{
  navigate('/')
}
  },2500);
  
}
     
  }
  
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
      <div className='p-10'>
        <h1 className='text-center font-bold text-3xl'>BOOK STORE</h1>
        <div style={{ width: '400px' }} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='border mb-5 flex justify-center items-center'>
            <FaUser className='text-3xl' />

          </div>
          <h1 className='text-2xl'>{insideRegister ? "Register" : "Login"}</h1>
          <form onSubmit={formik.handleSubmit} className='my-5 w-full'>
            {/* username */}
            {
              insideRegister &&
              <>
                <input name='username' value={formik.values.username} onChange={formik.handleChange} type="text" className='bg-white p-2 w-full rounded my-5 text-black' placeholder='Username' />
                <div className='mb-3 text-yellow-400'>{formik.errors.username}</div>
              </>

            }
            {/* email */}
            <input name='email' value={formik.values.email} onChange={formik.handleChange} type="text" className='bg-white p-2 w-full rounded mb-5 text-black' placeholder='E Mail' />
            <div className='mb-3 text-yellow-400'>{formik.errors.email}</div>

            {/* password */}
            <div className='flex items-center'>
              <input name='password' value={formik.values.password} onChange={formik.handleChange} type={togglePasswordType ? "text" : "password"} className='bg-white p-2 w-full rounded mb-5 text-black' placeholder='Password' />
              {togglePasswordType ?
                <FaEyeSlash onClick={() => setTogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{ marginTop: '-20px', marginLeft: '-30px' }} />

                :
                <FaEye onClick={() => setTogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{ marginTop: '-20px', marginLeft: '-30px' }} />
              }            </div>
            <div className='mb-3 text-yellow-400'>{formik.errors.password}</div>

            {/* forgot password */}
            <div className='flex justify-between mb-5'>
              <p className='text-xs text-orange-300'>*Never share your passsword with others.</p>
              {!insideRegister &&
                <button className='text-xs underline'>Forgot Password</button>
              }

            </div>
            {/* login/register button */}
            <div className='text-center'>
              {
                insideRegister ?
                  <button type='submit' className='bg-green-700 p-2 w-full rounded'>Register</button>
                  :
                  <button type='submit' className='bg-green-700 p-2 w-full rounded'>Login</button>

              }

            </div>
            ------------------------------------ or ---------------------------------
            {/* google authentication */}
            <div className='flex justify-center mt-2 items-center'>
              <GoogleLogin
    onSuccess={credentialResponse => {
      handleGoogleLogin(credentialResponse);

      
    }}
    onError={() => {
      console.log('Login Failed');
    }}
    useOneTap
  />
            </div>
            {!insideRegister &&
              <div className='my-5 text-center'>
                <p>--------------or------------</p>
                <div className='mt-2 flex justify-center items-center w-full'>
                  google authentication
                </div>
              </div>
            }
            {/* new/already exist user */}
            <div className='my-5 text-center'>
              {
                insideRegister ?
                  <p className='text-blue-500'>Existing user? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                  :
                  <p className='text-blue-500'>New user? <Link to={'/register'} className='underline ms-5'>Register</Link></p>

              }

            </div>
          </form>
        </div>

      </div>
      {/* toaster */}
      <ToastContainer position='top-center' theme='colored' autoClose={1000}/>
    </div>
  )
}

export default Auth
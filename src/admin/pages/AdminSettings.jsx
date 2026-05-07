import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'
import axiosInstance from '../../api/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { adminUpdateAPI } from '../../services/allAPI'

function AdminSettings() {

  const navigate = useNavigate()

  const [adminDetails, setadminDetails] = useState({
    username: "",
    password: "",
    cPassword: "",
    picture: "",
    role: "",
    bio: "",
    id: ""
  })
  const [existingPicture, setExistingPicture] = useState("")
  const [preview, setPreview] = useState("")

  const [passwordMatch, setPasswordMatch] = useState(true)
  const [imageFileType, setImageFileType] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setadminDetails({ ...adminDetails, username: user.username, role: user.role, bio: user.bio, id: user._id })
      setExistingPicture(user.picture)
    }
  }, [])

  console.log(adminDetails);
  console.log(existingPicture);

  const handleFileUpload = (e) => {
    //console.log(e.target.files[0]);
    const imageFile = e.target.files[0]
    if (imageFile.type.startsWith("image/")) {
      setadminDetails({ ...adminDetails, picture: e.target.files[0] })
      const url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
      setImageFileType(true)
    } else {
      setImageFileType(false)
    }


  }

  const checkPasswordMatch = (data) => {
    setadminDetails({ ...adminDetails, cPassword: data })
    adminDetails.password == data ? setPasswordMatch(true) : setPasswordMatch(false)
  }

  const resetProfileForm = (() => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setadminDetails({ username: user.username, role: user.role, bio: user.bio, id: user._id, password: "", cPassword: "", picture: "" })
    setExistingPicture(user.picture)
    setImageFileType(false)
    setPreview("")
    setPasswordMatch(true)
  })

  const handleAdminUpdate = async () => {
    const { username, password, picture, bio, id, cPassword } = adminDetails
    if (!username || !password || !cPassword) {
      toast.info("Please fill the form completely!!!")
    } else if (passwordMatch) {
      const reqBody = new FormData()
      for (let key in adminDetails) {
        if (key != "picture") {
          reqBody.append(key, adminDetails[key])
        } else {
          preview ? reqBody.append("picture", picture) : reqBody.append("picture", existingPicture)
        }
      }
      // api call
      const result = await adminUpdateAPI(id, reqBody)
      console.log(result);
      if (result.status == 200) {
        toast.success("Admin profile updated successfully.... Please Login!!!")
        setTimeout(() => {
          sessionStorage.clear()
          navigate('/login')
        }, 2500)
      }

    }
  }


  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'>Settings</h1>
          <div className='md:grid grid-cols-2 items-center'>
            {/* text part */}
            <div>
              <h2 className='text-xl mb-5 font-black'>Welcome, Admin 👋</h2>

              <p className='text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>

              <h4 className='text-lg my-5 font-medium'>🔧 What You Can Manage in This Section:</h4>

              <ul>
                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access level</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className='my-5 text-justify'>
                Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚
              </p>
            </div>
            {/* edit part */}
            <div className='flex justify-center items-center flex-col m-10 bg-blue-100 p-5 rounded'>
              {/* edit picture */}
              <label htmlFor="userProfile">
                <input onChange={e => handleFileUpload(e)} type="file" id='userProfile' hidden />
                {
                  existingPicture == "" ?
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='z-52' src={preview ? preview : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="admin" />
                    :
                    existingPicture.startsWith("https://lh3.googleusercontent.com/") ?
                      <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='z-52' src={preview ? preview : existingPicture} alt="admin" />
                      :
                      <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='z-52' src={preview ? preview : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt="admin" />

                }

                <button className='bg-black text-white px-3 py-2 rounded z-53' style={{ marginLeft: '50px', marginTop: '-15px' }}><FaPen /></button>
              </label>
              {!imageFileType &&
                <div className='mt-5 text-yellow-500 text-sm'>*Only accept image file</div>}

              {/* username */}
              <div className='mt-10 mb-3 w-full px-5'>
                <input onChange={e => setadminDetails({ ...adminDetails, username: e.target.value })} value={adminDetails.username} type="text" placeholder='Username' className='w-full border border-gray-300 rounded p-2' />

              </div>
              {/* new password */}
              <div className='mb-3 w-full px-5'>
                <input onChange={e => setadminDetails({ ...adminDetails, password: e.target.value })} value={adminDetails.password} type="text" placeholder='New Password' className='w-full border border-gray-300 rounded p-2' />

              </div>
              {/* confirm password */}
              <div className='mb-3 w-full px-5'>
                <input value={adminDetails.cPassword} onChange={e => checkPasswordMatch(e.target.value)} type="text" placeholder='Confirm Password' className='w-full border border-gray-300 rounded p-2' />

              </div>
              {!passwordMatch && <div className='mb-3 text-yellow-500 text-sm'>*Password and confirm password must be same</div>}

              {/* reset & update button */}
              <div className="flex justify-end w-full px-5 mt-5">
                <button onClick={resetProfileForm} className='bg-yellow-600 text-white py-2 px-3 rounded'>RESET</button>
                <button onClick={handleAdminUpdate} className='bg-green-600 text-white py-2 px-3 rounded ms-5'>UPDATE</button>
              </div>

            </div>

          </div>
        </div>
                        {/* toaster */}
      <ToastContainer position='top-center' theme='colored' autoClose={1000}/>


      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
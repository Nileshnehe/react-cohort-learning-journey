import React from 'react'
import { useState } from 'react'
import Card from './component/Card'

const App = () => {

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [userDesc, setUerDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=> {
    e.preventDefault()

  
    setAllUsers([...allUsers, {userName, userRole, userDesc, imageUrl}])

    // console.log(oldUsers);
    // setAllUsers(oldUsers)

    setUserName('')
    setUserRole('')
    setUerDesc('')
    setImageUrl('')
  }
  return (
    <div className='h-full bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}

      className='flex flex-wrap p-2 justify-center'>

        <input 
        value={userName}
        onChange={(e) =>{
          setUserName(e.target.value)
        }}

        className='border-2  font-semibold  px-5 py2 rounded m-2 w-[45%]'
         type="text"
          placeholder='Enter Yout Name' 
          />
        <input 
        value={imageUrl}
        onChange={(e) => {
          setImageUrl(e.target.value)
        }}
        className='border-2  font-semibold  px-5 py2 rounded m-2 w-[45%]'
         type="text"
          placeholder='Image Url'
           />
        <input 
        value={userRole}
        onChange={(e) => {
          setUserRole(e.target.value)
        }}
        className='border-2  font-semibold  px-5 py2 rounded m-2 w-[45%]'
         type="text"
          placeholder='Etnter Your Role' 
          />
        <input 
        value={userDesc}
        onChange={(e) => {
          setUerDesc(e.target.value)
        }}
        
        className='border-2  font-semibold  px-5 py2 rounded m-2 w-[45%]'
         type="text"
          placeholder='Enter Description' 
          />
        <button 
        className='bg-green-600 px-7 m-2 active:scale-95 cursor-pointer rounded min-w-[92%] font-bold'>Create User</button>
      </form>

      <div className='flex flex-wrap p-2 ml-2 gap-2'>

        {allUsers.map(function(elem,idx){
          return <div key={idx} className='w-[23vw] mb-5  rounded-xl text-center p-5  flex items-center  flex-col bg-white  text-black'>
      <img className='h-20 w-20 rounded-full object-cover' src={elem.imageUrl}  />
      <h1 className='text-xl  font-semibold'>{elem.userName}</h1>
      <h5 className='text-xs font-semibold text-blue-500 '>{elem.userRole}</h5>
      <p className='font-xl text-sm leading-tight'>{elem.userDesc}</p>
      <button className='px-4 py-2 m-3 text-white text-xs cursor-pointer active:scale-95 font-semibold rounded bg-red-600 '>Remove</button>
    </div>
        })}

      </div>
     
    </div>
  )
}

export default App
 
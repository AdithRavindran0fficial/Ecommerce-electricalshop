import React from 'react'

function Register() {
  return (
    <div className='border-4 flex flex-col w-full justify-center items-center'>
       <p className='border-2 text-lg mt-12 '>Sign up</p>
       <div>
            <form>
                <div className='border4 mt-2  py-8 flex '>
                    <label className='px-4 '>Name:</label>
                    <input type='text' className='sm:w-10 border rounded-md'></input>
                    </div>

                    <div className='border4 mt-2  py-8 flex'>
                    <label className='px-4 '>Email:</label>
                    <input type='email' className='sm:w-10 border rounded-md'></input>
                    </div>

                    <div className='border4 mt-2  py-8 flex'>
                    <label className='px-4 '>Password:</label>
                    <input type='text' className='sm:w-10 border rounded-md'></input>
                    </div>

                    <div className='border4 mt-2  py-8 flex'>
                    <label className='px-4 '>Confirm password:</label>
                    <input type='text' className='sm:w-10 border rounded-md mdw-full'></input>
                    </div>
                
            </form>
       </div>
    </div>
  )
}

export default Register
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10  flex flex-col justify-center items-center text-white bg-gradient-to-br from-gray-600 via-blue-500 to-cyan-400'>
        <h2 className='text-3xl font-bold text-center'>Browse All Templates</h2>
        <p>What would you like to create today ? </p>
        <div className='w-full flex justify-center'>
            <div className='flex my-4 w-[30%]  bg-white p-1 gap-2 items-center border-2 rounded-md flex-row bg- mt-2'>
            <Search className='text-blue-900'/>
            <input 
            type="text" 
            placeholder='Search' 
            className='px-2 py-1 text-black w-full outline-none bg-transparent' 
            onChange={(event)=>onSearchInput(event.target.value)}
            />
            </div>
        </div>
    </div>
  )
}

export default SearchSection
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-2 bg-white shadow-sm border-b-2 flex items-center justify-between'>
        <div className='flex gap-2 items-center p-2 border rounder-md   '>
            <Search/>
            <input type="text" placeholder='Search'
            className='px-2 py-1 outline-none rounded-full'
            />
        </div>
        <div>
          <UserButton/>
        </div>
        
    </div>
  )
}

export default Header
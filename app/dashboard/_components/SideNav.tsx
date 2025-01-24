"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { History, Home, Settings, Wallet } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideNav() {

  const MenuList = [
    {
        name : "Home",
        icon : Home,
        path : '/dashboard'
    },
    {
        name : "History",
        icon : History,
        path : '/dashboard/history'
    },
    {
        name : "Setting",
        icon : Settings,
        path : '/dashboard/settings'
    },
  ]

  const path=usePathname();
  useEffect(()=>{
    console.log(path)
  },[])

  return (
    <div className='h-screen bg-white p-5 shadow-md border-2 '>

        <Link href={'/'}>
        
        <div className='flex justify-center items-center border-b'>
        <Image src={'/devxlogo.png'}
        width={150}
        height={150}
        alt='logo'/>
        </div>
        </Link>

        <div className='mt-12'>
            {MenuList.map((menu)=>(
              <Link href={menu.path} key={menu.name}>
                <div className={`flex gap-2  mb-2 p-3 hover:bg-blue-900 hover:text-white rounded-md cursor-pointer 
                ${path==menu.path&&'bg-blue-900 text-white'}`}>
                    <menu.icon/>
                    <h2>{menu.name}</h2>
                </div>
                </Link>
            ))}
        </div>


    </div>
  )
}

export default SideNav
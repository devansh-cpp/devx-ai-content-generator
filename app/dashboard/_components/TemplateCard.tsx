import React from 'react'
import Image from 'next/image'
import { TEMPLATE } from './TemplateListSection'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
    <div className='p-5 shadow-lg rounded-md border-2 gap-3 cursor-pointer flex flex-col hover:scale-105 transition-all  '>
        <Image src={item.icon} height={50} width={50} alt='icon'/>
        <h2 className='text-lg  font-medium'>{item.name}</h2>
        <p className='text-gray-500  line-clamp-3'>{item.desc}</p>
    </div>
      </Link>
  )
}

export default TemplateCard
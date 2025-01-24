"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface PROPS {
    selectedTemplate?: TEMPLATE
    userFormInput:any
    loading:boolean
}



function FormSection({ selectedTemplate,userFormInput,loading }: PROPS) {
 
    const[formData,setFormData] = useState<any>();
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        userFormInput(formData)
    }


    return (
        <div className='p-5 bg-white shadow-lg rounded-lg'>
            <Image src={selectedTemplate?.icon || '/default-icon.png'} height={50} width={50} alt='icon' />
            <h2 className='font-bold text-2xl mb-2 text-blue-800 '>{selectedTemplate?.name}</h2>
            <p className='text-gray-600 text-sm'>{selectedTemplate?.desc}</p>

            <form onSubmit={onSubmit} action="">
                {selectedTemplate?.form?.map((item, index) => (
                    <div className='my-5'>
                        <label className='font-semibold' htmlFor="">{item.label}</label>
                        {item.field == 'input' ?
                            <Input name={item.name} required={item?.required}
                                onChange={handleInputChange}
                            />
                            : item.field == 'textarea' ?
                                <Textarea
                                    name={item.name} required={item?.required}
                                    onChange={handleInputChange}
                                /> : null
                        }

                    </div>
                ))}
                <Button 
                type='submit' 
                disabled={loading}
                className=''>
                    {loading ? 'Generating...' : 'Generate'}</Button>
                    
            </form>

        </div>
    )
}

export default FormSection



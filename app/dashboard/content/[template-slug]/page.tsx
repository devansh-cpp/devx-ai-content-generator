"use client"

import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import { create } from 'domain'
import { AIOutput } from '@/utils/schema'

interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent(props:PROPS) {

    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])
    const [loading, setLoading] = useState(false)
    const[aiOutput,setAiOutput] = useState<any>('')
    const {user}=useUser()

    const GenerateAIContent=async(formData:any)=>{

        setLoading(true)
        const SelectedPrompt = selectedTemplate?.aiPrompt;

        const FinalAIPrompt = JSON.stringify(formData)+","+SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIPrompt);
        const aiResponse = await result.response.text();

        console.log(aiResponse) 
        setAiOutput(aiResponse)
        await SaveInDb(formData,selectedTemplate?.slug,aiResponse)
        setLoading(false)
    }

    const SaveInDb =async(formData:any,slug:any,aiResponse:string)=>{
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResponse,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: new Date().toISOString()
        })
        console.log(result)
    }


  return (
    <div className='p-5'>
        <Link href={'/dashboard'}>
       <Button className='bg-slate-800'><ArrowLeft/> Back</Button>
        </Link>

    <div className='grid gap-5 p-10 grid-cols-1 md:grid-cols-3'>
       
        {/* FormSection */}

        <FormSection 
        selectedTemplate={selectedTemplate}
        userFormInput={(data:any)=>GenerateAIContent(data)}
        loading={loading}

        />
        {/* Output Section */}

        <div className='col-span-2'>

        <OutputSection aiOutput={aiOutput}/>
        </div>

    </div>
    </div>
  )
}

export default CreateNewContent
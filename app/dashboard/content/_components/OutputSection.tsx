import React, { useRef ,useEffect} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import toast,{Toaster} from 'react-hot-toast'


interface PROPS {
  aiOutput:string
}

function OutputSection({aiOutput}:PROPS) {

    const editorRef:any=useRef(null)

    useEffect(()=>{
        editorRef.current.getInstance().setMarkdown(aiOutput)
    },[aiOutput])

    
  return (
    <div className='bg-white rounded-lg shadow-lg border'>
     <div className='p-4 flex justify-between items-center'>
        <h2>Your Result</h2>
        <Button onClick={() => {
          const markdown = editorRef.current.getInstance().getMarkdown();
          navigator.clipboard.writeText(markdown).then(() => {
            toast.success('copied to clipboard');
          }).catch(err => {
            toast.error('Failed to copy markdown');
            console.error('Failed to copy markdown: ', err);
          });
        }}>Copy</Button>
     </div>
    
    <Editor
        ref={editorRef}
        initialValue="Welcome to Devxloper era"
        previewStyle="vertical"
        height='600px'
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
  <Toaster />
    </div>
  )
}

export default OutputSection
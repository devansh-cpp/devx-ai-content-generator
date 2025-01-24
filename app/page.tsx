
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
    </div>
       
        {/* Landing Ui */}
    <div>
      <nav className="flex justify-between  p-4">
        <Link href={'https://devxportfolio.vercel.app/'}>
        <Image src={'/devxlogo.png'} width={100} height={100} alt="logo"></Image>
        </Link>
        <UserButton/>
      </nav>
    </div>
    <div className="flex flex-col justify-center items-center mt-32 h-full">
      <div className="flex flex-col justify-center items-center">
      <h2 className="sm:text-5xl text-2xl sm:p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Unleash Creativity with </h2>
      <h2 className="sm:text-5xl text-4xl text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">AI-Powered Content Generation </h2>
      <p className="italic text-neutral-400 px-6 text-center py-4">Effortlessly create, innovate, and scale your content—smarter, faster, better</p>


<Link href={'/dashboard'}>
<button
  className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
>
  <span
    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
  >
  </span>
  <span
    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
  >
    Explore Now
    
     
  </span>
</button>
</Link>

      </div>
    </div>

  


 
    








   </>
  );
}

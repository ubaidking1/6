import Link from "next/link"
import Image from "next/image"

const Bottomheader = () => {
  return (
        <header>
          
          <div className='container max-auto flex justify-between items-center py-4'>
        {/* < Link href="#" className="text-xl font-bold">Ddsgnr</Link> */}
        <div className="w-[130.6px] h-[41px]">
          <Image src={"/images/Ddsgnr Library.svg"} alt="logo-image" width={130.6} height={41}></Image></div>
           
      <nav className="flex gap-6 justify-center items-center bg-[background: #FFFFFF;
]">

      < Link href="#" className="hover:text-blue-600">Home</Link>
      < Link href="#" className="hover:text-blue-600">Courses</Link>
      < Link href="#" className="hover:text-blue-600">Services</Link>
    < Link href="#" className="hover:text-blue-600">Achievement</Link>
     < Link href="#" className="hover:text-blue-600">About Us</Link>
     < Link href="#" className="hover:text-blue-600">Testimonial</Link>       
     </nav>
     <div className="flex gap-4">
        <button className="text-sm px-4 py-2 border rounded hover:bg-gray-100 w-[80px] h-[40px]">Login</button>
        <button className="text-sm px-4 py-2 bg-black
  text-white rounded hover:bg-black w-[95px] h-[40px]">Sign Up</button>

      </div>
      </div>
         
          {/* </div> */}
        
        </header>

           
          
          
         
     
  )
}

export default Bottomheader
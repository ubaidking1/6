import Image from "next/image"
import { Button } from 

const Hero = () => {
  return (
    
    <div className='container mx-auto py-16 flex flex-col min-h-screen items-center gap-8'>
      
     <div className=' w-full  '>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4 '>Learn new skills online with ease</h1>
         <p className='text-gray-600 '>
            discover a wide range of courses covering a veriety <br/>of subject,
            taught by expert instructors.
         </p>
         <div className="flex gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-black
 text-white rounded hover:bg-blue-700">Start learning now</button>
            <button className="px-6 py-3 border rounded hover:bg-gray-100">Explore Courses</button>
            
          </div>
          
          </div>
          <div className="flex justify-center items-center absolute right-0  w-[640 px] h-[900]">
           <Image className="shadow-lg w-80 lg:w-[640px]"src={"/images/Image.svg"} alt="container_image" width={640} height={900}></Image>
           </div>
          < div className="mt-8  lg:mt-0 lg:ml-12 flex justify-center items-center w-[640px] h-[900px] ">
          
          
          </div>
          < div className="flex  justify-center items-center gap-6 mt-auto py-8 w-[1280px] h-[228px] bottom-4 left-1">
          <p className="text-black w-[320px] h-[68px]"> Trusted by 2000+ companies worldwide.</p>
    <Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/logos1.svg"} alt="logs1_image" width={1280} height={228}></Image>
    </div>
     
         
    
         
         <div className="  
           w-[1280px] h-[1049px]">
          <h2 className=" flex justify-center items-center text-2xl font-bold   w-[768px] h-[109px]"> Explore Courses by Category</h2>
          <p className="text-center text-black p-4 ">Discover a wide range of courses covering a variety of subject, taught by expert instructors.</p>
             
  <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center ">
          
             <div className="flex justify-center items-center gap-3"><Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/Content.svg"} alt="pen_image" width={1280} height={636}></Image>
             </div>
            
            
          
          
       </div>  
       
     </div>
     </div>
     <div className="flex justify-center items-center w-[1280px h-[488px]">
            <div className="flex justify-center items-center gap-3"><Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/240.svg"} alt="icon-image" width={1280} height={636}></Image>
            </div>
            </div>
            <div className="flex justify-center items-center w-[1280px h-[488px]">
            <div className="flex justify-center items-center gap-3">
               <Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/241.svg"} alt="icone-image2" width={1280} height={636}></Image>
            </div>
            </div>
            <div> 
               <h1 className="flex justify-center items-center text-2xl font-bold"> Courses</h1>
               <p className="p-7"> Your Ultimate Guide to learning</p>
               <ul className="flex justify-center items-center gap-3">
                  <li>Popular</li>
                  <li> Recommended</li>
                  <li>Best Price</li>
               </ul>
            </div>
            <div>
             <div>
               <ul className="flex justify-center items-center gap-2">
                  <li><Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/Card.svg"} alt="card-" width={416} height={534}></Image></li>
                  <li><Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/Card 1.svg"} alt="card-1-" width={416} height={534}></Image></li>
                  <li><Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/Card 2.svg"} alt="card-2" width={416} height={534}></Image></li>
         
               </ul>
             
             </div>
            </div>
            <div>
             <div>
               <ul className="flex justify-center items-center  gap-2">
                  <li><Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/Card 3.svg"} alt="card-3" width={416} height={534}></Image></li>
                  <li><Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/Card 4.svg"} alt="card-4-" width={416} height={534}></Image></li>
                  <li><Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/Card 5.svg"} alt="card-5" width={416} height={534}></Image></li>
                 
               </ul>
             
             </div>
            </div>
            <div className="w-[152px] h-[40px]">
            <Button variant ="outline">Button</Button>
            </div>
            <div>
               <div>
               <Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/5.svg"} alt="5" width={1280} height={895}></Image>
               </div>
            </div>
            <div>
            <Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/20.svg"} alt="20" width={1280} height={830.89}></Image>
 
            </div>
            <div>
            <Image className="border-r-yellow-700 sm:640px md:768px"src={"/images/footer.svg"} alt="footer" width={1280} height={684}></Image>
            </div>
     </div>
     
    
  )
}
          
          
          
          
          
          
         
    

export default Hero
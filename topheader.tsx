// import Link from "next/link"
import Image from "next/image"


const Topheader = () => {
  return (
    <div className="bg-[background: #FFFFFF;
] py-2 text-sm w-[1280px] h-[54px] sm:640px md:768px  " >
      {/* <div  className="container mx-auto flex justify-between items-center">
        <div>
            <span>Phone Number:956742455678</span>
            <span className="ml-4">Email:info@ddsgnr.com</span>
        </div>
        <div className="flex gap-4 ">
            < Link href="#" className="h over:text-gray-700">facebook</Link>
        < Link href="#" className="h over:text-gray-700">Instagram</Link>
        < Link href="#" className="h over:text-gray-700">Linkedln</Link>
                             


        </div>
      </div> */}
      <div className="flex justify-center items-center">
      <Image className="border-r-yellow-700 sm:640px md:768px "src={"/images/Container.svg"} alt="container_image" width={1280} height={54}></Image>         
      </div>
    </div>
  )
}

export default Topheader
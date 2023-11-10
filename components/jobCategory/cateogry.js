import Image from "next/image"
const Category = ({role, imagePath}) => {
  return (
    <div className="bg-white shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] w-[21.88rem] h-[13.38rem] flex flex-col items-center justify-center py-[0.94rem] px-[3.13rem] box-border text-center text-[1.25rem] text-black  hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
      <div className="self-stretch flex flex-col items-center justify-center">
        <div className="rounded-81xl bg-mintcream flex flex-col items-center justify-center p-[2.5rem]">
          <div className="overflow-hidden flex flex-col items-center justify-end py-[0.38rem] px-[0rem]">
            <Image
              className="relative w-[3.13rem] h-[2.74rem]"
              alt=""
              width={50.08}
              height={43.84}
              src={imagePath}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 relative leading-[1.25rem] font-semibold flex items-center justify-center">
        {role}
      </div>
    </div>
  )
}

export default Category

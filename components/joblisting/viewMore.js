import Image from "next/image"
import Link from "next/link"
const ViewMore = () => {
  return (
    <Link href={'/jobDetails'} className="rounded-3xs bg-teal flex  items-center justify-center py-[1.25rem] px-[0rem] text-[1.25rem]">
      <div className="w-[12.5rem] h-[1.18rem] flex  items-center justify-center gap-[0.63rem]">
        <div className="relative leading-[0.63rem]">View More</div>
        <div className="flex flex-col items-center justify-center relative gap-[0.63rem]">
          <Image
            className="relative w-[1.38rem] h-[1.31rem] z-[0]"
            alt=""
            src="/vector8.svg"
            width={22.08}
            height={22.08}
          />
          <Image
            className="absolute my-0 mx-[!important] h-[50.26%] w-[29.85%] top-[24.87%] right-[25.37%] bottom-[24.87%] left-[44.78%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector9.svg"
            width={22.08}
            height={22.08}
          />
          <Image
            className="absolute my-0 mx-[!important] h-[10.58%] w-[49.75%] top-[44.44%] right-[25.37%] bottom-[44.97%] left-[24.88%] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/vector10.svg"
            width={22.08}
            height={22.08}
          />
        </div>
      </div>
    </Link>
  )
}

export default ViewMore

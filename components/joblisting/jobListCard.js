import Image from "next/image"
import Link from "next/link"
const JobListCard = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center md:items-center md:justify-center sm:text-[1rem]">
      <div className="self-stretch rounded-3xs bg-white shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] flex  flex-wrap items-center justify-center p-[1.88rem] gap-[0.63rem] remove-icon:flex-col">
        <div className="flex-1 flex  items-center justify-start gap-[1.25rem] md:items-center md:justify-center remove-icon:flex-[unset] remove-icon:self-stretch">
          <div className="flex flex-col items-center justify-center remove-icon:hidden">
            <div className="rounded-81xl bg-teal w-[5.71rem] h-[5.69rem] flex  items-center justify-center">
              <b className="relative leading-[5rem]">C</b>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[0.63rem] text-[1rem] text-dimgray-200 md:items-center md:justify-center remove-icon:flex-1 remove-icon:items-center remove-icon:justify-center remove-icon:pl-[0rem] remove-icon:pr-[0rem] remove-icon:box-border">
            <div className="flex flex-col items-start justify-center gap-[1.25rem]">
              <div className="relative leading-[0.63rem] inline-block w-[8.06rem]">
                Demo job listing
              </div>
              <div className="relative text-[1.56rem] leading-[0.63rem] font-semibold text-black inline-block w-[22rem] remove-icon:leading-[2.19rem] remove-icon:text-center remove-icon:self-stretch remove-icon:w-auto">
                <p className="m-0">Web developer(3 Year Exp.)</p>
              </div>
            </div>
            <div className="flex  items-center justify-start gap-[0.63rem] text-[0.94rem] text-black">
              <div className="flex  items-center justify-start gap-[0.63rem]">
                <div className="flex flex-col items-center justify-start">
                  <Image
                    className="relative w-[1.26rem] h-[1.25rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mappin.svg"
                    width={20.16}
                    height={20.16}
                  />
                </div>
                <div className="relative leading-[0.63rem] inline-block w-[3.81rem] shrink-0">
                  location
                </div>
              </div>
              <div className="flex  items-center justify-start gap-[0.63rem]">
                <div className="flex flex-col items-center justify-start p-[0.19rem]">
                  <Image
                    className="relative w-[1.12rem] h-[1.11rem]"
                    alt=""
                    src="/vector7.svg"
                    width={20.16}
                    height={20.16}
                  />
                </div>
                <div className="relative leading-[0.63rem] inline-block w-[4.13rem] shrink-0">
                  Full Time
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href={"/job-details"}
          className="rounded-3xs bg-teal flex  items-center justify-center p-[1.25rem] text-center text-[1.44rem] hover:cursor-pointer sm:flex-1 sm:gap-[0rem]  sm:px-[0.31rem] sm:box-border remove-icon:self-stretch remove-icon:w-auto remove-icon: remove-icon:gap-[0.63rem] remove-icon:pl-[0.63rem] remove-icon:pr-[0.63rem] remove-icon:box-border">
          <div className="relative leading-[0.63rem] mq580:flex-1">
            View Details
          </div>
        </Link>
      </div>
    </div>
  )
}

export default JobListCard

import MainPageLayout from "../components/layout/MainPageLayout"

const CreateJobPage = () => {
  return (
    <MainPageLayout>
      <div className="bg-white w-full flex flex-col items-center justify-center gap-[24px] text-center text-11xl text-black font-poppins">
        <div className="self-stretch bg-whitesmoke h-24 flex flex-row items-center justify-center py-2 px-0 box-border">
          <div className="relative leading-[80px] font-medium">
            Create a Job
          </div>
        </div>
        <div className="self-stretch h-[1819.7px] flex flex-col items-center justify-center text-left text-6xl">
          <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-10 gap-[24px] md:pl-[15px] md:pr-[15px] md:box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Company Name
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="relative">Name</b>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Company Website
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="relative">webiste</b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-center">
              <div className="relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                Job Title
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                <b className="flex-1 relative inline-block h-[19px]">Title</b>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Job Category
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="flex-1 relative">Technology</b>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Job Type
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="flex-1 relative inline-block h-[19px]">
                    full time
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2.5 px-0 gap-[10px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Job location
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="flex-1 relative inline-block h-[19px]">
                    Location
                  </b>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Salary Range
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="flex-1 relative inline-block h-[19px]">
                    Salary Range
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-start p-2.5 gap-[10px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Experience
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="flex-1 relative">Experience</b>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Qualification
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="flex-1 relative inline-block h-[19px]">
                    Qualification
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-2.5">
              <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                Application deadline
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                <b className="flex-1 relative inline-block h-[19px]">
                  application deadline
                </b>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-2.5">
              <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                Job Application link
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                <b className="flex-1 relative inline-block h-[19px]">
                  Job application link
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-center pt-0 px-0 pb-6 gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[80px] font-medium md:text-xl md:leading-[40px]">
                  Job Descreption
                </div>
                <div className="self-stretch rounded-3xs bg-white box-border h-[411px] flex flex-row items-start justify-start py-[23px] px-5 text-xl text-darkgray-100 font-inter border-[1px] border-solid border-lightgray-100">
                  <b className="flex-1 relative [text-decoration:underline] inline-block h-[19px]">
                    Job descreption
                  </b>
                </div>
              </div>
              <div className="rounded-3xs cursor-pointer bg-teal flex flex-row items-center justify-end py-[18px] px-[50px] text-10xl text-white font-inter">
                <b className="relative">Post Job</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPageLayout>
  )
}

export default CreateJobPage

import MainPageLayout from "../components/layout/MainPageLayout"
import {Trash2, Edit2, Eye} from "react-feather"
const JobsListDashboard = () => {
  return (
    <MainPageLayout>
      <div className="bg-white flex flex-col items-start justify-start gap-[20px] text-center text-11xl text-black font-poppins">
        <div className="self-stretch bg-whitesmoke flex  items-center justify-center py-2 px-0">
          <div className="relative leading-[80px] font-medium job-list-query:leading-[40px]">
            My Jobs List
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center p-5 text-left text-mid">
          <div className="self-stretch flex  items-center justify-center py-5 px-0 gap-[50px] text-xl border-b-[1px] border-solid border-lightgray-300 md:text-[1rem] job-list-query:gap-[10px] job-list-query:pt-5 job-list-query:box-border">
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[40px] font-semibold job-list-query:leading-[20px]">
                Title
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[40px] font-semibold job-list-query:leading-[20px]">
                Job Type
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="relative leading-[40px] font-semibold job-list-query:leading-[20px]">
                Posted Date
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[40px] font-semibold job-list-query:leading-[20px]">
                Application Deadline
              </div>
            </div>
            <div className="flex-1 flex  items-center justify-center">
              <div className="relative leading-[40px] font-semibold job-list-query:leading-[20px]">
                Action
              </div>
            </div>
          </div>
          <div className="self-stretch flex  items-center justify-center py-5 px-0 gap-[50px] border-b-[1px] border-solid border-lightgray-300 md:text-[1rem] job-list-query:gap-[10px] job-list-query:pt-0 job-list-query:pb-0 job-list-query:box-border job-list-query:text-[.8rem]">
            <div className="flex-1 flex  items-center justify-start">
              <div className="relative leading-[40px] font-medium job-list-query:leading-[20px]">
                Laravel Developer
              </div>
            </div>
            <div className="flex-1 flex  items-center justify-start">
              <div className="relative leading-[40px] job-list-query:leading-[20px]">
                Full Time
              </div>
            </div>
            <div className="flex-1 flex  items-center justify-start text-center">
              <div className="relative leading-[40px]">12/06/2022</div>
            </div>
            <div className="flex-1 flex  items-center justify-start">
              <div className="relative leading-[40px] job-list-query:leading-[20px]">
                Full Time
              </div>
            </div>
            <div className="flex-1 flex  items-center justify-center gap-[30px]">
              <div className="flex flex-col cursor-pointer text-teal items-center justify-center py-1 px-px relative gap-[10px]">
                <Eye className="relative  w-6 h-[18px] z-[0]" />
              </div>
              <div className="w-[21.9px] cursor-pointer text-cyan-600 flex  items-center justify-center p-0.5 box-border">
                <Edit2 className="flex-1  relative max-w-full overflow-hidden h-[21.8px]" />
              </div>
              <div className="w-[21.9px] flex cursor-pointer text-red flex-col items-center justify-start py-0.5 px-[3px] box-border relative">
                <Trash2 className="self-stretch relative max-w-full overflow-hidden h-[22px] shrink-0 z-[0]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPageLayout>
  )
}

export default JobsListDashboard

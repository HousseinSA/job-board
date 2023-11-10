import JobListCard from "./jobListCard"
import ViewMore from "./viewMore"

const JobListComponent = () => {
  return (
    <div className="self-stretch bg-white flex flex-col items-center justify-center py-[0rem] px-[3.13rem] gap-[1.88rem] text-left text-[1.88rem] text-white font-poppins  sm:px-[0.63rem] sm:box-border mq580:px-[1.25rem]  mq580:box-border">
      <div className="relative leading-[5rem] font-semibold text-black sm:text-[1.25rem] sm:leading-[1.25rem] mq580:text-[1.88rem] mq580:leading-[2.5rem] mq580:text-center">
        All Popular Listed jobs
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[1.88rem] text-[3.13rem] sm:text-[1rem]">
        <JobListCard />
        <JobListCard />
        <JobListCard />
        <JobListCard />
        <JobListCard />
      </div>
      <ViewMore />
    </div>
  )
}

export default JobListComponent

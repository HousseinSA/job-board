import PopularJobs from "../components/jobCategory/PopularJobs"
import JobListComponent from "../components/joblisting/job-list-component"
import MainPageLayout from "../components/layout/MainPageLayout"

const Homepage = () => {
  return (
    <MainPageLayout>
      <div className="self-stretch bg-white flex flex-col items-center justify-start gap-[1.88rem]">
        <PopularJobs />
        <JobListComponent />
      </div>
    </MainPageLayout>
  )
}

export default Homepage

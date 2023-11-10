import Category from "./cateogry"

const PopularJobs = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center gap-[1.88rem] text-center text-[2.06rem] text-black font-poppins md:box-border mq580:box-border">
      <div className="relative leading-[5rem] font-semibold sm:text-[1.25rem] sm:leading-[1.25rem] mq580:text-[1.88rem] mq580:leading-[2.5rem]">
        Popular Categories
      </div>
      <div className="self-stretch flex  flex-wrap items-center justify-center gap-[3.13rem] text-[1.25rem] sm:gap-[1.88rem] sm:text-[1rem]">
        <Category
          role={"Software Developer/Engineer"}
          imagePath={"/vector3.svg"}
        />
        <Category role={"Project Manager"} imagePath={"/vector4.svg"} />
        <Category
          role={"Data Analyst/Scientist"}
          imagePath={"/mask-group.svg"}
        />
        <Category
          role={"Sales Representative"}
          imagePath={"/mask-group1.svg"}
        />
        <Category role={" Financial Analyst"} imagePath={"/vector5.svg"} />
        <Category role={"Mechanical Engineer"} imagePath={"/vector6.svg"} />
      </div>
    </div>
  )
}

export default PopularJobs

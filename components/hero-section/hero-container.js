import InputComponent from "./inputComponent"

const HeroContainer = () => {
  return (
    <div className="self-stretch bg-mintcream overflow-hidden flex flex-col items-center justify-center py-[9.38rem] px-[0rem] gap-[6.25rem] text-center text-[4.38rem] text-black font-poppins">
      <div className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[1.25rem] sm:pl-[0.31rem] sm:pr-[0.31rem] sm:box-border mq580:pl-[0.63rem] mq580:pr-[0.63rem] mq580:box-border">
        <b className="self-stretch relative leading-[5rem] sm:text-[3.44rem] mq580:text-[3.75rem]">
          <p className="m-0">
            <span>{`Find A `}</span>
            <span className="text-teal">Job</span>
            <span className="text-black"> That</span>
          </p>
          <p className="m-0">
            <span className="text-teal">Matches</span>
            <span>{` Your Passion `}</span>
          </p>
        </b>
        <div className="self-stretch flex flex-row items-center justify-center text-[1.25rem] text-dimgray-100">
          <div className="relative leading-[1.88rem] inline-block w-[42.25rem] shrink-0 md:flex-1">
            Hand-picked opportunities to work from home, remotely, freelance,
            full-time, part-time, contract and internships.
          </div>
        </div>
      </div>
      <div className="self-stretch flex  items-center justify-center py-[0rem] px-[3.13rem] gap-[1.25rem] text-left text-[1.13rem] text-darkgray-100 font-inter md:flex-col sm:pl-[0.31rem] sm:pr-[0.31rem] sm:box-border mq580:pl-[0.63rem] mq580:pr-[0.63rem] mq580:box-border">
        <InputComponent
          text={"Search city, state, country"}
          imagePath={"/vector1.svg"}
        />
        <InputComponent
          text={"Search job title, company"}
          imagePath={"/vector2.svg"}
        />

        <div className="rounded-3xs bg-teal h-[3.88rem] flex  items-center justify-center p-[1.25rem] box-border text-center text-[1.5rem] text-white hover:cursor-pointer">
          <b className="relative flex items-center justify-center w-[11.81rem] h-[3.88rem] shrink-0">
            Search
          </b>
        </div>
      </div>
    </div>
  )
}

export default HeroContainer

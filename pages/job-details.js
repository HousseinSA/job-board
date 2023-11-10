import MainPageLayout from "../components/layout/MainPageLayout"

const JobDetails = () => {
  return (
    <MainPageLayout>
      <div className=" main_container_padding flex w-full flex-row items-start justify-start text-center text-11xl text-black font-poppins">
        <div className="flex-1 bg-white flex flex-col items-center justify-center gap-[20px]">
          <div className="self-stretch bg-whitesmoke flex flex-row items-center justify-center md:pl-5 md:pr-5 md:box-border">
            <div className="flex-1 relative leading-[80px] font-medium md:leading-[40px]">
              <span>Laravel Developer</span>
              <span className="text-xl">(Full Time)</span>
              <span>{` - Match Company Limited `}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 gap-[34px] text-xl">
            <div className="rounded-3xs flex flex-row items-center justify-center p-5 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[20px] font-medium">
                View Company
              </div>
            </div>
            <div className="rounded-3xs bg-teal flex flex-row items-center justify-center p-5 text-white">
              <div className="relative leading-[20px] font-medium">
                Apply This Job
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[20px] text-left text-5xl">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[40px]">
                <p className="m-0">
                  <span>
                    <span className="font-medium">Minimum Qualification:</span>
                    <span className="font-poppins">{` `}</span>
                  </span>
                  <span className="text-xl font-light font-poppins">
                    Bachelor
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="font-medium">Experience Level:</span>
                    <span className="font-poppins">{` `}</span>
                  </span>
                  <span className="text-xl font-light font-poppins">
                    Mid level
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="font-medium">Experience Length:</span>
                    <span className="font-poppins">{` `}</span>
                  </span>
                  <span className="text-xl font-light font-poppins">
                    2 years
                  </span>
                </p>
                <p className="m-0 text-xl">
                  <span className="text-5xl">
                    <span className="font-medium font-poppins">Location:</span>
                    <span className="font-poppins">{` `}</span>
                  </span>
                  <span className="font-light">San Francisco, USA</span>
                </p>
                <p className="m-0 text-xl">
                  <span className="text-5xl">
                    <span className="font-medium font-poppins">
                      Application Deadline:
                    </span>
                    <span className="font-poppins">{` `}</span>
                  </span>
                  <span>
                    <span className="font-light">12/08/2022</span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="font-semibold font-poppins">
                      Salary Range:
                    </span>
                    <b className="font-poppins">{` `}</b>
                    <span className="font-light">$ 105,000 - 150,000</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-5 px-2.5 gap-[10px]">
              <div className="self-stretch  flex flex-row items-center justify-start">
                <b className="relative leading-[30px]">
                  <p className="m-0">Job description</p>
                </b>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[20px] text-xl">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="flex-1 flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[30px] font-light">
                      <p className="m-0">
                        We are searching for a Laravel developer to build web
                        applications for our company. In this role, you will
                        design and create projects using
                      </p>
                      <p className="m-0">
                        {" "}
                        Laravel framework and PHP, and assist the team in
                        delivering high-quality web applications, services, and
                        tools for our business.
                      </p>
                      <p className="m-0">
                        To ensure success as a Laravel developer you should be
                        adept at utilizing Laravel's GUI and be able to design a
                        PHP application from start
                      </p>
                      <p className="m-0">
                        {" "}
                        to finish. A top-notch Laravel developer will be able to
                        leverage their expertise and experience of the framework
                        to independently produce
                      </p>
                      <p className="m-0">
                        {" "}
                        complete solutions in a short turnaround time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[40px] font-semibold">
                      Laravel Developer Requirements:
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-inherit font-inherit">
                    <div className="flex-1 relative leading-[30px] font-light">
                      <p className="m-0">&nbsp;</p>
                      <ul className="m-0 pl-[27px]">
                        <li className="mb-0">
                          A degree in programming, computer science, or a
                          related field.
                        </li>
                        <li className="mb-0">
                          Experience working with PHP, performing unit testing,
                          and managing APIs such as REST.
                        </li>
                        <li className="mb-0">
                          A solid understanding of application design using
                          Laravel.
                        </li>
                        <li className="mb-0">
                          Knowledge of database design and querying using SQL.
                        </li>
                        <li className="mb-0">
                          Proficiency in HTML and JavaScript. Experience
                          developing in Vue is considered a plus.
                        </li>
                        <li className="mb-0">
                          Practical experience using the MVC architecture.
                        </li>
                        <li className="mb-0">
                          The ability to work on LAMP development environment
                        </li>
                        <li className="mb-0">
                          Problem-solving skills and critical mindset.
                        </li>
                        <li className="mb-0">Great communication skills.</li>
                        <li>The desire and ability to learn.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center text-inherit">
                  <div className="flex-1 flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[30px]">
                      <p className="m-0 font-semibold">Responsibilities:</p>
                      <ul className="m-0 pl-[27px]">
                        <li className="mb-0">
                          <span className="font-light">
                            Discussing project aims with the client and
                            development team.
                          </span>
                        </li>
                        <li className="mb-0">
                          <span className="font-light">
                            Designing and building web applications using
                            Laravel.
                          </span>
                        </li>
                        <li className="mb-0">
                          <span className="font-light">
                            Troubleshooting issues in the implementation and
                            debug builds.
                          </span>
                        </li>
                        <li className="mb-0">
                          <span className="font-light">
                            Working with front-end and back-end developers on
                            projects.
                          </span>
                        </li>
                        <li className="mb-0">
                          <span className="font-light">
                            Testing functionality for users and the backend.
                          </span>
                        </li>
                        <li className="mb-0">
                          <span className="font-light">
                            Ensuring that integrations run smoothly.
                          </span>
                        </li>
                        <li className="mb-0">
                          <span className="font-light">
                            Scaling projects based on client feedback.
                          </span>
                        </li>
                        <li className="mb-0">
                          <span className="font-light">
                            Recording and reporting on work done in Laravel.
                          </span>
                        </li>
                        <li className="mb-0">
                          <span className="font-light">
                            Maintaining web-based applications.
                          </span>
                        </li>
                        <li>
                          <span className="font-light">
                            Presenting work in meetings with clients and
                            management.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPageLayout>
  )
}

export default JobDetails

import {Globe} from "react-feather"

import {useState} from "react"

const LangComponent = ({isVisible}) => {
  const [defaultLang, setDefaultLang] = useState("EN")
  const langueges = [
    {short: "EN", long: ["English"]},
    {short: "AR", long: ["Arabic"]},
    {short: "FR", long: ["Francais"]},
  ]
  const [click, setClick] = useState(false)
  function handleClick() {
    setClick(!click)
  }
  function changeLangues(lang) {
    setDefaultLang(lang?.short)
    handleClick()
  }
  return (
    <>
      <div
        onClick={handleClick}
        className="  rounded-3xs cursor-pointer font-medium flex items-center justify-center gap-1 text-sm  text-center"
        type="button">
        <Globe className="w-[20px] h-[20px]" />
        <span className="text-base">{defaultLang}</span>
        <svg
          className="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
      {click && (
        <div
          className={`z-10 ${
            !isVisible && "absolute"
          } top-[4.5rem] right-[18rem]  text-white shadow w-[106.53px] bg-darkgray-200`}>
          <div className=" text-base ">
            {langueges?.map((lang, index) => {
              return (
                <div
                  onClick={() => changeLangues(lang)}
                  key={index}
                  className=" w-full font-normal py-2 cursor-pointer hover:bg-lightgray-300 ">
                  {lang?.long}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default LangComponent

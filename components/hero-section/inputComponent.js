import {useState} from "react"
import Image from "next/image"

const InputComponent = ({text, imagePath}) => {
  const [inputClick, setInputClick] = useState(false)

  const handleClick = () => {
    setInputClick(true)
  }

  const handleBlur = () => {
    setInputClick(false)
  }

  return (
    <div
      className={`flex-1 ${
        inputClick ? "outline outline-teal" : ""
      } rounded-3xs bg-white h-[3.88rem] flex items-center py-[0rem] pr-[3.5rem] pl-[1rem] box-border relative gap-[0.63rem] md:flex-[unset] md:self-stretch`}
      onClick={handleClick}
      onBlur={handleBlur}>
      <div className="top-[1rem] left-[1.19rem] w-[2.59rem] h-[2.56rem] flex items-center justify-start p-[0.38rem] box-border">
        <Image
          className="relative w-[1.84rem] h-[1.81rem]"
          alt=""
          width={29.44}
          height={28.96}
          src={imagePath}
        />
      </div>
      <input
        type="text"
        placeholder={text}
        className="flex-1 relative h-[3.88rem] z-0 bg-transparent outline-none text-lg placeholder-lg"
      />
    </div>
  )
}

export default InputComponent

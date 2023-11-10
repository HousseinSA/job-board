import {X} from "react-feather"
import Link from "next/link"
import LangComponent from "./langComponent"
import {useSession} from "next-auth/react"
import Image from "next/image"
const BurgerMenu = ({isVisible, toggleMenu}) => {
  const {data: session} = useSession()
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black opacity-40 ${
          isVisible ? "" : "hidden"
        }`}></div>
      <div
        className={`fixed left-0 w-full h-screen bg-mintcream flex flex-col items-center justify-center py-[6.25rem] px-[6.5rem] box-border text-center text-[2.19rem] text-teal font-noto-sans transition-transform duration-300 transform ${
          isVisible ? "translate-x-auto" : "-translate-x-full"
        }`}>
        <div className="flex fixed w-full z-50 top-5 right-0 justify-end items-center">
          <div className="bg-mintcream bg-opacity-50 p-5 cursor-pointer">
            <X
              className="w-[3.13rem] h-[3.13rem] text-teal"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className="h-full  w-full text-xl flex flex-col items-start justify-start gap-[3.13rem]">
          {session ? (
            <div className="w-full flex justify-center items-center">
              <div>
                <Image
                  className="rounded-full"
                  width={50}
                  src={session?.user?.image}
                  height={50}
                />
              </div>
            </div>
          ) : (
            <Link
              href={"/login"}
              className="self-stretch text-teal h-[3.75rem] transition rounded-3xs  flex  items-center hover:bg-teal hover:text-white justify-center">
              <div className="relative font-semibold w-full cursor-pointer ">
                Login
              </div>
            </Link>
          )}

          <Link
            href={"/post-job"}
            className="self-stretch h-[3.75rem] text-teal rounded-3xs  transition flex  hover:bg-teal hover:text-white items-center justify-center">
            <div className="relative font-semibold  w-full cursor-pointer ">
              Post a Job
            </div>
          </Link>
          <div className=" self-stretch h-[3.75rem] transition rounded-3xs flex items-center justify-center font-noto-sans-hebrew">
            <LangComponent isVisible={isVisible} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu

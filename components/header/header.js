import Image from "next/image"
import Link from "next/link"

import LangComponent from "./langComponent"
import {useSession} from "next-auth/react"
const Header = ({toggleMenu, isVisible}) => {
  const {data: session} = useSession()
  return (
    <div className="self-stretch bg-white h-[5.88rem] flex items-center justify-between py-[0.19rem] px-[3.13rem] box-border text-right text-[2.25rem] text-teal  sm: sm:pl-[0.31rem] sm:pr-[0.31rem] sm:box-border mq580:pl-[0.63rem] mq580:pr-[0.63rem] mq580:box-border">
      <div className="flex items-center justify-center">
        <Link
          href={"/"}
          className="relative text-teal capitalize font-noto-sans  font-extrabold mq580:text-[1.75rem] mq580:text-center">
          JobsBoard
        </Link>
      </div>
      <div className="flex  items-center justify-center gap-[3.5rem] text-center text-base font-noto-sans md:hidden">
        <LangComponent />
        <Link
            href="/post-job"
            className="flex  text-teal items-center justify-center hover:cursor-pointer">
            <div className="relative font-semibold">Post a job</div>
          </Link>
        {session ? (
          <div className="rounded-full">
            <Image
              className="rounded-full"
              width={50}
              alt="user image"
              src={session?.user?.image}
              height={50}
            />
          </div>
        ) : (
          <Link
            href="/login"
            className="flex  text-teal items-center justify-center hover:cursor-pointer">
            <div className="relative font-semibold">Login</div>
          </Link>
        )}
      </div>
      {!isVisible && (
        <div
          onClick={toggleMenu}
          className="w-[3.13rem] h-[3.13rem] overflow-hidden shrink-0 hidden flex-col items-center justify-start py-[0.5rem] px-[0.25rem] box-border md:flex">
          <Image
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt="menu image"
            src="/vector.svg"
            width={50.08}
            height={50.08}
          />
        </div>
      )}
    </div>
  )
}

export default Header

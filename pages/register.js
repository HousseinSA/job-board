import {signIn} from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

const RegisterPage = () => {
  return (
    <div className="min-h-screen font-poppins flex  items-center justify-center bg-gray-50">
      <div className="bg-white flex flex-col gap-2   p-8 rounded-lg shadow-md w-96">
        <div className="flex w-full justify-center items-center">
          <h1 className="text-3xl font-semibold text-teal font-poppins mb-4">
            Create you account
          </h1>
        </div>
        <form>
          <div className="flex  mb-4 justify-center flex-col gap-2  ">
            <label htmlFor="email" className=" text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              className=" border border-gray-300 rounded-3xs px-3 py-4 mt-3 focus:ring focus:outline-none focus:ring-teal"
              placeholder="Enter your Email"
            />
          </div>
          <button
            type="submit"
            className="w-full  text-center   cursor-pointer bg-teal text-white font-medium py-4 px-3 rounded-3xs hover:bg-green-800  ">
            Continue
          </button>
        </form>
        <div className="flex justify-center center self-stretch w-full">
          <span className="text-sm font-poppins">
            Already have an account?
            <Link className="text-teal ml-1" href={"/login"}>
              Login
            </Link>
          </span>
        </div>
        <div
          onClick={() => signIn("Google")}
          className="flex items-center justify-center cursor-pointer  outline outline-gray-300 hover:bg-gray-300  rounded-3xs ">
          <Image
            width={20}
            height={20}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          />
          <div className="text-center py-4 px-3">Continue with Google</div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

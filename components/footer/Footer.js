const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className="self-stretch bg-teal h-[5rem] flex flex-col items-center justify-center py-[0rem] font-noto-sans px-[3.13rem] box-border sm:text-[1rem] remove-icon:items-center remove-icon:justify-center">
      <div className="relative leading-[1.88rem]">
        © {date} Jobs Board. All rights reserved.
      </div>
    </div>
  )
}

export default Footer

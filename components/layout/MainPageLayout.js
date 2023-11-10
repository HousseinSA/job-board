import {useState, useEffect} from "react"
import BurgerMenu from "../header/humberger-component"
import {useRouter} from "next/router"
import Header from "../header/header"
import HeroContainer from "../hero-section/hero-container"
import Footer from "../footer/Footer"
const MainPageLayout = ({children}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  // removing the side menu when page width is higher than tablet size.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 960 && isMenuVisible) {
        toggleMenu()
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuVisible])
  // checking if the path is not home page then removign the hero-container
  const {pathname} = useRouter()

  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-center text-center text-[1.25rem] text-white min-h-screen">
      <div
        className={`self-stretch flex min-h-screen flex-col items-center ${
          pathname === "/" && " gap-[1.88rem]"
        } justify-start`}>
        <div className="fixed top-0 right-0 z-50">
          <BurgerMenu isVisible={isMenuVisible} toggleMenu={toggleMenu} />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <Header toggleMenu={toggleMenu} isVisible={isMenuVisible} />
          {pathname === "/" && <HeroContainer />}
        </div>
        <div className="flex-grow w-full min-h-[70vh]">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default MainPageLayout

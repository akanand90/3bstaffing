import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)
  const[togle,setTogal]=useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])

 let showHide = ()=>{
   setTogal(!togle)
  }
  return (
    <>
      <header className="header">
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              
              <TitleLogo title='Staffing' caption='3B' className='logomin' />
            </Link>
          </div>
    
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              Agency
            </Link>
            <Link href='/career' className={activeLink == "/career" ? "activeLink" : "none"}>
            Careers
            </Link>
            <Link href='/clients' className={activeLink == "/showcase" ? "activeLink" : "none"}>
            Clients

            </Link>
            <div className="service" style={{display:'inline',color:'black'}} onClick={showHide} >
              <Link href='#'>
              Services
            </Link>
               <p className={isMobile?'dropdownMobile':'dropdown'}>
                
                <Link href='/globaltalent' className={activeLink == "/globaltalent" ? "activeLink" : "none"}>
            Global Talent 
            </Link>
            <Link href='/helthcaretalent' className={activeLink == "/helthcaretalent" ? "activeLink" : "none"}>
              Health Care Talent
            </Link>
                </p>
            
                </div>
                
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
          
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25}  color="red"/> : <RiMenu4Line size={25} color="red"/>}</button>
        </div>
      </header>
    </>
  )
}

export default Header

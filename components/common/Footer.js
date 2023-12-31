import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div>
              {/* <TitleLogo title='Staffing' caption='3B' className='logobg' /> */}
      
              <span style={{color:'white',fontWeight:600}}>
                Questions? </span>
                <br />  Reach us Monday – Friday from 6:30 PM to 3:30 AM
             
              <br />
              <br />
              <h3>(973)988-4546x421/(973)988-4546x430</h3>
              <h3>hr@3bstaffing.com</h3>
              <br />
              {/* <button className='button-primary'>Request for quote</button> */}
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              <li>
                <Link href='/career'>Our career</Link>
              </li>
          
             
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/globaltalent'>Global Talent</Link>
              </li>
              <li>
                <Link href='/helthcaretalent'>Health Care Talent</Link>
              </li>
              <li>
                <Link href='/'>Application Development</Link>
              </li>
              <li>
                <Link href='/'>Mobility Solutions</Link>
              </li>
              {/* <li>
                <Link href='/'>E-Commerce</Link>
              </li> */}
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href='https://instagram.com/3bstaffing?igshid=NjIwNzIyMDk2Mg=='>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href='https://www.linkedin.com/company/3b-staffing-llc/mycompany/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 Design And Develop by Akhilesh </span>
            </div>
            <div className='connect'>
              <span>3B Staffing</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

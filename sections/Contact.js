import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import next from "next"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h4>(973) 988-4546</h4>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h4>3B Staffing LLC</h4>
                  <span>485B US Highway 1 S, STE 300, Iselin, New Jersey 08830, United States


</span>
                </div>


                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Offshore - India - Noida</h3>
                  <h4>3B Staffing LLC</h4>
                  <span>H-32, Sector 63, Noida, UP 201301


</span>
                </div>

                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h4>Offshore - India - Hyderabad - Nizampet</h4>
                  <h4>3B Staffing LLC</h4>
                  <span>SS Mansion, Floor 4, Nizampet Rd, E Block, Nizampet, Hyderabad, Telangana 500090, India


</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h4>Email: info@3bstaffing.com</h4>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h4>hr@3bstaffing.com</h4>
                  {/* <span>Career at Seven Creative</span> */}
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                <Link target="_blank" href='https://www.linkedin.com/company/3b-staffing-llc/mycompany/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title="'Let's Talk about Your IT Needs'" />
              <p className='desc-p'>Everyone company needs support, connectivity, and security. However, the specific needs of your company are unique to you. Send us a message, and we can help you find the services that best fit your needs. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

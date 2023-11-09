import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import React, { useState } from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import next from "next"
import {toast} from 'react-hot-toast'

const Contact = () => {
  const [data,setData]=useState({country:'',aboutSelf:'',fname:'',lname:'',phone:'',email:'',msg:''})
   const[msg,setMsg]=useState(false)
  const handleChane = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitData = async (e)=>{
    e.preventDefault()
 
    const response = await fetch("/api/contact",{
      method:"POST",
      body:JSON.stringify(data)
    });
    const res = await response.json();
     if(res.mag){
      setMsg(true)
      {toast.success('Successfully toasted!')}
     }
    else{
      alert('Fill form')
    }

    setData({country:'',aboutSelf:'',fname:'',lname:'',phone:'',email:'',msg:''})
  

  }
  return (
    <>
    
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Contact' className='title-bg'/>
            {msg?<Title title="Email Send successfully" className='title-bg'/>:''}
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
                  <h4>3B Staffing Pvt. Ltd.</h4>
                  <span>485B US Highway 1 S, STE 300, Iselin, New Jersey 08830, United States


</span>
                </div>


                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Offshore - India - Noida</h3>
                  <h4>3B Staffing Pvt. Ltd.</h4>
                  <span>H-32, Sector 63, Noida, UP 201301


</span>
                </div>

                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h4>Offshore - India - Hyderabad - Nizampet</h4>
                  <h4>3B Staffing Pvt. Ltd.</h4>
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

            <div className='right w-95'>
             <h2>Let's Talk about Your IT Needs</h2>
              {/* <TitleSm title="'Let's Talk about Your IT Needs'" /> */}
              <p className='desc-p'>Company need support, connectivity and security to grow their businesses.<br/>
              To grow together there please share your queries/requirements 👇🏻 </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>I want help in the following country*</span>
                  
                    <select required="" class="select" name="country" onChange={handleChane}>
                      <option disabled="" value="">Please Select</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="India">India</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Germany">Germany</option>
                      <option value="Poland">Poland</option>
                      <option value="Netherland">Netherland</option>
                      <option value="Other">Other</option></select>
                    
                  </div>
                   
                  <div className='inputs'>
                    <span>About Myself*</span>
                  
                    <select className="select" required="" name="aboutSelf" onChange={handleChane}>
                      <option disabled="" value="">Please Select</option>
                      <option value="I'm a prospective client">I'm a prospective client</option>
                      <option value="I'm a current client">I'm a current client</option>
                      <option value="I'm a prospective employee/contractor">I'm a prospective employee/contractor</option>
                      <option value="I'm a current employee/contractor">I'm a current employee/contractor</option>
                      <option value="I'm a prospective vendor">I'm a prospective vendor</option>
                      <option value="I'm a current vendor">I'm a current vendor</option>
                      <option value="Im a background check company">I'm a background check company</option>
                      <option value="Other">Other</option></select>
                    
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>First name*</span>
                    <input type='text'onChange={handleChane} name='fname'/>
                  </div>
                  <div className='inputs'>
                    <span>last name*</span>
                    <input type='text' name='lname' onChange={handleChane} />
                  </div>
                </div>

                <div className='grid-2'>
                  <div className='inputs'>
                    <span>phone</span>
                    <input type='mobile' name="mobile" onChange={handleChane}/>
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='email' name="email" onChange={handleChane}/>
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT</span>
                  <textarea cols='30' rows='10' name="msg" onChange={handleChane}></textarea>
                </div>
                <button className='button-primary' onClick={submitData}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

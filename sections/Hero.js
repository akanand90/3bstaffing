import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import  Clients from "@/components/Clients"
import Slider from "@/components/Slider"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
  
      <section className='hero'>
      <Slider/>
        <div className='container'>
          {/* <TitleLogo title='Staffing' caption='3B' className='logobg' /> */}
          <h1 className='hero-title'>EXPERIENCED, PERSONALIZED IT CONSULTING</h1>
          <p>Let us build the infrastructure for your success!</p>

          {/* <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='BRANDING' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div> */}
         <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4"/>
  
        </video>
        </div>
   
      </section>
      <section> 
      
      
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
          </div>
          <div className='hero-content grid-4'>
         
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      {/* < Clients /> */}
      <Brand />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div> */}
      {/* <BlogCard /> */}
    </>
  )
}

export default Hero

import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import  Clients from "@/components/Clients"
import Slider from "@/components/Slider"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React, { useEffect } from "react"

const Hero = () => {

 
  return (
    <>
  
      <div className="video">
      <video src="images/slidervideo.mp4" width='100%' autoPlay={true} loop={true} muted={true} controls={true} />
      </div>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='One of the best digital agency' className='title-bg'/>
            {/* <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p> */}
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
      <Brand  homeClient='WE ARE PROUD TO WORK WITH THESE PARTNERS'/>

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div> */}
      {/* <BlogCard /> */}
    </>
  )
}

export default Hero

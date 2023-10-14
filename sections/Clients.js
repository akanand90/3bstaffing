import { showcase } from "@/assets/data/dummydata"
import Brand from "@/components/Brand"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Clients = () => {
  return (
    <>
      <section className='showcase bg-top'>
        
        <div className='container'>
          <div className='heading-title'>
            {/* <TitleSm title='SHOWCASE' /> <br /> */}
            <br />
            <Title title='Our Partners' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))} 
            
          </div>
         
          {/* <div className='py btn'>
            <button className='secondary-button'>View More</button>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Clients

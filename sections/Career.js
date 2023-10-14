import { teamdata } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import career from "@/pages/career"
import React from "react"

const Career = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            {/* <TitleSm title='OPEN JOBS' /> <br />
            <br /> */}
            <Title title='Careers, Contracts and Gigs' className='title-bg' />
            <span>Where in the world do you want to work?</span>
          </div>
          {/* <div className='grid-4 py'>
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div> */}
         

        </div>
        <iframe width='100%' height='500px' src="https://www.dice.com/jobs?countryCode=US&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.clientBrandNameFilter=3B%20Staffing%20LLC&language=en"></iframe>
      </section>
    </>
  )
}

export default Career

import React from "react"
import Link from "next/link"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            {/* <TitleLogo title='Lets take your business to the next level!' /> */}
          </div>
          <div>
            <Link className='button-primary' href='/contact'>Request a call-back</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

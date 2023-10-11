import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Why 3B Staffing?' />
              <p className='desc-p'>3B Staffing is an emerging global leader in IT staffing solutions headquartered in New Jersey. Since its inception, the organization has rapidly gained recognition as one of the fastest growing IT staffing firms in the nation. 3B Staffing delivers value-driven IT staffing resources that organizations require for enhancing business solutions and improving project outcomes. We provide cutting-edge IT staffing expertise in Enterprise Resource Planning and Business Intelligence & Data Warehousing, Content & Identity Management, Infrastructure and more. We work with world-leading system integrator, Fortune 500 clients and public-sector organizations with deep industry focus. Our comprehensive knowledge, industry expertise, global footprint and unique service capabilities have enabled us to provide the best in industry staffing solutions throughout the U.S.A, Mexico, and Australia. Our reputation is solid for hitting the bull's eye with every resource deployment. Our core values and philosophy voice our commitment in building successful relationships with clients, employees and the small business community. We are an award-winning organization, touted as one of Best Places to Work', a Top-notch Recruiting Firm, positioned in the leaders' quadrant as one of America's most advanced sustained-growth firms.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/imagess/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/imagess/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='How 3B Staffing Work?' />
              <br />
              <p className='misson-p'>As part of 3B Staffing IT Staffing’s ongoing commitment to candidates, we’ll only present your candidacy to our client companies after we have your permission to do so. Once we’ve contacted you and you’ve expressed direct interest and consent to pursue next steps, we’ll present your information to our client company. You can email us at</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency

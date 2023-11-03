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
            <h2>ABOUT AGENCY</h2> <br />
            <br />
            <Title title='One of the best digital agency' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left'>
              {/* <TitleSm title='Why 3B Staffing?'  /> */}
              <h2>Why 3B Staffing?</h2>
              <p className='desc-p'>3B Staffing is an emerging global leader in IT staffing and healthcare solutions, our headquarter located in New Jersey. Since its inception, the organization has rapidly gained recognition as one of the fastest growing IT staffing firms . 3B Staffing delivers value-driven IT and healthcare staffing resources that organizations require for enhancing business solutions and improving project outcomes. We provide cutting-edge IT and healthcare staffing expertise in Enterprise Resource Planning and Business Intelligence & Data Warehousing, Content & Identity Management, Infrastructure and more. We work with world-leading system integrator, Fortune 500 clients and public-sector organizations with deep industry focus. Our comprehensive knowledge, industry expertise, global footprint and unique service capabilities have enabled us to provide the best in industry staffing solutions throughout the U.S.A, Mexico, and Australia. Our reputation is solid for hitting the bull's eye with every resource deployment. Our core values and philosophy voice our commitment in building successful relationships with clients, employees and the small business community. We are an award-winning organization, we have one of the Best Places to Work', a Top-notch Recruiting Firm, positioned in the leaders' quadrant as one of America's most advanced sustained-growth firms.</p>
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
            {/* <div className='right w-30 ml'>
              <img src='images/about-agency.png' alt='Img' className='round' width='50%' height='50%' />
            </div> */}
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='images/about-agency.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml-10'>
              <h2 className='misson-p'>How To 3B Staffing Pvt. Ltd. Work?</h2>
              <br />
              <p className='misson-p'>As part of 3b Staffing Pvt. Ltd. we are committed  to  present our candidate candidancy to our clients companies. We will.present candidate after the discussion with candidate and client profile</p>
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

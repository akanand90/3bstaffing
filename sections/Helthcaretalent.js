import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import Accordion from "@/sections/Accordion"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const HealthcareTalent = () => {
  return (
    <>
      <section className='global-health'>
        <div className='container'>
          <div className='heading-title'>
            
            <Title title='Healthcare Talent Solutions'  className='title-bg' />
            
            <TitleSm title=' For decades, the greatest brands have relied on 3b staffing for
            Nursing and   Health Staffing Solutions'/>
           
          </div>

 <div class="d-flex justify-content-between">
  <div class="p-2">
    <h4>Global Nurse Staffing Solutions</h4>
    <p>In more than 50 countries, 3b staffing provides quality talent for all industries that rely on healthcare professionals.</p>
   
    <p>From healthcare and pharmaceutical, to clinical, you can come to 3b staffing for top talent in any healthcare role</p>

    <Accordion title="Travel Nurse" content="With a robust network of fully-vetted, highly-qualified and flexible travel nurses, 3b staffing is ready to fill gaps and meet your organization's nurse staffing needs." />
    <Accordion title="Per-diem " content="Our per-diem staffing solution gives you healthcare talent, on-demand. With thousands of per diem nursing opportunities available across the world, we offer a flexible and cost-effective solution to last-minute shift cancellations and census fluctuations." />
    <Accordion title="International" content="3B Staffing’s international nurse staffing solutions provide organizations with long-term nurse staffing coverage from fully licensed nurses across the world." />
    <Accordion title="Crisis" content="We know crises across the globe can create urgent gaps in staffing levels, and create an immediate need for crisis nurse staffing. Thoroughly experienced in crisis response,3B  provides the nurse coverage you require at the critical time you require it." />
    <Accordion title="Electronic Medical Record (EMR)" content="3B EMR staffing solutions ensure smooth Electronic Medical Record (EMR) transitions, integrations and updates, each step of the way — from discovery, to system implementation and upgrades, through to completion" />
  </div>
  <div class="gt-pic">
<img src="images/healthimg1.jpg" width='100%'/>
  </div>
  
    </div>

 <hr/>


    <div class="d-flex justify-content-between">
    <div class="gt-pic">
<img src="images/health3.jpg" width='100%'/>
  </div>
  <div class="p-2">
    <h4>End-to-End   Health Staffing Solutions</h4>
    <p>Gain flexibility and agility in meeting your ever-changing talent needs across the globe.</p>
    
    <p>Our award-winning service attracts and retains a vibrant network of top talent throughout EMEA, Americas and APAC. So, you can efficiently secure   health clinicians from any disciplines and setting: .</p>
    <Accordion title="Imaging" content="3B’s best-in-class imaging and radiology staffing services help you fill positions across a spectrum of specialty and practice settings - hospitals, doctor's offices, urgent care centers, outpatient surgery centers, diagnostic labs and imaging centers" />
    <Accordion title="Respiratory " content="Healthcare facilities across the globe depend on 3b staffing for qualified candidates to fill laboratory positions. Our talent pool is pre-vetted, ready-to-work and spans a variety of disciplines and settings – from local contractors and travel clinicians, to seasonal staffing or per diem workers." />
    <Accordion title="Therapy" content="Our robust network of qualified and trusted therapy professionals will relieve your   therapy staffing needs. Our outstanding customer service and expert career of therapy professionals will take your therapy staffing to the next level." />
    <Accordion title="Local and Per-diem" content="We specialize in recruiting for per-diem   healthcare professionals. As your trusted partner, our   per-diem staffing solutions will meet your current and future needs." />

  </div>
  
  
    </div>

    <hr/>
    <div class="d-flex justify-content-between">
    
  <div class="p-2">
    <h4>Receive only the highest-quality candidates</h4>
    <p>We maintain a close relationship with the local talent market by having recruiters located in 14 countries. So, we know where to source even the most hard-to-find skills and understand what "great" talent looks like. After interviewing and reviewing candidates, you receive the top-ranked candidates along with their assessment and comments from their interview.</p>
  </div>
  <div class="gt-pic">
<img src="images/healthimg2.jpg" width='100%'/>
  </div>
  
    </div>
        </div>
      </section>
    </>
  )
}

export default HealthcareTalent

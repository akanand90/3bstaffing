import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import Accordion from "@/sections/Accordion"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const GlobalTalent = () => {
    
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            
            <Title title='Global Talent Solutions'  className='title-bg' />
             <br />
            <br />
            <TitleSm title='
Hire and scale contract talent worldwide'/>
           
          </div>
          <div className='grid-2 py'>
            {/* {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))} */}
           

           

          </div>

 <div class="d-flex justify-content-between">
  <div class="p-2" style={{"width":400}}>
    <h4>CONTRACT STAFFING
    </h4>
<h5>Hire and scale contract talent worldwide</h5>
    <p>Business needs are changing so quickly that you must be able to access skills with speed and flexibility to remain competitive. eTeam recruiters are located worldwide to maintain close relationships with regional talent markets, so you can secure the professionals you require to achieve your business goals. Through eTeam, you can safely contract talent in more than 50 countries for IT, clinical, scientific, engineering, and professional roles, at any scale.</p><br/>
    <br/>
  </div>
  <div class="p-2" style={{"width":800}}>
<img src="../images/healthimg1.jpg" width='100%'/>
  </div>
  
    </div>

 <hr/>

 <div class="d-flex justify-content-between">
 <div class="p-2" style={{"width":800}}>
<img src="../images/healthimg1.jpg" width='100%'/>
  </div>
  <div class="p-2" style={{"width":400}}>
    <h4>DIRECT HIRE
    </h4>
<h5>Direct-hire international employees with confidence</h5>
    <p>In a competitive market, winning over top talent begins by creating a positive candidate experience. Since 1999, we have built a large talent community by nurturing long-term relationships based on respect. So that when we introduce candidates to your role, they see your brand with greater excitement and trust. Our commitment to building lasting relationships is what makes half of the Fortune 500 companies consider eTeam their end-to-end talent solution.</p><br/>
    <br/>
  </div>

  
    </div>

 <hr/>

 <div class="d-flex justify-content-between">
  <div class="p-2" style={{"width":400}}>
    <h4>GLOBAL PAYROLL
    </h4>
<h5>Securely hire and pay talent worldwide</h5>
    <p>Hiring and onboarding global talent can be daunting when you must maintain compliance with local payroll and hiring laws. e-Payroll aids you in avoiding international hiring risk by handling all HR related tasks including onboarding, paying, and administering benefits. Our solutions are expertly designed to maintain compliance for contract talent and employees in more than 50 countries.</p><br/>
    <br/>
  </div>
  <div class="p-2" style={{"width":800}}>
<img src="../images/healthimg1.jpg" width='100%'/>
  </div>
  
    </div>

 <hr/>

 <div class="d-flex justify-content-between">
 <div class="p-2" style={{"width":800}}>
<img src="../images/healthimg1.jpg" width='100%'/>
  </div>
  <div class="p-2" style={{"width":400}}>
    <h4>GLOBAL MSP
    </h4>
<h5>Connect all your contingent talent, wherever they're located</h5>
    <p>Expand your MSP program to areas of low contingent labor spend and still achieve ROI. Our customizable solution enables you to extend your current process consistency and efficiencies across the globe, so you:</p><br/>
    <br/>
  <ul>
    <li><p>Maintain compliance with local employment laws.</p></li>
    <li><p>Hire and onboard talent faster.</p></li>
    <li><p>Control costs with competitive talent pricing.</p></li>
    <li><p>Gain transparency into talent usage and spend.</p></li>
  </ul>
  </div>

  
    </div>

 <hr/>

  <div class="d-flex justify-content-between">
  <div class="p-2" style={{"width":400}}>
    <h4>STATEMENT OF WORK
    </h4>
<h5>Results-focused SOW management</h5>
    <p>We ensure cost-effective and efficient management of deliverable-based SOW projects by mitigating risk and driving savings. Our approach successfully reallocates rogue spend into your non-employee workforce programs while improving the quality of results.</p><br/>
    <br/>
  </div>
  <div class="p-2" style={{"width":800}}>
<img src="../images/healthimg1.jpg" width='100%'/>
  </div>
  
    </div>

 <hr/>
        </div>
      
      <div>
          <div className='heading-title'>
            
            <Title title='DIVERSITY IS INTENTIONALLY BUILT IN'  className='title-bg' />
             <br />
            <br />
            <TitleSm title='
3B embraced diversity from its inception as it was founded by subject matter experts coming together from
disparate countries. Our award-winning tools and processes deliberately prioritize diversity and equity to help
you make good on your DE&I promises.'/>
           
          </div>
          </div>
          </section>
    </>
  )
}

export default GlobalTalent

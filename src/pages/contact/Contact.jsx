import React from 'react'
import HeadingTitle from '../../components/HeadingTitle/HeadingTitle'
import style from './contact.module.css'
import Testimonial from '../../components/Testimonial/Testimonial'
// import HollowButton from '../../components/hollowButton/HollowButton'
// import BoldButton from '../../components/BoldButton/BoldButton'
import Marquee from 'react-fast-marquee'


const Contact = () => {
  return (
    <main>
      <div className={style.ContactHeader}>
        <div className={style.leftContactHeader}>
          <HeadingTitle title="Start a Project"/>
          <h2 className={style.contactme}>
            <span>Contact</span> & grow your business online with us...
          </h2>
          
          {/* Form Section */}

          <div className={style.leftformPart}>
            <h4>Let's get connected!!</h4>

            <div className={style.formNameSection}>
              <div className={style.fname}>
                <label htmlFor="fname">First Name *</label>
                <input type="text" name="fname" id="fname" required placeholder='Chaitanya'/>
              </div>
              <div className={style.lname}>
                <label htmlFor="fname">Last Name *</label>
                <input type="text" name="fname" id="fname" required placeholder='Shimpi'/>
              </div>
            </div>
            <div className={style.formEmailSection}>
              <label htmlFor="email">Email *</label>
              <input type="email" name="email" id="email" required placeholder='mail@mail.com'/>
            </div>
            <div className={style.projectDetails}>
              <label htmlFor="description">Project Details:</label>
              <textarea name="" id="" cols="30" rows="5" placeholder='Enter any project specific details...'></textarea>
            </div>
          </div>
          

        </div>
        {/* <marquee className={style.moveTest}> */}
        <div className={style.movingTestimonial}>

          <Marquee style={{zIndex: -2}}>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
          </Marquee>
        
          <Marquee style={{paddingLeft:'100px', zIndex: -2}}>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
          </Marquee>
          <div className={style.testinomialGradient}>
          </div>
            <div className={style.testinomialGradient2}></div>
        </div>
        {/* </marquee> */}

      </div>
      
    </main>
  )
}

export default Contact
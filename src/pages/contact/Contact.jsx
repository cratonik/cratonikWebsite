import React from 'react'
import HeadingTitle from '../../components/HeadingTitle/HeadingTitle'
import style from './contact.module.css'
import Testimonial from '../../components/Testimonial/Testimonial'
// import HollowButton from '../../components/hollowButton/HollowButton'
import BoldButton from '../../components/BoldButton/BoldButton'
import Marquee from 'react-fast-marquee'


const Contact = () => {
  return (
    <main>
      <div className={style.ContactHeader}>
        <div className={style.leftContactHeader}>
          <HeadingTitle title="Start a Project" />
          <h2 className={style.contactme}>
            <span>Contact</span> & grow your business online with us...
          </h2>

          {/* Form Section */}

          <div className={style.leftformPart}>
            <h4>Let's get connected!!</h4>

            <div className={style.formNameSection}>
              <div className={style.fname}>
                <label htmlFor="fname">First Name <span>*</span></label>
                <input type="text" name="fname" id="fname" required placeholder='Chaitanya' />
              </div>
              <div className={style.lname}>
                <label htmlFor="fname">Last Name <span>*</span></label>
                <input type="text" name="fname" id="fname" required placeholder='Shimpi' />
              </div>
            </div>
            <div className={style.formEmailSection}>
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" name="email" id="email" required placeholder='mail@mail.com' />
            </div>
            <div className={style.projectDetails}>
              <label htmlFor="description">Project Details:</label>
              <textarea name="" id="" cols="30" rows="5" placeholder='Enter any project specific details...'></textarea>
            </div>
          </div>


        </div>
        {/* <marquee className={style.moveTest}> */}
        <div className={style.movingTestimonial}>

          <Marquee style={{ zIndex: -2 }}>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
          </Marquee>

          <Marquee style={{ paddingLeft: '100px', zIndex: -2 }}>
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
            <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik" />
          </Marquee>
          <div className={style.testinomialGradient}></div>
          <div className={style.testinomialGradient2}></div>
        </div>
        {/* </marquee> */}

      </div>
      <div className={style.leftOverFormSection}>
        <div className={style.formProducts}>
          <h1>What do you need help with?</h1>
          <span>Select all that apply for your project.</span>
          <div className={style.serviceList}>
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Everything</label>

            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Strategy</label>

            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Branding</label>

            <input type="checkbox" id="checkbox4" />
            <label for="checkbox4">Website Development</label>

            <input type="checkbox" id="checkbox5" />
            <label for="checkbox5">Mobile Application</label>

            <input type="checkbox" id="checkbox6" />
            <label for="checkbox6">SEO</label>

            <input type="checkbox" id="checkbox7" />
            <label for="checkbox7">Software</label>

            <input type="checkbox" id="checkbox8" />
            <label for="checkbox8">Social Media Marketing (SMM)</label>

            <input type="checkbox" id="checkbox9" />
            <label for="checkbox8">Marketing</label>
          </div>
        </div>
        <div className={style.budget}>
          <h1>Budget Range</h1>
          <div className={style.budgetSelection}>
              <input type="radio" id="option1" name="options" />
            <label for="option1">
              <div className={style.labelSelect}></div>
              <div>
                <h4>ONGOING SUPPORT</h4>
                <p>Hire Cratonik as an extension to the team</p>
              </div>
            </label>
              <input type="radio" id="option2" name="options" />
            <label for="option2">
              <div className={style.labelSelect}></div>
              <div>
                <h4>STARTER</h4>
                <p>₹10,000 - ₹18,000</p>
              </div>
            </label>
              <input type="radio" id="option3" name="options" />
            <label for="option3">
              <div className={style.labelSelect}></div>
              <div>
                <h4>PREMIUM</h4>
                <p>₹18,000 - ₹80,000</p>
              </div>
            </label>
              <input type="radio" id="option4" name="options" />
            <label for="option4">
              <div className={style.labelSelect}></div>
              <div>
                <h4>ENTERPRISE</h4>
                <p>₹80,000+</p>
              </div>
            </label>
          </div>
        </div>
        <div className={style.submitButton}>
          <BoldButton text="Send Request"/> 
        </div>
      </div>
    </main>
  )
}

export default Contact
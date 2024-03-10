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
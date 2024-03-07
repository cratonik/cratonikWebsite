import React from 'react'
import HeadingTitle from '../../components/HeadingTitle/HeadingTitle'
import style from './contact.module.css'
import Testimonial from '../../components/Testimonial/Testimonial'
// import HollowButton from '../../components/hollowButton/HollowButton'
// import BoldButton from '../../components/BoldButton/BoldButton'

const Contact = () => {
  return (
    <main>
      <div className={style.ContactHeader}>
        <div className={style.leftContactHeader}>
          <HeadingTitle title="Start a Project"/>
          <h2 className={style.contactme}>
            <span>Contact Us</span> & let's get started by growing your business online with us...
          </h2>
          {/* <div className={style.contactHeadButtons}>
            <HollowButton text="text"/>
            <BoldButton text="Free 15-min Consult"/>
          </div> */}
        </div>
        {/* <marquee className={style.moveTest}> */}
        <div className={style.movingTestimonial}>
          <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
          <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
          <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
          
          <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
        <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
        <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
        <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
          
          <Testimonial review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam dolorum tenetur cupiditate, quae provident adipisci fuga ad? Ratione quas expedita aliquid eos, eius ut quos fugiat sit id cupiditate!" img="../../assets/image/CTA.png" name="Chaitanya Shimpi" title="CEO, Cratonik"/>
        </div>
        {/* </marquee> */}

      </div>
      
    </main>
  )
}

export default Contact
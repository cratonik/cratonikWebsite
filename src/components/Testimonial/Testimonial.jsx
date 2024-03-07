import style from './testimonial.module.css'
import person from '../../assets/image/CTA.png'

const Testimonial = (props) => {

    let personImage = props.img;

    return(
        <div className={style.testimonial}>
            <p className={style.reviewMsg}>
            
            {props.review}
            </p>
            <div className={style.testimonialPerson}>
                <img src={person} className={style.testimonialPersonImage} alt="Cratonik Review"  />
                <div className={style.testimonialPersonName}>
                    {props.name}
                    <div className={style.testimonialPersonTitle}>
{props.title}                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Testimonial
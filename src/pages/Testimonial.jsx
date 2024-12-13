import './Testimonial.css'
import testimonialImage from '../assets/image3.png'


function Testimonial(){
    return(
        <div class="testimonialSection">
                <h3>Testimonials</h3>
                <div class="testimonial">
                    <img src= {testimonialImage} alt="Testimonials video"/>
                    <div class="testimonialButton">
                        <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eae"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>Previous </button>
                        <button>Next <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eae"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></button>
                    </div>
                </div>
        </div>
    )
}

export default Testimonial
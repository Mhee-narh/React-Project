import './Talent.css'
import talentImage from '../assets/image2.png'


function Talent(){
    return(
        <div class="talentSection">
        <div class="talentImg">
            <img src={talentImage} alt=""/>
        </div>
        <div class="talentRight">
            <h1>Our Talent Pool</h1>
            <p>Browse through our list of vetted-Engineers and make your selection.
                our recruiters are also avaliable to help you find the best match
            </p>
            <button class="button2">View and Select Engineers</button>
        </div>
    </div>
    )
}

export default Talent
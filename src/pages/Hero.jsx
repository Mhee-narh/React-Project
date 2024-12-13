import './Hero.css'
import HeroImage from '../assets/image1.png'


function Hero(){
    return(
        <div className="heroSection">
            <div className="heroLeft">
                    <h1>Hire the best software Engineering talent</h1>
                    <h5>Our engineers adhere to industry best pratices and are quick to 
                        adapt to your Framework and pratices
                    </h5>
                    <div class="heroButtons">
                        <button class="button1">View and Select Engineers</button>
                        <button class="button2">Speak with our Team</button>
                    </div>
            </div>  
            <div class="heroRight">
                    <img src= {HeroImage} alt=""/>
            </div>

        </div>
    )
}

export default Hero
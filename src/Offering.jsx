import './Offering.css'
import offeringImage from './assets/image2.png'

function Offering(){
    return(
        <div class="offeringSection">
        <div class="offeringText">
            <h1>Our Offerings</h1>
            <div class="offeringBox">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b8d344"><path d="M320-200v-560l440 280-440 280Z"/></svg>
                <div class="offeringBoxText">
                    <h3>Decagon Fellowship</h3>
                    <p>Get Skilled Engineering talent on a two year commitment</p>
                </div>
            </div>
            <div class="offeringBox">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b8d344"><path d="M320-200v-560l440 280-440 280Z"/></svg>
                <div class="offeringBoxText">
                    <h3>Decagon Fellowship</h3>
                    <p>Get Skilled Engineering talent on a two year commitment</p>
                </div>
            </div>
            <div class="offeringBox">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b8d344"><path d="M320-200v-560l440 280-440 280Z"/></svg>
                <div class="offeringBoxText">
                    <h3>Decagon Fellowship</h3>
                    <p>Get Skilled Engineering talent on a two year commitment</p>
                </div>
            </div>
            <div class="offeringBox">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b8d344"><path d="M320-200v-560l440 280-440 280Z"/></svg>
                <div class="offeringBoxText">
                    <h3>Decagon Fellowship</h3>
                    <p>Get Skilled Engineering talent on a two year commitment</p>
                </div>
            </div>
            <div class="offeringButtons">
                <button class="button1">View and Select Engineers</button>
                <button class="button2">Contact Us</button>
            </div>
        </div>
        <div class="offeringImage">
            <img src={offeringImage} alt=""/>
        </div>
    </div>
    )
}

export default Offering
import './Footer.css'
import instagramLogo from './assets/instagram.png'
import linkedlnLogo from './assets/linkedln.png'
import facebookLogo from './assets/facebook.png'

function Footer(){
    return(
        <footer>
            <div class="footerTop">
                <div class="footerLogo">
                    <img src="/Images/footer-logo.svg" alt="logo"/>
                    <div class="footerIcons">
                        <img src={instagramLogo} alt=" instagram logo"/>
                        <img src={linkedlnLogo} alt="linkedln logo"/>
                        <img src={facebookLogo} alt="facebook logo"/>
                    </div>
                </div>
                <div class="footerFlex">
                    <h1>Decagon Institute</h1>
                    <ul>
                        <li>Become a Software Engineer</li>
                        <li>Our Programs</li>
                        <li>FAQs</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div class="footerFlex">
                    <h1>Talent Acquisitions</h1>
                    <ul>
                        <li>Decagon Fellowship</li>
                        <li>Hire Tech Talents</li>
                        <li>Speak with our teams</li>
                    </ul>
                </div>
                <div class="footerFlex">
                    <h1>Decagon</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div class="footerBottom">
                <div class="left">
                    <h3>Privacy Policy</h3>
                    <h3>Terms of Service</h3>
                    <h3>@2023 Decagon.All right reserved</h3>
                </div>
                <div class="right">
                    <h3>Info@deagon.houtdj</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer
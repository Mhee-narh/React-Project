import './Engineer.css'
import jane from './assets/jane.avif'
import john from './assets/john.avif'


function Engineer(){
    return(
        <div class="engineerSection">
        <h2>Our <span>Engineers</span> are skilled in <br/> the technologies you need</h2>
        <div class="engineerFlex">
            <div class="engineerFlexBox">
                <img src={jane} alt="profile picture"/>
                <h3>Jane Doe</h3>
                <p>Java Developer</p>
            </div>
            <div class="engineerFlexBox">
                <img src={john} alt="Profile picture"/>
                <h3>John Doe</h3>
                <p>React Developer</p>
            </div>
            <div class="engineerFlexBox">
                <img src={jane} alt="profile picture"/>
                <h3>Jane Doe</h3>
                <p>Java Developer</p>
            </div>
            <div class="engineerFlexBox">
                <img src={john} alt="Profile picture"/>
                <h3>John Doe</h3>
                <p>React Developer</p>
            </div>
            <div class="engineerFlexBox">
                <img src={jane} alt="profile picture"/>
                <h3>Jane Doe</h3>
                <p>Java Developer</p>
            </div>
            <div class="engineerFlexBox">
                <img src={john} alt="Profile picture"/>
                <h3>John Doe</h3>
                <p>React Developer</p>
            </div>
            <div class="engineerFlexBox">
                <img src={jane} alt="profile picture"/>
                <h3>Jane Doe</h3>
                <p>Java Developer</p>
            </div>
            <div class="engineerFlexBox">
                <img src={john} alt="Profile picture"/>
                <h3>John Doe</h3>
                <p>React Developer</p>
            </div>

        </div>
        <button class="engineerFlexButton">View Engineers Profile</button>
    </div>
    )
}


export default Engineer
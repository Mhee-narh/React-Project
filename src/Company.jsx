import './Company.css'

import carbonIcon from './assets/carbon.png'
import accessIcon from './assets/access.png'
import unionIcon from './assets/union.png'
import nestleIcon from './assets/nestle.webp'
import sterlingIcon from './assets/sterling.png'

function Company(){
    return(
        <div class="companyIcons">
            <h1>Happy Clients</h1>
            <img src= {carbonIcon} alt="Carbon logo"/>
            <img src= {accessIcon} alt="Access logo"/>
            <img src= {unionIcon} alt="Union logo"/>
            <img src= {nestleIcon} alt="Nestle logo"/>
            <img src= {sterlingIcon} alt="sterling logo"/>
        </div> 
    )
}

export default Company
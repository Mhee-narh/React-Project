import './App.css'
import './Card.css'
import Nav from '../components/Nav'
import Hero from './Hero'
import Company from './Company'
import Talent from './Talent'
import Card from './Card'
import Offering from './Offering'
import Testimonial from './Testimonial'
import Engineer from './engineer'
import Contact from './Contact'
import Footer from '../components/Footer'

import cardsData from "../data/card.json"
import engineersData from "../data/engineer.json"

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Company/>
      <Talent/>
      <div className="cardSection">
        <div className="cardHeading">
          <h1>Why <span>Decagon</span>?</h1>
        </div>
        <div className="cards">
          {cardsData.map((card) => (
            <Card 
              className= "card"
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <Offering/>
      <Testimonial/>
      <div class="engineerSection">
        <h2>Our <span>Engineers</span> are skilled in <br/> the technologies you need</h2>
        <div class="engineerFlex">
            {engineersData.map((engineer) => (
              <Engineer
                className = "engineerFlexBox"
                key = {engineer.id}
                name = {engineer.name}
                image = {engineer.image}
                role = {engineer.role}
              />
            ))}
        </div>
      </div> 
      <Contact/>
      <Footer/>
        
    </>
  )
}

export default App

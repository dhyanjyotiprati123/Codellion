import React from 'react'
import Headercard from './Headercard'
import Navbar from './Navbar'
import Icon1 from "../assets/Vector.svg"
import Icon2 from "../assets/Vector (1).svg"
import Icon3 from "../assets/Icon3.svg"
import ServiceCard from './ServiceCard'

const Hero = () => {
    return (
        <div className="hero">
         <div className="container">
          <Navbar />
          <div className="hero-header">
             <Headercard />
          </div>  
          <div className="hero-services mt-lg">
             <ServiceCard pic={Icon1} title="digital marketing" p1="we focus on ergonomics and"  p2="meeting you where you work" clas={false} />
             <ServiceCard pic={Icon2} title="national top 50 firms" p1="Just type what's on your mind"  p2="and we'll get you there" clas={false} />
             <ServiceCard pic={Icon3} title="digital marketing" p1="the quick fox jumps over the"  p2="lazy dog" clas={true} />
          </div>
          </div>
        </div>
    )
}

export default Hero

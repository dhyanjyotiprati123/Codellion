import React from 'react'
import PracticeCard from './PracticeCard'
import Card1 from "../assets/cover (1).png"
import Card2 from "../assets/cover (2).png"
import Card3 from "../assets/cover (3).png"
import Card4 from "../assets/cover (4).png"
import { motion } from 'framer-motion'
import UseScroll from '../Animation/UseScroll'
import { SectionAnimation } from '../Animation/Animation'

const Practice = () => {
    const [element, controls]=UseScroll()
    
    return (
        <motion.div className="practice" ref={element}
          variants={SectionAnimation}
          animate={controls}
          transition="transition"
        >
            <div className="container">
               <div className="section mt-lg">
                 <h2 className="section-heading">Practice Advice</h2>
                 <p className="section-para">Problems trying to resolve the conflict between <br />
                   the two major realms of Classical physics: Newtonian mechanics </p>
               </div>
               <motion.div className="practice-cards">
                  <PracticeCard 
                    title="A single source of truth"
                    desc="Newton thought that light was made up of particles, but then it was discovered "
                    pic={Card1}
                  />
                  <PracticeCard 
                    title="Fastest way to organize"
                    desc="“Quantum mechanics” is the description of the behaviour of matter"
                    pic={Card2}
                  />
                  <PracticeCard 
                    title="Fastest way to take action"
                    desc="They describe a universe consisting of bodies moving"
                    pic={Card3}
                  />
                  <PracticeCard 
                    title="Work better together"
                    desc="They finally obtained a consistent description of the behaviour "
                    pic={Card4}
                  />
               </motion.div>  
            </div>
        </motion.div>
    )
}

export default Practice

import React from 'react'
import Cover from "../assets/cover.jpg"
import Butn from "../assets/btn.svg"
import People from "../assets/people.svg"
import Clock from "../assets/clock.svg"
import { motion } from 'framer-motion'
import UseScroll from '../Animation/UseScroll'
import { SectionAnimation } from '../Animation/Animation'

const About = () => {
   const [element, controls]=UseScroll()
    return (
        <div className="about">
            <div className="container">
              <motion.div className="about-wrapper" ref={element}
                variants={SectionAnimation}
                animate={controls}
                transition="transition"
              >
                  <div className="section mt-lg">
                     <h1 className="section-heading">We are providing best 
                      <br /> business service.</h1>
                      <p className="section-para">Problems trying to resolve the conflict between the two major realms <br />
                       of Classical physics: Newtonian mechanics </p>
                  </div>

                  <div className="about-hero mt-lg">
                     <div className="about-left">
                        <img src={Cover} alt="" className="about-cover" />
                        <img src={Butn} alt="" className="about-play" />
                     </div>
                     <div className="about-right">
                       <div className="about-box">
                          <h2 className="about-heading">Most trusted in <br /> our field</h2>
                          <p className="para">Most calendars are designed for teams. Slate <br />is designed for freelancers who want a <br />simple way to plan their schedule.</p>
                       </div>

                       <div className="about-info">
                         <img src={People} alt="" className="about-icon" />
                         <div className="about-desc">
                           <h4 className="heading-4">the quick fox jumps over the lazy dog</h4>
                           <p className="para">Things on a very small scale ...</p>
                         </div>
                       </div>
                       <div className="about-info">
                         <img src={Clock} alt="" className="about-icon" />
                         <div className="about-desc">
                           <h4 className="heading-4">the quick fox jumps over the lazy dog</h4>
                           <p className="para">Things on a very small scale ...</p>
                         </div>
                       </div>
                     </div>
                  </div>
              </motion.div>
            </div>
        </div>
    )
}

export default About

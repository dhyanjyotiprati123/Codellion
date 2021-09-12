import React from 'react';
import Holi from "../assets/hooli.svg"
import Lyf from "../assets/lyf.svg"
import Leaf from "../assets/leaf.svg"
import Stripe from "../assets/stripe.svg"
import Aws from "../assets/aws.svg"
import Robo from "../assets/robot.svg"
import { motion } from 'framer-motion';
import UseScroll from '../Animation/UseScroll';
import { BoxAnimation } from '../Animation/Animation';

const Contact = () => {
    const [element, controls]=UseScroll()
    return (
        <div className="contact">
            <div className="container">
              <div className="contact-wrapper">
                <motion.div className="contact-logos" ref={element}
                  variants={BoxAnimation}
                  animate={controls}
                  transition={{type: "spring", damping: 10, staggerChildren: .3}}
                >
                  <motion.figure className="contact-figure"><img src={Holi} alt="" className="contact-logo" /></motion.figure>
                  <motion.figure className="contact-figure"><img src={Lyf} alt="" className="contact-logo" /></motion.figure>
                  <motion.figure className="contact-figure"><img src={Leaf} alt="" className="contact-logo" /></motion.figure>
                  <motion.figure className="contact-figure"><img src={Stripe} alt="" className="contact-logo" /></motion.figure>
                  <motion.figure className="contact-figure"><img src={Aws} alt="" className="contact-logo" /></motion.figure>
                  <motion.figure className="contact-figure"><img src={Robo} alt="" className="contact-logo" /></motion.figure>
                </motion.div>

                <div className="contact-form">
                   <div className="contact-box">
                     <h2 className="sub-heading text-white">Subscribe For Latest <br />
                     Newsletter</h2>
                     
                   </div>
                   <div className="contact-send">
                      <input type="text" className="contact-input" placeholder="your email here" />
                      <button className="btn-send">subscribe</button>
                   </div>
                </div>

                <div className="contact-consult">
                  <div className="contact-box">
                     <h2 className="sub-heading">Consulting Agency For Your Business</h2>
                     <p className="para">the quick fox jumps over the lazy dog</p>
                    
                  </div>
                  <div className="contact-box">
                    <button className="btn-send">Contact us</button>
                  </div>
                </div>


              </div>
            </div>
        </div>
    )
}

export default Contact

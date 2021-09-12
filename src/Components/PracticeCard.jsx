import React from 'react'
import { motion } from 'framer-motion'
import UseScroll from '../Animation/UseScroll'
import { CardAnimation } from '../Animation/Animation'

const PracticeCard = ({title , desc , pic}) => {
    const [element, controls]= UseScroll()
    return (
        <motion.div className="practicecard" ref={element}
          variants={CardAnimation}
          animate={controls}
          transition={{type: "spring", damping: 20}}
        >
            <div className="practicecard-box">
              <h3 className="heading-3">{title}</h3>
              <p className="para">{desc}</p>
            </div>
            <figure>
               <img src={pic} alt="" className="practicecard-pic" />
            </figure>
        </motion.div>
    )
}

export default PracticeCard

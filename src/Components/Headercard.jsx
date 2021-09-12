import React from 'react'
import { motion } from 'framer-motion'
import { HeaderAnimation } from '../Animation/Animation'


const Headercard = () => {
  
    return (
        <div className="headercard">
            <motion.h1 className="main-heading"
              variants={HeaderAnimation}
              animate="show"
              initial="hidden"
              transition="transition"
            >empower<br />your business</motion.h1>
            <p className="para">we know large objects will act,<br />but things on a small scale.</p>
            <div className="control">
              <button className="btn btn-primary">get quote now</button>
              <button className="btn btn-secondary">learn mores</button>
            </div>
        </div>
    )
}

export default Headercard

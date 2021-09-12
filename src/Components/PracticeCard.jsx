import React from 'react'

const PracticeCard = ({title , desc , pic}) => {
    return (
        <div className="practicecard">
            <div className="practicecard-box">
              <h3 className="heading-3">{title}</h3>
              <p className="para">{desc}</p>
            </div>
            <figure>
               <img src={pic} alt="" className="practicecard-pic" />
            </figure>
        </div>
    )
}

export default PracticeCard

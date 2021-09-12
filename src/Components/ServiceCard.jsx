import React from 'react'

const ServiceCard = ({pic, title, p1, p2, clas}) => {
    return (
        <div className={clas ? "servicecard card-blue": "servicecard"} >
            <figure>
              <img src={pic} alt="" className="sercicecard-pic" />
            </figure>
          
            <h2 className="sub-heading">{title}</h2>
            <p className={clas? "para text-white": "para"}>{p1}<br />{p2}</p>
        </div>
    )
}

export default ServiceCard

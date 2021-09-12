import React from 'react'
import {HiOutlinePhone} from "react-icons/hi"
import {GrLocation} from "react-icons/gr"
import {FiSend} from "react-icons/fi"
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from "react-icons/ai"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
               <div className="footer-wrapper">
                  <div className="footer-box">
                     <h3 className="heading-3">conpany info</h3>
                     <ul className="footer-list">
                        <li className="footer-item">about us</li>
                        <li className="footer-item">carrier</li>
                        <li className="footer-item">we are hiring</li>
                        <li className="footer-item">blogs</li>
                     </ul>
                  </div>
                  <div className="footer-box">
                    <h3 className="heading-3">Legal</h3>
                    <ul className="footer-list">
                       <li className="footer-item">about us</li>
                       <li className="footer-item">carrier</li>
                       <li className="footer-item">we are hiring</li>
                       <li className="footer-item">blogs</li>
                    </ul>
                  </div>
                  <div className="footer-box">
                  <h3 className="heading-3">features</h3>
                  <ul className="footer-list">
                     <li className="footer-item">business marketing</li>
                     <li className="footer-item">user analyst</li>
                     <li className="footer-item">live chat</li>
                     <li className="footer-item">unlimited support</li>
                  </ul>
                  </div>
                  <div className="footer-box">
                  <h3 className="heading-3">get in touch</h3>
                  <ul className="footer-list">
                     <li className="footer-item"><HiOutlinePhone style={{fontSize: "2.5rem", color: "#8ec2f2"}} /> (467) 899-090</li>
                     <li className="footer-item"><GrLocation style={{fontSize: "2.5rem", color: "#8ec2f2"}} /> 467 street wt.dc</li>
                     <li className="footer-item"><FiSend style={{fontSize: "2.5rem", color: "#8ec2f2"}} /> indicrop@gmail.com</li>
                  </ul>
                  </div>
               </div>

               
            </div>
            <div className="footer-copy">
               <div className="container">
                 <div className="footer-wrapper">
                  <p className="para">Made With Love By Figmaland All Right Reserved </p>
                  <div className="footer-media">
                     <AiFillFacebook style={{fontSize: "3rem", color:"blue"}} />
                     <AiOutlineInstagram style={{fontSize: "3rem", color:"red"}} />
                     <AiOutlineTwitter style={{fontSize: "3rem", color:"skyblue"}} />
                     <AiFillYoutube style={{fontSize: "3rem", color:"red"}} />
                  </div>
                  </div>
                </div> 
               </div>
        </div>
    )
}

export default Footer

import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                
                <div>
                    <p>6/5,5th Main Road,</p>
                    <p>Natesa Nagar,Virugambakkam,</p>
                    <p>Chennai 600092.</p>
                </div>
                </div>
           
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 9150882644</h4>
            </div>

            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>priyavenkat2208@gmail.com</h4>
            </div>
            </div>
            <div className="right">
                <h4> About Me</h4>
                <p>A passionate Web developer with expertise in UI/UX Designing. </p>
                    <div className="social">
                        <FaLinkedin 
                        size={20}
                        style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaGithub
                        size={20}
                        style={{color:"#fff", marginRight:"1rem"}}/>
            
                        <FaMailBulk 
                        size={20}
                        style={{color:"#fff", marginRight:"2rem"}}/>
                        </div>    
                        </div> 
                     </div>
                   </div>
  );
};

export default Footer
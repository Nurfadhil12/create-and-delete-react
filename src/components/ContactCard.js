import React from "react";
// import user from "../images/user.png";
import tania from "../images/tania.png";
import './ContactCard.css'

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return(
        <div className="konten">
            <div>
                <div>
                    <div style={{textAlign:"center"} }>
                        {/* <img className="User" src={user} alt="user"/> */}
                        <img className="User" src={tania} alt="user"/>
                    </div>
                    <div className="isi">
                        <div>
                            <div className="header">
                                {name}
                            </div>
                            <div>
                                {email}
                            </div>                        
                        </div>                      
                    </div>
                </div>
                <div className="trash" onClick={() => props.clickHander(id)}>
                    <i className="trash alternate outline icon" style={{color:"red", marginTop:"-25px"}}></i>
                </div>
            </div>
            
                               
        </div>
    );
} ;

export default ContactCard;
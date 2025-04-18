import React from "react"
import "../styles/Contact.css"


export default function ContactPage() {
return(
    <div className="Contact-Box">
        
            <img src="/con3.png" alt="" className="imgCon" />            
            <p className="telP">Volejte nebo pište na WhatsApp</p>
            <a href="+420774579768" className="telNum">+420 774 579 768</a>
        
            <img src="/con1.png" alt="" className="imgCon" />
            <p className="telP">Napište nám mail</p>
            <a href="mailto:woodooalda@gmail.com?subject=Poptávka&body=Dobrý den, rád bych..." className="telNum">woodooalda@gmail.com</a>
        
    </div>
)
}
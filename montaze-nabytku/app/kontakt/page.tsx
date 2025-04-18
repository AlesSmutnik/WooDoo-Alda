import React from "react"
import "../styles/Contact.css"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
return(
    <div className="Contact-Box">
        
            <Image src="/con3.png" alt="" className="imgCon" width={100} height={50}  />            
            <p className="telP">Volejte nebo pište na WhatsApp</p>
            <Link href="+420774579768" className="telNum">+420 774 579 768</Link>
        
            <Image src="/con1.png" alt="" className="imgCon" width={100} height={50}/>
            <p className="telP">Napište nám mail</p>
            <Link href="mailto:woodooalda@gmail.com?subject=Poptávka&body=Dobrý den, rád bych..." className="telNum">woodooalda@gmail.com</Link>
        
    </div>
)
}
import React, { useState } from "react";
import "../styles/contact.css";
import whatsappIcon from "../assets/images/icons8-whatsapp.svg"; 

const Contact = () => {
    const [copied, setCopied] = useState(false);
    
    // Información de contacto
    const contactInfo = {
        email: "luis149812@gmail.com",
        linkedin: "linkedin.com/in/luis-laurente/",
        phone: "+51 936 281 137",
        whatsapp: "https://api.whatsapp.com/send?phone=51936281137&text=Hola%20Luis,%20me%20interesa%20tu%20perfil."
    };
    
    // Función para copiar el correo al portapapeles
    const copyToClipboard = () => {
        navigator.clipboard.writeText(contactInfo.email);
        setCopied(true);
        
        // Resetear el estado después de 3 segundos
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    
    return (
        <div className="contact-container">
            <h2>Contacto</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <span className="contact-label">Correo:</span>
                    <div className="email-container">
                        <span className="contact-value">{contactInfo.email}</span>
                        <button 
                            className="copy-button" 
                            onClick={copyToClipboard}
                        >
                            {copied ? "¡Copiado!" : "Copiar"}
                        </button>
                    </div>
                </div>
                
                <div className="contact-item">
                    <span className="contact-label">Linkedin:</span>
                    <a 
                        href={contactInfo.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-value"
                    >
                        {contactInfo.linkedin}
                    </a>
                </div>
                
                <div className="contact-item">
                    <span className="contact-label">Teléfono:</span>
                    <div className="phone-container">
                        <span className="contact-value">{contactInfo.phone}</span>
                    <button>
                        <a href={contactInfo.whatsapp} className="msjWhatsapp">
                            <img src={whatsappIcon} alt="WhatsApp" />
                        </a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
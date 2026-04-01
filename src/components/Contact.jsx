
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
 const [showPopup, setShowPopup] = useState(false);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");    
 

  const handleSubmit = (e) => { 
    e.preventDefault();
    // skicka till backend sen
    setShowPopup(true);

    setTimeout(() => {      setShowPopup(false);
    }, 3000);
    
    //reset form
    setName("");
    setEmail("");
    setMessage("");

  };
  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div className="contact-container">
          <div className="contact-left">
            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out for opportunities, collaborations, or just
              to say hello. I'm always open to discussing new projects and
              creative ideas.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon blue">
                  <Mail size={28} />
                </div>
                <div>
                  <h4>Email</h4>
                  <span>rosolhuseinradhi@hotmail.com</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon green">
                  <Phone size={28} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <span>+46 762211311</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon purple">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4>Location</h4>
                  <span> Helsingborg, Sweden</span>
                </div>
              </div>
            </div>
          </div>
            {showPopup && (
    <div className="popup">
      <div className="popup-content">
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I'll get back to you soon.</p>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  ) }

          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input 
              type="text" 
              placeholder="Your name" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input 
              type="email" 
              placeholder="your.email@example.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />

              <label>Message</label>
              <textarea 
              placeholder="Your message..." 
              rows="7" 
              required 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button type="submit" className="send-btn">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
  );

}

export default Contact;

import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
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
                  <span>your.email@example.com</span>
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

          <div className="contact-form-card">
            <form className="contact-form">
              <label>Name</label>
              <input type="text" placeholder="Your name" />

              <label>Email</label>
              <input type="email" placeholder="your.email@example.com" />

              <label>Message</label>
              <textarea placeholder="Your message..." rows="7"></textarea>

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
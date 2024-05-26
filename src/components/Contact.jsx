import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import location from "../../Images/location.svg";
import email from "../../Images/email.svg";
import phone from "../../Images/phone.svg";
import useOnScreen from "./hooks/UseOnScreen.jsx";

// Initialize EmailJS with your User ID (public key)
emailjs.init("aoXWghmqh7vq9XXQx");

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState(null);
  const containerRef = useRef(null);
  const containerVisible = useOnScreen(containerRef, "0px 0px -300px 0px");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const sendMail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: `${firstNameRef.current.value} ${lastNameRef.current.value}`, // Match the placeholder in your template
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    emailjs.send("service_vftwtjy", "template_q5c3dnf", templateParams).then(
      (response) => {
        setStatusMessage({
          success: true,
          message: "Email sent successfully!",
        });
      },
      (error) => {
        setStatusMessage({
          success: false,
          message: "Failed to send email. Please try again later.",
        });
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__intro">
        <h4>CONTACT</h4>
        <h3>Get in Touch! 👇</h3>
      </div>

      <div className="container" ref={containerRef}>
        <div
          className={`container__inputs ${containerVisible ? "fade-in-left" : ""}`}
        >
          <form onSubmit={sendMail}>
            <div className="container__firstLast">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                ref={firstNameRef}
                required
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                ref={lastNameRef}
                required
              />
            </div>
            <div className="container__subjectMsg">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                ref={subjectRef}
                required
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                ref={messageRef}
                required
              ></textarea>
              <button type="submit">Send message</button>
            </div>
          </form>
          {statusMessage && (
            <div
              className={`status-message ${statusMessage.success ? "success" : "error"}`}
            >
              {statusMessage.message}
            </div>
          )}
        </div>
        <div
          className={`container__info ${containerVisible ? "fade-in-right" : ""}`}
        >
          <div>
            <h3>Contact info</h3>
          </div>
          <div className="container__info--svg">
            <div className="what">
              <li>
                <img
                  src={location}
                  alt="location svg"
                  className="contact--svg"
                />
              </li>
              <p>South West London, England</p>
            </div>
            <div className="what">
              <li>
                <img src={email} alt="email svg" className="contact--svg" />
              </li>
              <p>mrgeorgeflood@gmail.com</p>
            </div>
            <div className="what">
              <li>
                <img src={phone} alt="phone svg" className="contact--svg" />
              </li>
              <p>+44 7591419476</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

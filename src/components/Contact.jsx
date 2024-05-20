import { useRef } from "react";
import emailjs from "emailjs-com";
emailjs.init("E2B1U5osr1KuFpbk3");
import location from "../../Images/location.svg";
import email from "../../Images/email.svg";
import phone from "../../Images/phone.svg";
import useOnScreen from "./hooks/UseOnScreen.jsx";

const Contact = () => {
  const containerRef = useRef(null);
  const containerVisible = useOnScreen(containerRef, "0px 0px -300px 0px");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const sendMail = (e) => {
    e.preventDefault();

    let params = {
      name: firstNameRef.current.value + " " + lastNameRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .send("service_87zdrt4", "template_q5c3dnf", params)
      .then(function (res) {
        alert("success " + res.status);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__intro">
        <h4>CONTACT</h4>
        <h3>Get in Touch! 👇</h3>
      </div>

      <div className="container" ref={containerRef}>
        <div
          className={`container__inputs ${
            containerVisible ? "fade-in-left" : ""
          }`}
        >
          <form onSubmit={sendMail}>
            <div className="container__firstLast">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                ref={firstNameRef}
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                ref={lastNameRef}
              />
            </div>
            <div className="container__subjectMsg">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                ref={subjectRef}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                ref={messageRef}
              ></textarea>
              <button type="submit">Send message</button>
            </div>
          </form>
        </div>
        <div
          className={`container__info ${
            containerVisible ? "fade-in-right" : ""
          }`}
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

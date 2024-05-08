import { useState } from "react";
import "./Contact.scss";
import PageTransition from "../../components/PageTransition";
import { motion } from "framer-motion";

const Contact = ({ title }) => {
  // State for form data and submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const submittedName = formData.name;
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Show an alert after submission
    setSubmittedName(submittedName);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSubmittedName("");
    }, 5000);
  };

  return (
    <PageTransition>
      {/* Contactform */}
      <form className="contactForm" onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <div className="formGroup">
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="sendBtnWrapper">
          <button className="sendBtn" type="submit">
            Skicka
          </button>
        </div>

        {/* Animation for successmessage */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="successMessage"
          >
            Tack {submittedName}! Ditt meddelande har skickats 📨
          </motion.div>
        )}
      </form>

      {/* Contact socials */}
      <div className="contactMe">
        <a href="mailto:marinarosenstiel@hotmail.com">
          <img
            className="contactIcon"
            src="src/assets/logo-mail.svg"
            alt="My email"
          />
        </a>

        <a
          href="https://se.linkedin.com/in/marina-rosenstiel-875bb7152"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="contactIcon"
            src="src/assets/logo-linkedin.svg"
            alt="My linkedin"
          />
        </a>

        <a
          href="https://github.com/MaRos10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="contactIcon"
            src="src/assets/logo-github.svg"
            alt="My github"
          />
        </a>
      </div>
    </PageTransition>
  );
};

export default Contact;

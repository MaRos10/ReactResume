import { useState } from "react";
import "./Contact.scss";
import PageTransition from "../../components/PageTransition";

const Contact = ({ title }) => {
  // State for form data and submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  //Update form data on input change
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
        {submitted && (
          <div className="successMessage">
            Tack {submittedName}! Ditt meddelande har skickats 📨
          </div>
        )}
      </form>
      <div className="contactMe">
        <p className="logoTitle">
          <a href="mailto:marinarosenstiel@hotmail.com">
            <img
              className="contactIcon"
              src="src/assets/logo-mail.svg"
              alt="My email"
            />
            {/* Mail */}
          </a>
        </p>
        <p className="logoTitle">
          <a href="https://se.linkedin.com/in/marina-rosenstiel-875bb7152">
            <img
              className="contactIcon"
              src="src/assets/logo-linkedin.svg"
              alt="My linkedin"
            />
            {/* LinkedIn */}
          </a>
        </p>
        <p className="logoTitle">
          <a href="https://github.com/MaRos10">
            <img
              className="contactIcon"
              src="src/assets/logo-github.svg"
              alt="My github"
            />
            {/* GitHub */}
          </a>
        </p>
      </div>
    </PageTransition>
  );
};

export default Contact;

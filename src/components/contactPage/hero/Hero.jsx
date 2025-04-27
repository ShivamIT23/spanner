import React, { useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handlePhoneNumberChange = (event) => {
    const { name, value } = event.target;
    if (/^\d*$/.test(value)) {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const deploymentId =
      "AKfycbyCcgQHwBe996yyOr_8eA8ebn_Jy2TGADB4Nt_jq2Kcp_VvCDsEdIcwVQ0IcE1Gvvpi";
    const scriptURL = `https://script.google.com/macros/s/${deploymentId}/exec`;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      // Convert interest array to a comma-separated string
      if (Array.isArray(formData[key])) {
        data.append(key, formData[key].join(", "));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          requirements: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight:"100dvh"
    }} className={styles.container}>
      {!success && (
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <img
              src="/images/contactPage/contactHeroBg.jpeg"
              className={styles.bgImage}
              alt=""
            />
          </div>
          <div className={styles.mainContainer}>
            <h4 className={styles.header}>CONTACT US</h4>

            <form
              action=""
              className={styles.contactForm}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                id=""
                className={styles.inputField}
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                id=""
                placeholder="Email Address"
                className={styles.inputField}
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                id=""
                placeholder="Phone Number"
                className={styles.inputField}
                value={formData.phone}
                onChange={handlePhoneNumberChange}
              />
              <input
                type="text"
                name="requirements"
                id=""
                placeholder="Your Requirement"
                className={styles.inputField}
                value={formData.requirements}
                onChange={handleChange}
              />
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </div>

          {loading && (
            <div className={styles.loaderContainer}>
              <img
                src="/images/customLoading.gif"
                className={styles.loadingImage}
                alt=""
              />
            </div>
          )}
        </div>
      )}

      {success && (
        <div className={styles.successWrapper}>
          <img
            src="/images/success.jpg"
            className={styles.successImage}
            alt=""
          />
          <h3 className={styles.successText}>Submission Successful</h3>
          {/* <Link className={styles.homeLink}>Go to Homepage</Link> */}
        </div>
      )}
    </div>
  );
};

export default Hero;

import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Trink ein Kaffee & chatet mit mir</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:gottfugthinzu@gmail.com" className="p-text">
            gottfugthinzu@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+49 (0163) 8260784" className="p-text">
            +49 (0163) 8260784
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Ihre Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
              style={{ border: "2px solid var(--orangeCard)" }}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Ihre Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              style={{ border: "2px solid var(--orangeCard)" }}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Ihre Nachricht"
              value={message}
              name="message"
              onChange={handleChangeInput}
              style={{ border: "2px solid var(--purple)" }}
            />
          </div>
          <button type="button" className="btn-neon" onClick={handleSubmit}>
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            {!loading ? "Nachricht schicken" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <div className="head-text">Trink ein Kaffee & chatet mit mir</div>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'kontakt',
  'body',
);

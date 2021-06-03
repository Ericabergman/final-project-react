import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="title-contact">Contact</h1>
      <div className="container-contact">
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName" className="first-name">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              // value={}
              // onChange={}
            ></input>
          </div>

          <div className="form-control">
            <label htmlFor="lastName" className="last-name">
              Last Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              // value={}
              // onChange={}
            ></input>
          </div>

          <div className="form-control">
            <label htmlFor="email" className="email">
              E-mail:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              // value={}
              // onChange={}
            ></input>
          </div>

          <div className="form-control">
            <label className="message">Your Message:</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              // value={}
              // onChange={}
            ></input>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

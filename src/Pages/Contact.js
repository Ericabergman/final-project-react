import React from "react";

const Contact = () => {
  return (
    <>
      <h1>Contact page</h1>
      <div>
        <form>
          <div className="form-control">
            <label htmlFor="firstName">First name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              // value={}
              // onChange={}
            ></input>
          </div>

          <div className="form-control">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              // value={}
              // onChange={}
            ></input>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              // value={}
              // onChange={}
            ></input>
          </div>

          <div className="form-control">
            <label placeholder="message">Your Message:</label>
            <input
              type="text"
              id="email"
              name="email"
              // value={}
              // onChange={}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

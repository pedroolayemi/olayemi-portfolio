import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Type Your Message Here"></textarea>

            <button className="btn" type="submit">Submit</button>
        </form>
    </div>

  )
}

export default Form
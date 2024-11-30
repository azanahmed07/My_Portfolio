import React from 'react';
import { MdMail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact" className="pt-32 container px-4 md:px-0">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl"  data-aos="zoom-in-up">Get in Touch</h2>
          <p className="text-500 text-xl"  data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>

          {/* Email and Phone */}
          <div className="space-y-4">
            <div className="flex gap-3 items-center text-xl text-700" data-aos="zoom-in-up">
<MdMail size={35}/>           
              <span className="text-500">aazan7391@gmail.com</span>
            </div>
 
            <div className="flex gap-3 items-center text-xl text-700"  data-aos="zoom-in-up">
              <BsFillTelephoneForwardFill size={35}/>
              <span className="text-500">0315-2549045</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="space-y-8">
          <div className="flex flex-col gap-3"  data-aos="zoom-in-up">
            <label htmlFor="name" className="text-lg font-semibold">Name</label>
            <input
              type="text"
              id="name"
              className="h-[40px] bg-transparent border border-accent rounded-lg px-4 text-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-3"  data-aos="zoom-in-up">
            <label htmlFor="email" className="text-lg font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="h-[40px] bg-transparent border border-accent rounded-lg px-4 text-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col gap-3"  data-aos="zoom-in-up">
            <label htmlFor="phone" className="text-lg font-semibold">Phone</label>
            <input
              type="tel"
              id="phone"
              className="h-[40px] bg-transparent border border-accent rounded-lg px-4 text-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-3"  data-aos="zoom-in-up">
            <label htmlFor="message" className="text-lg font-semibold">Message</label>
            <textarea
              id="message"
              className="h-[120px] bg-transparent border border-accent rounded-lg px-4 py-2 text-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="mt-4 py-2 px-6 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"  data-aos="zoom-in-up">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

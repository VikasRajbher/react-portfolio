import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const submithandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iq3m7dh", // from EmailJS dashboard
        "template_coeeyf5", // from EmailJS template
        form.current,
        "XvAZ9VrT2z4M5i8_0", // from EmailJS dashboard
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, try again.");
        },
      );
  };

  return (
    <div id="contact" className="w-full px-[10%] py-10 min-h-1/2 scroll-mt-20">
      <h2 className="text-3xl font-semibold text-center">Contact Me </h2>
      <p className="mx-auto text-center mt-4">
        Feel free to reach out by filling the form below
      </p>

      <form
        ref={form}
        onSubmit={submithandler}
        className="max-w-2xl mx-auto my-12"
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-6 mb-10">
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          />
        </div>
        <textarea
          name="message"
          rows="4"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md bg-white mb-6"
        ></textarea>
        <button className="py-3 px-8 w-max flex items-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 active:scale-95">
          Submit now <i className="ri-arrow-right-up-long-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;

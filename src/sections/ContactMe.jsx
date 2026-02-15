import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [error, setError] = useState("");

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Block fake domains
  const forbiddenDomains = [
    "test.com",
    "example.com",
    "fake.com",
    "mailinator.com",
    "10minutemail.com",
    "tempmail.com",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isValidEmail = (email) => {
    if (!emailRegex.test(email)) return false;
    const domain = email.split("@")[1].toLowerCase();
    if (forbiddenDomains.includes(domain)) return false;
    return true;
  };

  const submithandler = (e) => {
    e.preventDefault();

    if (
      !formData.user_name.trim() ||
      !formData.user_email.trim() ||
      !formData.message.trim()
    ) {
      setError("All fields are required!");
      return;
    }

    if (!isValidEmail(formData.user_email)) {
      setError("Please enter a valid, real email address!");
      return;
    }

    setError("");

    emailjs
      .sendForm(
        "service_iq3m7dh",
        "template_coeeyf5",
        form.current,
        "XvAZ9VrT2z4M5i8_0",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.log(error.text);
        },
      );
  };

  return (
    <div
      id="contact"
      className="w-full px-[10%] py-16 scroll-mt-20 
      bg-white text-black 
      dark:bg-gray-900 dark:text-white 
      transition-colors duration-300"
    >
      <h2 className="text-3xl font-semibold text-center">Contact Me</h2>

      <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
        Feel free to reach out by filling the form below
      </p>

      <form
        ref={form}
        onSubmit={submithandler}
        className="max-w-2xl mx-auto mt-12"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            value={formData.user_name}
            onChange={handleChange}
            className="p-3 border border-gray-400 rounded-md outline-none
            bg-white text-black placeholder-gray-500
            dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
            focus:ring-2 focus:ring-black dark:focus:ring-white"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={formData.user_email}
            onChange={handleChange}
            className="p-3 border border-gray-400 rounded-md outline-none
            bg-white text-black placeholder-gray-500
            dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
            focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
        </div>

        <textarea
          name="message"
          rows="4"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 border border-gray-400 rounded-md outline-none mb-6
          bg-white text-black placeholder-gray-500
          dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
          focus:ring-2 focus:ring-black dark:focus:ring-white"
        ></textarea>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 rounded-full 
            bg-black text-white 
            dark:bg-white dark:text-black
            hover:opacity-90 duration-300 active:scale-95"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;

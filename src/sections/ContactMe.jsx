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

  // Regex for standard email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Block fake/disposable domains
  const forbiddenDomains = [
    "test.com",
    "example.com",
    "fake.com",
    "mailinator.com",
    "10minutemail.com",
    "tempmail.com",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValidEmail = (email) => {
    if (!emailRegex.test(email)) return false;
    const domain = email.split("@")[1].toLowerCase();
    if (forbiddenDomains.includes(domain)) return false;
    return true;
  };

  const submithandler = (e) => {
    e.preventDefault();

    // Check all fields
    if (
      !formData.user_name.trim() ||
      !formData.user_email.trim() ||
      !formData.message.trim()
    ) {
      setError("All fields are required!");
      return;
    }

    // Check email validity
    if (!isValidEmail(formData.user_email)) {
      setError("Please enter a valid, real email address!");
      return;
    }

    setError(""); // clear errors

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_iq3m7dh", // from EmailJS dashboard
        "template_coeeyf5", // from EmailJS template
        form.current,
        "XvAZ9VrT2z4M5i8_0", // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" }); // reset form
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.log(error.text);
        },
      );
  };

  return (
    <div id="contact" className="w-full px-[10%] py-10 min-h-1/2 scroll-mt-20">
      <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
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
            value={formData.user_name}
            onChange={handleChange}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={formData.user_email}
            onChange={handleChange}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          />
        </div>

        <textarea
          name="message"
          rows="4"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md bg-white mb-6"
        ></textarea>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 active:scale-95"
        >
          Submit now <i className="ri-arrow-right-up-long-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;

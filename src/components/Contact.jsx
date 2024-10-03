
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/akkgjqwa", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contacts"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h1>
          <p className="text-lg text-gray-700">
            I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg w-full max-w-lg px-8 py-10 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">Send Your Message</h2>

            <div className="flex flex-col mb-6">
              <label className="text-white font-semibold mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border-none py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-300"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && <span className="text-red-500 mt-1">This field is required</span>}
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-white font-semibold mb-2">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border-none py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-300"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-500 mt-1">This field is required</span>}
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-white font-semibold mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border-none py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-300"
                id="message"
                name="message"
                placeholder="Enter your message"
              ></textarea>
              {errors.message && <span className="text-red-500 mt-1">This field is required</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-white text-yellow-600 font-bold py-3 rounded-lg hover:bg-yellow-100 hover:text-yellow-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

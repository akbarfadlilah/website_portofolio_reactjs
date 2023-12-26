import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jrp0u4p",
        "template_8cbthb7",
        form.current,
        "2RENXstqcnbMy1r6t"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          HUBUNGI <span className="text-blue-500">SAYA</span>
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Masukan Email
            </label>
            <input
              type="email"
              name="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light hover:border-gray-700"
              placeholder="kontak@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="from_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nama
            </label>
            <input
              type="text"
              name="from_name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light hover:border-gray-700"
              placeholder="Masukan nama"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Pesan
            </label>
            <textarea
              name="message"
              rows="6"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Tinggalkan komentar..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="py-3 px-5 text-sm text-white font-medium rounded-lg bg-blue-500 hover:bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import profile from "../assets/profile.png";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      {/* leftside */}
      <div className="flex flex-wrap m-4">
        <div className="w-full self-center px-4 lg:w-1/2">
          <h1 className="text-2xl lg:text-4xl md:text-2xl sm:text-xl font-semibold">
            Hi! Saya{" "}
            <span className="text-blue-500 font-bold lg:text-4xl">
              M.Akbar Fadlilah
            </span>
          </h1>
          <h2 className="font-bold mt-4 text-bold text-4xl lg:text-6xl md:text-4xl">
            Front-end Developer dan
            <span className="text-blue-500"> Back-end Developer</span>
          </h2>
          <p className="mt-8 mb-10 leading-relaxed text-slate-600">
          Saya merupakan seorang fresh graduate yang memiliki skill dalam Web Developer. Mahir dalam Html, Css, Javascript, Java, PHP, Laravel dan React Js. Bergairah tentang Pemrograman.
          </p>

          <div className="flex items-center space-x-3">
            <h2 className="flex items-center hover:text-gray-700 text-lg font-medium py-3">
              Sosial media saya
              <AiOutlineArrowsAlt />
            </h2>
            <a
              href="https://instagram.com/akbarfadlilahh"
              className="hover:text-gray-500"
            >
              <AiFillInstagram size={25} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://wa.me/6285832606545"
              className="hover:text-gray-500"
            >
              <AiOutlineWhatsApp size={25} />
              <span className="sr-only">Whatsapp</span>
            </a>
            <a href="https://github.com/akbarfadlilah" className="hover:text-gray-500">
              <AiFillGithub size={25} />
              <span className="sr-only">Github</span>
            </a>
            <a href="https://linkedin.com/in/akbarfadlilah/" className="hover:text-gray-500">
              <FaLinkedinIn size={25} />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="relative mt-10 lg:mt-9 lg:right-0">
            <img
              src={profile}
              alt="latar"
              width={300}
              height={300}
              className="max-w-full lg:w-[55%] mx-auto rounded-2xl"
            />
            <span className="absolute md:scale-125 bottom-0 -z-10 left-1/2 -translate-x-1/2">
              <svg
                width={500}
                height={500}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#2196F3"
                  d="M43.2,-72.2C51.1,-62.1,49.2,-41.9,54.2,-26.1C59.3,-10.4,71.3,0.8,71.2,11.1C71.1,21.4,58.7,30.8,48.9,42.7C39.1,54.6,31.8,69,20.5,74.4C9.2,79.9,-6.1,76.4,-16.9,68.4C-27.8,60.3,-34.1,47.7,-43.5,37.4C-52.9,27.1,-65.3,19.1,-72.8,6.8C-80.3,-5.6,-83,-22.4,-76.3,-33.9C-69.6,-45.4,-53.4,-51.7,-39.1,-58.9C-24.8,-66.1,-12.4,-74.2,2.6,-78.3C17.7,-82.3,35.3,-82.4,43.2,-72.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

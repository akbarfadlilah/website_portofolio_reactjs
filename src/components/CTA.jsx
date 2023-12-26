import React, { useState } from "react";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import "../styles/CTA.css"; // Import the CSS file for CTA component

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      id="hobbies"
      className="mx-4 rounded-xl bg-gray-900 dark:text-white"
    >
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            LAIN TENTANG <span className="text-blue-500">SAYA</span>
          </h2>
          <p className="mb-4 text-slate-300">
          Saya adalah seorang profesional yang berkomitmen tinggi terhadap pengembangan diri dan pencapaian tujuan. 
          Dengan latar belakang pendidikan di bidang Teknik Informatika, saya telah mengembangkan keterampilan dan pengetahuan dalam pemrograman. 
          Selain itu, saya telah membangun aplikasi web maupun android yang beragam yang telah memungkinkan saya untuk menghadapi berbagai tantangan dan mencapai hasil yang signifikan.
          Saya dikenal sebagai seseorang yang memiliki kemampuan analitis yang kuat dan mampu mengambil keputusan yang tepat dalam situasi yang kompleks. 
          Saya juga memiliki kemampuan komunikasi yang baik, baik secara tertulis maupun lisan, yang memungkinkan saya untuk berinteraksi dengan beragam pihak, mulai dari rekan kerja hingga klien.
          </p>

          <p className="mb-4 text-slate-300">
          Selain itu, saya memiliki semangat yang tinggi untuk belajar dan terus mengembangkan diri. 
          Saya selalu mencari peluang untuk meningkatkan keterampilan dan pengetahuan saya melalui pelatihan, kursus, dan literatur terbaru. 
          Saya percaya bahwa investasi dalam pengembangan diri adalah kunci untuk mencapai keberhasilan jangka panjang.
          </p>

          <p className="mb-4 text-slate-300"> 
          Di luar pekerjaan, saya saat ini memiliki kegiatan sebagai pedagang telur, yang memberi saya kesempatan untuk pengembangan diri dalam bisnis ritel.
          </p>

          <p className="text-slate-300">
           Saya sangat antusias tentang peluang baru dan siap untuk berkontribusi dalam proyek-proyek yang menantang dan berarti.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <img
            src={h1}
            alt="hackerone logo"
            className={`mt-4 w-full lg:mt-10 rounded-lg ${
              isHovered ? "pulse" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={h2}
            alt="bugcrowd logo"
            className={`mt-4 w-full lg:mt-10 rounded-lg ${
              isHovered ? "pulse" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;

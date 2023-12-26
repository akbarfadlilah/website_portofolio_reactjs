import React from "react";
import kasir from "../assets/kasir.jpeg";
import p_android from "../assets/p_android.png";

const Portofolio = () => {
  return (
    <section id="porto">
      <div className="container my-36 px-6 mx-auto">
        <div className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-12 pb-4 text-center">
            PROYEK <span className="text-blue-500">SAYA</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <div className="mb-6 lg:mb-0 ">
              <div className="relative block bg-white rounded-lg shadow-lg shadow-gray-700">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img src={kasir} alt="tokoKue" className="w-full" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg mb-3">Aplikasi kasir</h5>
                  <p className="mb-4 pb-2">
                    Aplikasi Kasir berbasis web dirancang menggunakan front-end react js dan back-end Json. aplikasi kasir ini dibuat untuk memenuhin kebutuhan seperti toko, restoran dan caffe shop.
                  </p>
                  <a
                    href="https://givarihertz.com"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg shadow-gray-700">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img src={p_android} alt="p_android" className="w-full" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg mb-3">SPK Pemilihan Kualitas Telur</h5>
                  <p className="mb-4 pb-2">
                    Sistem pendukung keputusan pemilihan kualitas telur metode SAW berbasis Android.
                    Dirancang menggunakan bahasa pemrograman 
                    Java dengan database SQLite 
                  </p>
                  <a
                    href="https://tokokue.givarihertz.com"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;

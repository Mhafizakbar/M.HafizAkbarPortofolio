import { FaGraduationCap, FaLaptopCode, FaUserSecret, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section id="about" className=" pt-20 max-w-4xl mx-auto my-10 px-6 md:px-0 flex flex-col md:flex-row items-center">    
      <div className="mt-6 md:mt-0 md:ml-8 space-y-4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-lime-400">Tentang Saya</h2>
        <p className="text-black-300 text-sm md:text-base leading-relaxed">
          Saya mahasiswa Teknik Informatika di UIN Sultan Syarif Kasim Riau yang tertarik dalam 
          pengembangan <span className="text-blue-700">Frontend, Backend, dan Cyber Security</span>. 
          Saya selalu ingin belajar dan berkembang dalam dunia teknologi.
        </p>
        <div className="p-5 rounded-xl shadow-lg bg-blue-500">
          <h3 className="text-white text-sm md:text-lg font-semibold mb-3 flex items-center gap-2">
            <FaGraduationCap/>Riwayat Pendidikan</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-lime-500 text-white">
                  <th className="py-2 px-4 border">Tahun</th>
                  <th className="py-2 px-4 border">Sekolah</th>
                </tr>
              </thead>
              <tbody>
              <tr className="bg-gray-800 text-white hover:bg-gray-700 transition">
                  <td className="py-2 px-4 border">2023 - Sekarang</td>
                  <td className="py-2 px-4 border">UIN Sultan Syarif Kasim Riau</td>
                </tr>
                <tr className="bg-gray-800 text-white hover:bg-gray-700 transition">
                  <td className="py-2 px-4 border">2020 - 2023</td>
                  <td className="py-2 px-4 border">SMA Negeri 5 Pinggir</td>
                </tr>
                <tr className="bg-gray-700 text-white hover:bg-gray-600 transition">
                  <td className="py-2 px-4 border">2017 - 2020</td>
                  <td className="py-2 px-4 border">SMP Negeri 2 Mandau</td>
                </tr>
                <tr className="bg-gray-800 text-white hover:bg-gray-700 transition">
                  <td className="py-2 px-4 border">2011 - 2017</td>
                  <td className="py-2 px-4 border">SD Negeri 6 Mandau</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full">
          <div className="bg-gray-800 text-white p-5 rounded-xl shadow-lg border border-lime-400 transform hover:scale-105 transition duration-300">
            <h3 className="text-lime-400 font-semibold flex items-center gap-2">
              <FaLaptopCode /> Pengalaman
            </h3>
            <p className="text-sm">Saya memiliki pengalaman dalam dunia testing, terutama dalam pantesting menggunakan SQL Injection dan XSS.</p>
          </div>
          <div className="bg-gray-900 text-white p-5 rounded-xl shadow-lg border border-blue-400 transform hover:scale-105 transition duration-300">
            <h3 className="text-lime-400 font-semibold flex items-center gap-2">
              <FaUserSecret /> Hobi
            </h3>
            <p className="text-sm">Saya suka berolahraga seperti bermain sepak bola/futsal. Saya pernah menjuarai di berbagai ajang sepakbola dan futsal. selain di olahraga saya juga hobi ngulik website bareng temen saya</p>
          </div>
          <div className="bg-gray-800 text-white p-5 rounded-xl shadow-lg border border-purple-400 transform hover:scale-105 transition duration-300">
            <h3 className="text-lime-400 font-semibold flex items-center gap-2">
              <FaRocket /> Skill
            </h3>
            <p className="text-sm">Saya memiliki skil di bidang Cyber security. Belajar mengenai frontend dan juga backend</p>
          </div>
          <div className="bg-gray-900 text-white p-5 rounded-xl shadow-lg border border-red-400 transform hover:scale-105 transition duration-300">
            <h3 className="text-lime-400 font-semibold flex items-center gap-2">
              🎯 Cita-cita
            </h3>
            <p className="text-sm">Saya ingin menjadi seorang Fullstack Developer dan ahli dalam Cyber Security.</p>
          </div>
        </div>
        
     </div>

    </section>
  );
}

export default About;

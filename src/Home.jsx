function Home() {
    return (
      <div id="home" className=" pt-20 flex flex-col md:flex-row items-center justify-center min-h-screen max-w-4xl mx-auto px-2 md:px-0">
        <div className="flex justify-center md:justify-start">
          <img src="./src/img/img1.png" alt="profile" className="w-70 md:w-100 h-auto rounded-full shadow-lg border-b-4 border-indigo-500"/>
          </div>
        <div className="mt-6 md:mt-0 md:ml-10 space-y-6 text-center md:text-left">
          <div className="max-w-5xl mx-auto my-10 p-6 rounded-xl shadow-2xl bg-gray-900 text-white">
            <p className="text-white text-lg">Halloo🙌. Saya</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              M. <span className="text-lime-500">Hafiz</span> Akbar
            </h1>
            <p className="text-white text-sm md:text-lg">
              Merupakan seorang mahasiswa Teknik Informatika di Universitas Islam Negeri Sultan Syarif Kasim Riau.
            </p>
          </div>
          <div className="p-4 md:p-6 rounded-xl shadow-xl bg-blue-500">
            <h1 className="text-white font-semibold text-sm md:text-xl">
              FRONTEND DEV | BACKEND DEV | <span className="text-lime-300">CYBER SECURITY</span>
            </h1>
          </div>     
        </div>
      </div>
    );
  }

  
  
  export default Home;
  
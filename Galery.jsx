function Gallery() {
    return (
        <div id="gallery" className="mt-10">
                <h3 className="text-xl font-bold text-lime-400 text-center">Galeri Bermain Bola</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                        <img src="./src/img/img2.jpg" alt="Bermain Bola 1" className="rounded-xl border-4 border-lime-400 shadow-2xl hover:scale-110 transition duration-300 hover:border-blue-500" />
                        <img src="./src/img/img3.jpg" alt="Bermain Bola 2" className="rounded-xl border-4 border-blue-400 shadow-2xl hover:scale-110 transition duration-300 hover:border-red-500" />
                        <img src="./src/img/img5.jpg" alt="Bermain Bola 3" className="rounded-xl border-4 border-purple-400 shadow-2xl hover:scale-110 transition duration-300 hover:border-yellow-500" />
                        <img src="./src/img/img4.jpg" alt="Bermain Bola 4" className="rounded-xl border-4 border-red-400 shadow-2xl hover:scale-110 transition duration-300 hover:border-lime-500" />
                    </div>
        </div>
    )
  }
export default Gallery
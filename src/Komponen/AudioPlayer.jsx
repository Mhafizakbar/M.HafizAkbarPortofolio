function AudioPlayer() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-xl font-bold text-lime-400 mb-4 uppercase tracking-wide">🎵 Putar Musik 🎶
        <p className="ml-10">Sound fyz</p>
      </h2>

      <div className="w-full max-w-md bg-gray-900 p-4 rounded-lg shadow-lg border border-lime-500">
        <audio controls className="w-full rounded-md shadow-md">
          <source src="/audio/audio.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;

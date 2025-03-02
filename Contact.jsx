export default function ContactInfo() {
    return (
      <div id="contact" className="flex flex-col items-center justify-center bg-gray-100 p-1 pb-3">
        <div className="bg-white p-5 rounded shadow-md w-full max-w-xs text-center">
          <h2 className="text-lg font-bold mb-1">Contact me</h2>
          <p className="text-sm text-gray-600">Hubungi saya melalui informasi di bawah ini.</p>
          <div className="mt-1 space-y-0.5">
            <p className="text-sm font-medium">📧 Email: hafizakbar5707.com</p>
            <p className="text-sm font-medium">📞 Phone: +62 821 7088 3236</p>
            <p className="text-sm font-medium">🌍 Youtube: <a href="https://www.youtube.com/@hafizbaraq6940/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">klik di sini</a></p>
            <p className="text-sm font-medium">📍 Lokasi : Pekanbaru, Indonesia</p>
          </div>
        </div>
      </div>
    );
  }
  
import { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({ name: "", feedback: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-10">
      <div id="feedback" className="bg-white p-3 rounded shadow-md w-full max-w-xs">
        <h2 className="text-lg font-bold mb-1 text-center">Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Your Feedback"
            className="w-full p-2 border rounded"
            rows="3"
            required
          ></textarea>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
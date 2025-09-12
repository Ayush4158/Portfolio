"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileUpload } from "./ui/file-upload";

export default function Review() {
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null); 

  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      setFile(files[0]); 
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!brand || !message || !file) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", brand);
    formData.append("message", message);
    formData.append("file", file);

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Review submitted successfully!");
        setBrand("");
        setMessage("");
        setFile(null);
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section className=" bg-black text-white flex justify-center px-6 pt-10 pb-10">
      <div className="max-w-6xl w-full space-y-5">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent"
        >
          Review
        </motion.h2>

        {/* Form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900 rounded-2xl w-full p-8 shadow-lg"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Image Upload */}
              <div>
                <div className="w-full h-64 border border-dashed bg-neutral-950 border-neutral-700 rounded-lg flex items-center justify-center">
                  <FileUpload onChange={handleFileChange} />
                </div>
                {file && (
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Selected: {file.name}
                  </p>
                )}
              </div>

              {/* Right - Inputs */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="Brand name"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your review..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-[50%] py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
              >
                Submit Review
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

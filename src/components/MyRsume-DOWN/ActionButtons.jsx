"use client";

import { useState } from "react";
import { Download, Copy, Check, Eye, X } from "lucide-react";

export default function ActionButtons() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const email = "ahsan663399@email.com"; // 👈 apni email

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-20">
        {/* Resume Button */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg
          bg-gradient-to-r from-red-600 to-red-800
          hover:scale-105 transition shadow-lg shadow-red-600/40"
        >
          My Resume
          <Download size={18} />
        </button>

        {/* Copy Email */}
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 px-6 py-3 font-semibold rounded-lg
          border border-red-600 text-red-600
          hover:bg-red-600 hover:text-white transition"
        >
          {copied ? "Copied!" : "Copy Email"}
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center
    bg-black/80 backdrop-blur-md px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl
      bg-[#0b0b0b] border border-red-600/40
      rounded-2xl p-10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-red-500"
            >
              <X size={26} />
            </button>

            {/* Content */}
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              My Resume
            </h2>

            <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
              Choose how you would like to access my CV. You can view it in a new tab
              or download it directly to your device.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-6">
              <a
                href="/Muhammad-Ahsan-CV.pdf"
                target="_blank"
                className="flex items-center gap-2 px-8 py-4
          rounded-xl bg-red-600 text-white text-lg font-semibold
          hover:bg-red-700 transition"
              >
                View CV
                <Eye size={20} />
              </a>

              <a
                href="/Muhammad-Ahsan-CV.pdf"
                download
                className="flex items-center gap-2 px-8 py-4
          rounded-xl border border-red-600 text-red-600 text-lg font-semibold
          hover:bg-red-600 hover:text-white transition"
              >
                Download CV
                <Download size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

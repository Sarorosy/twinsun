import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const BookaCall = ({ isOpen = false, onClose = () => {} }) => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log('Book a Call submission:', data);
    // TODO: wire to API or state management
    handleClose();
  };

  if (!isOpen) return null;

  return (
      <motion.div
        ref={overlayRef}
        className="fixed cursor-auto inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-[9999] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{cursor : "auto !important"}}
        onClick={handleOverlayClick}
      >
        <motion.div
          ref={modalRef}
          className="bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="hidden md:flex flex-col justify-center p-8 bg-gradient-to-br from-sky-600 to-indigo-600 text-white">
            <h3 className="text-2xl font-extrabold mb-2">Let's Talk</h3>
            <p className="mb-4 opacity-90">Schedule a free 15-minute consultation. Tell us about your needs and we'll follow up to book a time.</p>
            <ul className="space-y-2 text-sm">
              <li>• Quick discovery call</li>
              <li>• Custom recommendations</li>
              <li>• No obligations</li>
            </ul>
          </div>

          <div className="p-6 relative">
            <button
              aria-label="Close"
              onClick={handleClose}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-2">Book a Call</h2>
            <p className="text-sm text-gray-500 mb-6">Complete the form and we'll reach out to arrange a convenient time.</p>

            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input name="name" required className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input name="email" type="email" required className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400" placeholder="you@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input name="phone" type="tel" required className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400" placeholder="+1 (555) 555-5555" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Service Looking For</label>
                  <select name="service" required className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400">
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo">SEO</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" required rows="4" className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400" placeholder="Tell us a bit about your project..."></textarea>
              </div>

              <div>
                <button type="submit" className="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition">Request a Call</button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    )

};

export default BookaCall;
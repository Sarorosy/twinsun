import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

const DEFAULT_FEATURES = [
  '1-Year Website Management',
  'Free Domain & Hostinger Hosting (1 Year)',
  'Unlimited Revisions Until Satisfaction',
  'Complete Delivery Within 6 Days',
  'Unlimited Pages',
  '1 Month Free SEO',
  'Premium Animations & Effects',
  'Payment Gateway Integration',
];

const BookaCall = ({ isOpen = false, onClose = () => {} }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;

    if (isOpen) window.addEventListener('keydown', onKey);
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
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
        className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          cursor: 'auto',
          background: 'color-mix(in srgb, var(--color-text-strong) 32%, transparent)',
          backdropFilter: 'blur(7px)',
        }}
        onClick={handleOverlayClick}
      >
        <motion.div
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto grid grid-cols-1 md:grid-cols-[1.05fr_1.2fr]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          style={{
            background: 'var(--color-surface-strong)',
            borderRadius: '1.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--color-shadow)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            aria-label="Close"
            onClick={handleClose}
            className="absolute right-4 top-4 z-20 rounded-full p-2 transition"
            style={{
              background: 'var(--color-surface-alt)',
              color: 'var(--color-text-strong)',
              border: '1px solid var(--color-border)',
            }}
          >
            <X size={18} />
          </button>

          <div
            className="order-2 md:order-1 flex flex-col justify-between p-7 md:p-8"
            style={{
              color: 'var(--color-accent-contrast)',
              background: 'linear-gradient(165deg, var(--color-accent-strong) 0%, var(--color-accent) 60%, color-mix(in srgb, var(--color-accent) 80%, #60a5fa 20%) 100%)',
            }}
          >
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.15em] uppercase"
                style={{
                  background: 'color-mix(in srgb, var(--color-accent-contrast) 20%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--color-accent-contrast) 30%, transparent)',
                }}
              >
                <Sparkles size={14} />
                Limited Offer
              </span>

              <h3 className="mt-5 text-3xl font-extrabold leading-tight">Growth Launch Package</h3>
              <p className="mt-3 text-sm md:text-base opacity-90 leading-relaxed">
                Pick this offer during your discovery call and get a complete growth setup at a discounted launch rate.
              </p>

              <div
                className="mt-6 rounded-2xl p-4"
                style={{
                  background: 'color-mix(in srgb, var(--color-accent-contrast) 14%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--color-accent-contrast) 26%, transparent)',
                }}
              >
                <p className="text-xs uppercase tracking-[0.18em] opacity-80">Package Includes</p>
                <ul className="mt-3 space-y-2 text-sm md:text-[0.95rem]">
                  {DEFAULT_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="mt-6 rounded-xl p-4"
              style={{
                background: 'color-mix(in srgb, var(--color-accent-contrast) 10%, transparent)',
                border: '1px solid color-mix(in srgb, var(--color-accent-contrast) 24%, transparent)',
              }}
            >
              <p className="text-xs uppercase tracking-[0.2em] opacity-85">Today&apos;s Price</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold">Rs. 15,000</span>
              </div>
              <p className="mt-1 text-xs opacity-85">Complete package with all listed features.</p>
            </div>
          </div>

          <div className="order-1 md:order-2 p-6 pt-16 md:pt-8 md:p-8" style={{ background: 'var(--color-surface-strong)' }}>

            <h2 className="mb-2 text-2xl font-bold" style={{ color: 'var(--color-text-strong)' }}>Book a Call</h2>
            <p className="mb-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              Complete the form and we&apos;ll reach out to arrange a convenient time.
            </p>

            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <input type="hidden" name="package" value="Growth Launch Package" />
              <input type="hidden" name="price" value="15000" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium" style={{ color: 'var(--color-text)' }}>Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg px-3 py-2.5 outline-none transition"
                    style={{
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface-alt)',
                      color: 'var(--color-text-strong)',
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium" style={{ color: 'var(--color-text)' }}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-lg px-3 py-2.5 outline-none transition"
                    style={{
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface-alt)',
                      color: 'var(--color-text-strong)',
                    }}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium" style={{ color: 'var(--color-text)' }}>Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="mt-1 block w-full rounded-lg px-3 py-2.5 outline-none transition"
                    style={{
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface-alt)',
                      color: 'var(--color-text-strong)',
                    }}
                    placeholder="+91 999999 9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium" style={{ color: 'var(--color-text)' }}>Service Looking For</label>
                  <select
                    name="service"
                    required
                    className="mt-1 block w-full rounded-lg px-3 py-2.5 outline-none transition"
                    style={{
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface-alt)',
                      color: 'var(--color-text-strong)',
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo">SEO</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium" style={{ color: 'var(--color-text)' }}>Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="mt-1 block w-full rounded-lg px-3 py-2.5 outline-none transition"
                  style={{
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface-alt)',
                    color: 'var(--color-text-strong)',
                  }}
                  placeholder="Tell us a bit about your project..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg px-4 py-2.5 font-semibold transition"
                  style={{
                    background: 'linear-gradient(120deg, var(--color-accent-strong), var(--color-accent))',
                    color: 'var(--color-accent-contrast)',
                    boxShadow: '0 10px 30px color-mix(in srgb, var(--color-accent) 30%, transparent)',
                  }}
                >
                  Request a Call
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    )

};

export default BookaCall;
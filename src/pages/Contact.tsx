import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="bg-white/60 border-b border-[#efe4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-champagne-700">We're Here to Help</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#5C4D47] mt-3">Contact Us</h1>
          <p className="text-[#8a776d] mt-4 max-w-xl mx-auto">
            Questions about your order or our formulas? Our team is glad to help.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-blush-50 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-blush-500" />
            </div>
            <div>
              <div className="font-serif text-lg text-[#5C4D47]">Email</div>
              <a href={`mailto:${site.email}`} className="text-[#6b5a52] hover:text-blush-500">{site.email}</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-blush-50 flex items-center justify-center shrink-0">
              <Phone size={18} className="text-blush-500" />
            </div>
            <div>
              <div className="font-serif text-lg text-[#5C4D47]">Phone</div>
              <a href={`tel:${site.phoneHref}`} className="text-[#6b5a52] hover:text-blush-500">{site.phone}</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-blush-50 flex items-center justify-center shrink-0">
              <Clock size={18} className="text-blush-500" />
            </div>
            <div>
              <div className="font-serif text-lg text-[#5C4D47]">Customer Service Hours</div>
              <p className="text-[#6b5a52]">Monday–Friday, 9:00am–5:00pm CST</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-blush-50 flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-blush-500" />
            </div>
            <div>
              <div className="font-serif text-lg text-[#5C4D47]">{site.company}</div>
              <p className="text-[#6b5a52]">{site.llcAddress}</p>
              <p className="text-[#6b5a52] mt-2">
                <span className="text-[#5C4D47]">Returns:</span> {site.returnAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-[#f1e6df] p-7">
          {sent ? (
            <div className="text-center py-12">
              <Check size={40} className="text-blush-500 mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-[#5C4D47]">Thank you</h2>
              <p className="text-[#8a776d] mt-2">We've received your message and will reply within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#6b5a52] mb-2">Name</label>
                <input required className="w-full border border-[#e4d4cb] rounded-lg px-4 py-3 bg-cream focus:outline-none focus:border-blush-400" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#6b5a52] mb-2">Email</label>
                <input required type="email" className="w-full border border-[#e4d4cb] rounded-lg px-4 py-3 bg-cream focus:outline-none focus:border-blush-400" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[#6b5a52] mb-2">Message</label>
                <textarea required rows={5} className="w-full border border-[#e4d4cb] rounded-lg px-4 py-3 bg-cream focus:outline-none focus:border-blush-400" />
              </div>
              <button
                type="submit"
                className="w-full bg-blush-500 text-white text-sm uppercase tracking-[0.22em] py-4 rounded-full hover:bg-blush-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

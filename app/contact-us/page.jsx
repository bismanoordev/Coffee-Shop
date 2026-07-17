"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["123 Coffee Street", "Gulberg III, Lahore, Pakistan"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+92 300 1234567", "+92 42 35678900"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@coffee.com", "support@coffee.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Mon – Fri: 8am – 10pm", "Sat – Sun: 9am – 11pm"],
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main className="bg-[#F1F0EE] min-h-screen">
        {/* Page Hero */}
        <section className="bg-[#30261C] text-center px-4 pt-32 pb-16 sm:pt-36 sm:pb-20">
          <p className="text-[#be8b63] tracking-widest text-xs sm:text-sm font-semibold uppercase">
            Get in touch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-gray-100 mt-3">
            Contact Us
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Have a question, feedback, or just want to say hello? We&apos;d love
            to hear from you.
          </p>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Contact info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2b2015]">
                Let&apos;s talk coffee
              </h2>
              <p className="text-[#3a2c1e] text-sm sm:text-base mt-3 leading-relaxed">
                Reach out through any of the channels below, or fill in the form
                and our team will get back to you within 24 hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#30261C] flex items-center justify-center text-[#be8b63]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-[#2b2015] mt-4">
                        {item.title}
                      </h3>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="text-[#3a2c1e] text-sm mt-1 leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-4xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#2b2015]">
                    Message Sent!
                  </h3>
                  <p className="text-[#3a2c1e] text-sm max-w-sm">
                    Thank you {form.name || "there"}, we&apos;ve received your
                    message and will reply to{" "}
                    <span className="font-semibold">
                      {form.email || "your email"}
                    </span>{" "}
                    soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-2 bg-[#30261C] text-white px-6 py-2.5 rounded-lg hover:bg-[#4a2a1c] transition"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-[#2b2015]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="px-4 py-2.5 rounded-lg bg-[#F1F0EE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30261C]/40 text-sm text-[#2b2015] placeholder:text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-[#2b2015]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="px-4 py-2.5 rounded-lg bg-[#F1F0EE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30261C]/40 text-sm text-[#2b2015] placeholder:text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-[#2b2015]">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="px-4 py-2.5 rounded-lg bg-[#F1F0EE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30261C]/40 text-sm text-[#2b2015] placeholder:text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-[#2b2015]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message..."
                      className="px-4 py-2.5 rounded-lg bg-[#F1F0EE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30261C]/40 text-sm text-[#2b2015] placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#30261C] text-white font-semibold py-3 rounded-lg hover:bg-[#4a2a1c] transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

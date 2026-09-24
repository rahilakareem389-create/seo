import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        data = { message: "Unexpected response from the server" };
      }

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Unable to send message.");
    }
  };

  return (
    <section id="contact" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-orange-500">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready To Grow Your Website?
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Tell us about your website and your goals. Our team will
            get back to you.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <span>wordpressrahila@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              <span>+92 321 7812265</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-gray-300">
                {status}
              </p>
            )}
          </div>
        </form>

      </div>
    </section>
  );
}

export default Contact;
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-black">

      {/* Footer Main */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <a
            href="#home"
            className="text-2xl font-bold"
          >
            Rank<span className="text-orange-500">Boost</span>
          </a>

          <p className="mt-5 max-w-sm leading-7 text-gray-400">
            We help businesses improve their search rankings,
            increase organic traffic, and grow their online presence.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">

            <a
              href="https://www.facebook.com/profile.php?id=61563926198846"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-bold text-gray-400 hover:border-orange-500 hover:text-orange-500"
            >
              f
            </a>

        

            <a
              href="www.linkedin.com/in/rahila-kareem-06b76a31a"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-bold text-gray-400 hover:border-orange-500 hover:text-orange-500"
            >
              in
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-bold text-gray-400 hover:border-orange-500 hover:text-orange-500"
            >
              X
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-orange-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-orange-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="text-gray-400 hover:text-orange-500"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-orange-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Services
          </h3>

          <ul className="mt-5 space-y-3">
            <li className="text-gray-400">
              Keyword Research
            </li>

            <li className="text-gray-400">
              Technical SEO
            </li>

            <li className="text-gray-400">
              On-Page SEO
            </li>

            <li className="text-gray-400">
              Link Building
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Contact Us
          </h3>

          <div className="mt-5 space-y-4">

            <div className="flex gap-3">
              <Mail
                size={20}
                className="mt-1 shrink-0 text-orange-500"
              />

              <span className="text-gray-400">
                wordpressrahila@gmail.com
              </span>
            </div>

            <div className="flex gap-3">
              <Phone
                size={20}
                className="mt-1 shrink-0 text-orange-500"
              />

              <span className="text-gray-400">
                +92 321 7812265
              </span>
            </div>

            <div className="flex gap-3">
              <MapPin
                size={20}
                className="mt-1 shrink-0 text-orange-500"
              />

              <span className="text-gray-400">
                Lahore, Pakistan
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RankBoost. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-500">

            <a
              href="#"
              className="hover:text-orange-500"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-orange-500"
            >
              Terms & Conditions
            </a>

            <button
              onClick={handleScrollTop}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
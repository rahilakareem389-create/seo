import { CheckCircle } from "lucide-react";

function About() {
  const points = [
    "Data-driven SEO strategies",
    "Experienced SEO professionals",
    "Transparent monthly reporting",
    "Long-term organic growth",
  ];

  return (
    <section id="about" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-orange-500">
            About Us
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            We Turn Search Traffic Into Business Growth
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            RankBoost is an SEO agency focused on helping businesses build
            a stronger online presence. We combine technical SEO,
            keyword research, content strategy, and link building to
            improve search visibility.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={22} />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-4xl font-bold text-orange-500">150+</h3>
              <p className="mt-2 text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">90+</h3>
              <p className="mt-2 text-gray-400">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">5+</h3>
              <p className="mt-2 text-gray-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">24/7</h3>
              <p className="mt-2 text-gray-400">Support</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
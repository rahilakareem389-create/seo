import {
  Search,
  Settings,
  Link,
  FileText,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: Search,
      title: "Keyword Research",
      description:
        "Find the right keywords that your potential customers are searching for.",
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description:
        "Improve website structure, speed, indexing, and technical performance.",
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description:
        "Optimize your website content, headings, metadata, and internal links.",
    },
    {
      icon: Link,
      title: "Link Building",
      description:
        "Build relevant and quality backlinks to improve website authority.",
    },
  ];

  return (
    <section id="services" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-orange-500">
            Our Services
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Everything You Need To Grow Online
          </h2>

          <p className="mt-5 text-gray-400">
            Simple, effective SEO solutions designed to increase your
            online visibility.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-2 hover:border-orange-500/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;
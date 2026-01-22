import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Globe } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gouri Rajkumar Bagle</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          UI/UX Designer & Web Developer — Dubai, UAE
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" className="rounded-2xl">Download CV</Button>
          <a href="mailto:gourichincholi@gmail.com">
            <Button variant="outline" className="rounded-2xl flex gap-2">
              <Mail size={18} /> Email
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/gouri-chincholi" target="_blank">
            <Button variant="outline" className="rounded-2xl flex gap-2">
              <Linkedin size={18} /> LinkedIn
            </Button>
          </a>
          <a href="https://gourichincholi.github.io/ArtAuct-Portfolio/" target="_blank">
            <Button variant="outline" className="rounded-2xl flex gap-2">
              <Globe size={18} /> Live Work
            </Button>
          </a>
        </div>
      </motion.section>

      {/* About */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 leading-relaxed text-gray-700">
            UI/UX Designer & Web Developer experienced in designing and developing responsive digital products and
            websites using Figma, Webflow, WordPress, and Squarespace. Skilled in UX research, prototyping,
            wireframing, design systems, and usability testing. Hands-on product design experience across
            healthcare, marketplaces, tourism, and service-based industries.
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="grid gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">UI/UX Designer & Web Developer — Yuna Marketing, Dubai</h3>
              <p className="text-sm text-gray-500 mb-3">Oct 2025 – Present</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Designed and developed responsive marketing and business websites for real estate and tourism clients.</li>
                <li>Built <span className="font-medium">Santura – Sea &amp; Sand Tourism</span> using Webflow, integrating booking &amp; calendar widgets (live: https://santura.ae/).</li>
                <li>Revamped <span className="font-medium">Yuna Marketing</span> website using Squarespace to modernize brand presence and improve navigation (live: https://www.yunamarketing.ae/).</li>
                <li>Contributed to UI architecture, layout, and content structuring for <span className="font-medium">Khisht Real Estate</span> on WordPress (live: https://khishtrealestate.ae/).</li>
                <li>Collaborated with cross-functional teams on user flows, onboarding and visual improvements.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">UI/UX Designer — Studio Nova UX</h3>
              <p className="text-sm text-gray-500 mb-3">Aug 2024 – Jun 2025</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Designed digital experiences across healthcare, retail, art, and event rentals.</li>
                <li>Led UX research, UI design, testing, and responsive prototyping in Figma.</li>
                <li>Designed <span className="font-medium">ArtAuct</span> auction flows (live bidding, artist discovery, checkout) with usability testing &amp; iterations.</li>
                <li>Improved renter journeys for <span className="font-medium">Fair Weather</span> pavilion/event rentals by restructuring navigation and content.</li>
                <li>Designed <span className="font-medium">Medi Match Connect</span> appointment booking flows with accessibility and low cognitive load focus.</li>
                <li>Built <span className="font-medium">Go Fresh</span> inventory dashboard with alerts, categorization, batch edits &amp; low-stock reminders.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Assistant System Engineer – Trainee — TCS (Tata Consultancy Services)</h3>
              <p className="text-sm text-gray-500 mb-3">Jun 2024 – Jul 2024</p>
              <p className="text-gray-700">Application Development &amp; Maintenance projects.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <p className="text-gray-600 mb-6">
          A snapshot of product and website work across marketplaces, healthcare, tourism and service businesses.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Santura — Sea & Sand Tourism (Webflow)",
              desc: "Built the website from scratch in Webflow with custom components and booking/calendar widget integration.",
              meta: "Webflow • CMS • Interactions",
              linkLabel: "Live Site",
              link: "https://santura.ae/",
            },
            {
              title: "Yuna Marketing — Website Revamp (Squarespace)",
              desc: "Modernized brand presence and improved navigation and structure for better clarity and conversion.",
              meta: "Squarespace • IA • Responsive",
              linkLabel: "Live Site",
              link: "https://www.yunamarketing.ae/",
            },
            {
              title: "Khisht Real Estate — UI Architecture (WordPress)",
              desc: "Contributed to UI architecture, layout decisions, and content structuring for a real estate website.",
              meta: "WordPress • Layout • Content",
              linkLabel: "Live Site",
              link: "https://khishtrealestate.ae/",
            },
            {
              title: "ArtAuct — Online Art Auction Platform",
              desc: "Designed end-to-end auction flows: live bidding, artist discovery, and checkout. Iterated through usability testing.",
              meta: "UX Research • UI Design • Prototyping",
              linkLabel: "Case study",
              link: "https://docs.google.com/presentation/d/11hjq5gfkSJ8NDWJLT8Tla99kO71NILCh/edit?slide=id.p1#slide=id.p1",
            },
            {
              title: "Medi Match Connect — Healthcare Appointment App",
              desc: "Designed flows for appointment booking, doctor profiles and privacy handling with accessibility-first approach.",
              meta: "Mobile UX • Accessibility • Flows",
              linkLabel: "Case study",
              link: "https://docs.google.com/presentation/d/1Zd7Bjqo-i9HbpZlWwPQjHKTe5kzmT8xj/edit?slide=id.p1#slide=id.p1",
            },
            {
              title: "Go Fresh — Inventory Management Dashboard",
              desc: "Designed a responsive dashboard for real-time inventory tracking with alerts, batch edits and categorization.",
              meta: "Dashboards • Responsive UI • Alerts",
              linkLabel: "Case study",
              link: "https://docs.google.com/presentation/d/1Zd7Bjqo-i9HbpZlWwPQjHKTe5kzmT8xj/edit?slide=id.p1#slide=id.p1",
            },
            {
              title: "Fair Weather — Pavilion/Event Rentals",
              desc: "Improved booking navigation and content structure to enhance search visibility and renter journeys.",
              meta: "IA • UX Writing • Navigation",
              linkLabel: "Case study",
              link: "https://docs.google.com/presentation/d/19n4u0xO98vMQW2JPxQ8Hrt8hbk8ZtHOa/edit?slide=id.p1#slide=id.p1",
            },
          ].map((p, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline" className="rounded-xl">{p.linkLabel ?? "View"}</Button>
                    </a>
                  ) : null}
                </div>
                <p className="text-gray-700 text-sm mt-2">{p.desc}</p>
                {p.meta ? (
                  <p className="text-gray-500 text-xs mt-3">{p.meta}</p>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            "Figma, Adobe XD, Sketch",
            "Webflow, WordPress, Squarespace",
            "HTML & CSS Fundamentals",
            "UX Research & Usability Testing",
            "Design Systems & Prototyping",
            "SEO & Performance Optimization",
          ].map((s, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-4 text-center">{s}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="grid gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">BE — Electronics &amp; Communication Engineering</h3>
                <span className="text-sm text-gray-500">2019 – 2023</span>
              </div>
              <p className="text-gray-700">BLDEA’s V.P. Dr. P.G. Halakatti College of Engineering &amp; Technology, Vijayapura, Karnataka</p>
              <p className="text-sm text-gray-500 mt-1">CGPA: 8.41</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">PUC — Science</h3>
                <span className="text-sm text-gray-500">2017 – 2019</span>
              </div>
              <p className="text-gray-700">Tungal PU Science College, Vijayapura, Karnataka</p>
              <p className="text-sm text-gray-500 mt-1">80%</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">SSLC</h3>
                <span className="text-sm text-gray-500">2017</span>
              </div>
              <p className="text-gray-700">Vishwabharati Model High School, Vijayapura, Karnataka</p>
              <p className="text-sm text-gray-500 mt-1">93%</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="text-gray-700 mb-6">Open to UI/UX Designer and Web Designer roles in Dubai or remote.</p>
        <a href="mailto:gourichincholi@gmail.com">
          <Button className="rounded-2xl px-8 py-5">Contact Me</Button>
        </a>
      </section>
    </div>
  );
}

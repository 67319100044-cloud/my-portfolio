const projects = [
  { id: 1, title: "Quote Generator", tag: "ดูโปรเจกต์", href: "https://www.canva.com/quote-generator/" },
  { id: 2, title: "BMI Calculator", tag: "ดูโปรเจกต์", href: "https://www.calculator.net/bmi-calculator.html" },
];

function ProjectCard({ title, tag, href }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <a
        href={href ?? "#"}
        className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        {tag}
      </a>
    </div>
  );
}

export default function Projectscard() {
  return (
    <section id="projects" className="py-4 px-8">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tag={project.tag}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}

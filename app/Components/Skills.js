const skills = ["JavaScript", "Next.js", "Tailwind"];

function Section({ title, children }) {
  return (
    <section className="py-4 px-8">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function Skills() {
  return (
    <Section title="ทักษะของฉัน">
      <div className="flex flex-col gap-1">
        {skills.map((skill) => (
          <div key={skill} className="rounded-lg bg-slate-100 px-4 py-2 text-sm">
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}

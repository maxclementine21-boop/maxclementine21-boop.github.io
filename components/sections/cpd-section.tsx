import { Badge } from "@/components/ui/badge"

export function CpdSection() {
  const competencies = [
    {
      code: "A1 / A2",
      title: "Engineering knowledge and understanding",
      level: "Working",
      evidence:
        "Applied robotics, software engineering and machine learning knowledge in coursework and project tasks, including ROS-based navigation, sensor processing and technical evaluation.",
    },
    {
      code: "B1 / B2 / B3",
      title: "Design, development and problem solving",
      level: "Working",
      evidence:
        "Developed and tested technical solutions through simulation, experiments and iterative improvement. Examples include path planning, control tuning, perception pipelines and sensor evaluation.",
    },
    {
      code: "C1 / C2",
      title: "Responsibility, management and planning",
      level: "Awareness to Working",
      evidence:
        "Contributed to project planning, task delivery and evidence preparation. Future development will focus on stronger project coordination and risk management practice.",
    },
    {
      code: "D1 / D2 / D3",
      title: "Communication and interpersonal skills",
      level: "Working",
      evidence:
        "Prepared technical explanations, demonstrations and visual evidence for different audiences, including team members, technical markers and non-technical viewers.",
    },
    {
      code: "E1 / E2 / E3",
      title: "Professional commitment",
      level: "Awareness",
      evidence:
        "Recognised the importance of safety, reliability, ethical behaviour and continuous professional development in engineering practice.",
    },
  ]

  return (
    <section id="cpd" className="space-y-6 pb-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">CPD and UK-SPEC Reflection</h2>
        <p className="text-muted-foreground leading-relaxed">
          This section links my portfolio evidence to UK-SPEC competency areas. It also helps identify future professional development priorities.
        </p>
      </div>

      <div className="grid gap-4">
        {competencies.map((item) => (
          <div key={item.code} className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <p className="text-sm text-primary font-medium">{item.code}</p>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <Badge variant="outline" className="w-fit">{item.level}</Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.evidence}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

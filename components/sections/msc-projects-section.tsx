import { Github } from "lucide-react"
import Link from "next/link"

export function MscProjectsSection() {
  const projectCategories = [
    {
      title: "Autonomous Mobile Robots",
      projects: [
        {
          name: "Path Planning",
          description: "Implementation of path planning algorithms for autonomous mobile robots, including A*, RRT, and Dijkstra algorithms.",
          github: "https://github.com/maxclementine21-boop/path-planning",
        },
        {
          name: "Feedback Control",
          description: "Feedback control systems for robot navigation, including PID controllers and state-space control methods.",
          github: "https://github.com/maxclementine21-boop/feedback-control",
        },
      ],
    },
  ]

  return (
    <section id="msc-projects" className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">MSC Projects</h2>
      
      {projectCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {category.projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-medium text-foreground">{project.name}</h4>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

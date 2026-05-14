import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ExternalLink } from "lucide-react"

export function RoboticsProjectSection() {
  const workPackages = [
    {
      title: "Robotic Systems Design Project",
      status: "MSc project evidence",
      description:
        "A full-system robotics project covering navigation, perception, testing, evaluation and technical demonstration. The work connects software development with practical engineering evidence.",
      evidence: ["System requirements", "Technical demonstration", "Testing evidence", "Team-based engineering workflow"],
    },
    {
      title: "Navigation and Simulation",
      status: "ROS / simulation",
      description:
        "Implemented and tested autonomous navigation behaviours in simulation environments. This included path planning, controller tuning, goal reaching tests and analysis of performance under different conditions.",
      evidence: ["ROS2", "Gazebo", "Navigation testing", "Performance analysis"],
    },
    {
      title: "Perception and Object Detection",
      status: "Computer vision",
      description:
        "Developed object detection and depth-based localisation workflows using camera data. The objective was to support robotic decision-making with reliable target recognition and position estimation.",
      evidence: ["YOLO", "Depth camera", "Object detection", "3D position estimation"],
    },
    {
      title: "Sensor Evaluation and Data Analysis",
      status: "Experimental work",
      description:
        "Designed practical tests to evaluate sensor behaviour, including measurement accuracy, repeatability and limitations. Results were analysed using plots and clear engineering conclusions.",
      evidence: ["LIDAR testing", "Data plots", "Error analysis", "Technical reporting"],
    },
  ]

  return (
    <section id="robotics-project" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">MSc Robotics Project Evidence</h2>
        <p className="text-muted-foreground leading-relaxed">
          This section summarises selected evidence from my MSc Robotics work. It is intended to support my CPD reflection and show how my technical skills have developed during the programme.
        </p>
      </div>

      <div className="grid gap-5">
        {workPackages.map((item, index) => (
          <article key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              <Badge variant="secondary" className="w-fit shrink-0">{item.status}</Badge>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {item.evidence.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="bg-secondary/40 border border-border rounded-lg p-5 text-sm text-muted-foreground leading-relaxed">
        <p>
          Additional evidence can be linked here, such as GitHub repositories, technical videos, screenshots, reports or demonstration material.
          <a href="https://github.com/maxclementine21-boop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 ml-1 text-primary hover:underline">
            View GitHub profile <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </section>
  )
}

export function ResearchSection() {
  const interests = [
    {
      title: "Robotics and Autonomous Systems",
      description: "Navigation, path planning, control and system integration for mobile robots and robotic platforms.",
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      description: "Deep learning, computer vision and data-driven methods for perception and decision-making.",
    },
    {
      title: "Robot Perception",
      description: "Object detection, depth sensing, sensor evaluation and practical perception pipelines for robotic tasks.",
    },
    {
      title: "Data Analysis and Evaluation",
      description: "Experimental testing, performance comparison, data visualisation and evidence-based engineering conclusions.",
    },
  ]

  return (
    <section id="research" className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">Research Interests</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-foreground mb-3">{interest.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

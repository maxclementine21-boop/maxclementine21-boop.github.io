import Image from "next/image"

export function ObjectivesSection() {
  const objectives = [
    {
      title: "Machine Learning",
      description: "Exploring advanced machine learning algorithms and their applications in real-world scenarios. Focus areas include supervised and unsupervised learning, neural networks, and model optimization techniques.",
      image: "/machine-learning.jpg",
    },
  ]

  return (
    <section id="objectives" className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">Objectives</h2>
      <div className="space-y-6">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto min-h-[200px]">
                <Image
                  src={objective.image}
                  alt={objective.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{objective.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

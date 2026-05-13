import Image from "next/image"

export function ResearchSection() {
  const interests = [
    {
      title: "Artificial intelligence and machine learning",
      description: "Research and application in deep learning, natural language processing, computer vision and other fields",
    },
    {
      title: "Data Science",
      description: "Big data analysis, data visualization",
    },
  ]

  const focusedResearch = [
    {
      title: "Machine Learning",
      description: "Exploring advanced machine learning algorithms and their applications in real-world scenarios. Focus areas include supervised and unsupervised learning, neural networks, and model optimization techniques.",
      image: "/machine-learning.jpg",
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

      {/* Focused Research - Machine Learning */}
      <div className="space-y-4 mt-8">
        {focusedResearch.map((research, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src={research.image}
                  alt={research.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{research.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{research.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ResearchSection() {
  const interests = [
    {
      title: "Artificial intelligence and machine learning",
      description: "Research and application in deep learning, natural language processing, computer vision and other fields",
    },
    // {
    //   title: "Front-end development",
    //   description: "html, css, javascript",
    // },
    // {
    //   title: "Backend development",
    //   description: "Java, c++, python",
      
    // },
    {
      title: "Data Science",
      description: "Big data analysis, data visualization",
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

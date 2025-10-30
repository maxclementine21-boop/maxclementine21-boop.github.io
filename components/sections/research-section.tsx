export function ResearchSection() {
  const interests = [
    {
      title: "人工智能与机器学习",
      description: "深度学习、自然语言处理、计算机视觉等领域的研究与应用",
    },
    {
      title: "全栈Web开发",
      description: "现代Web框架、微服务架构、云原生应用开发",
    },
    {
      title: "数据科学",
      description: "大数据分析、数据可视化、预测模型构建",
    },
    {
      title: "开源技术",
      description: "参与开源项目，贡献代码，推动技术社区发展",
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

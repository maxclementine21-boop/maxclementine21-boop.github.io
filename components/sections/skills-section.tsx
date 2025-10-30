export function SkillsSection() {
  const skillCategories = [
    {
      category: "编程语言",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go"],
    },
    {
      category: "前端技术",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "后端技术",
      skills: ["Node.js", "Express", "Django", "FastAPI", "Spring Boot", "GraphQL"],
    },
    {
      category: "数据库",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      category: "机器学习",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Hugging Face"],
    },
    {
      category: "开发工具",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    },
  ]

  return (
    <section id="skills" className="space-y-6 pb-12">
      <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">Technical Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

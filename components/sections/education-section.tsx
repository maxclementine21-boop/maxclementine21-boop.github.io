import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      school: "清华大学",
      degree: "计算机科学与技术 硕士",
      period: "2020 - 2023",
      description: "研究方向：深度学习与自然语言处理。参与多个国家级科研项目，发表SCI论文2篇。",
      image: "/tsinghua-university-campus.jpg",
      link: "https://www.tsinghua.edu.cn",
    },
    {
      school: "北京大学",
      degree: "软件工程 学士",
      period: "2016 - 2020",
      description: "主修课程包括算法设计、数据结构、操作系统、数据库系统等。GPA: 3.8/4.0",
      image: "/peking-university-campus.jpg",
      link: "https://www.pku.edu.cn",
    },
  ]

  return (
    <section id="education" className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">Education Experience</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 relative h-48 md:h-auto">
                <Image src={edu.image || "/placeholder.svg"} alt={edu.school} fill className="object-cover" />
              </div>
              <div className="md:col-span-3 p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-foreground">{edu.school}</h3>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-lg text-foreground font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

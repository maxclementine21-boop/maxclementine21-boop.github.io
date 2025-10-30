import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "yingji-Film and television tourism software",
      description:
        "A software system developed based on Springboot, which meets the needs of realizing tourism through films and television.",
      image: "/yingji.png",
      tags: ["Java", "Springboot"],
      github: "https://github.com/yourusername/qa-system",
      demo: "https://qa-demo.example.com",
    },
    {
      title: "电商管理平台",
      description:
        "全栈电商管理系统，包含商品管理、订单处理、用户管理、数据分析等功能。采用微服务架构，支持高并发访问。",
      image: "/ecommerce-dashboard-analytics.png",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.example.com",
    },
    // {
    //   title: "图像识别应用",
    //   description:
    //     "基于深度学习的图像识别移动应用，支持物体检测、图像分类和语义分割。模型部署在边缘设备上，实现实时推理。",
    //   image: "/image-recognition-mobile-app.jpg",
    //   tags: ["TensorFlow", "React Native", "Python", "Docker"],
    //   github: "https://github.com/yourusername/image-recognition",
    //   demo: "https://image-demo.example.com",
    // },
  ]

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3">Professional Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="md:col-span-3 p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      <span>Demonstration</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

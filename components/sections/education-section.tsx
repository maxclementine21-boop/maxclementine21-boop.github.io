import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      school: "The University of Manchester",
      degree: "Msc Robotics",
      period: "2025 - 2026",
      description: "Research Interests: Robot Applications.",
      image: "/uom.jpg",
      link: "https://www.manchester.ac.uk/",
    },
    {
      school: "Tiangong University",
      degree: "Software Engineering Bachelor",
      period: "2018 - 2022",
      description: "Major courses include Algorithm Design, Data Structures, Operating Systems, Database Systems, etc. GPA: 3.4/4.0",
      image: "/tgu.jpg",
      link: "https://www.tiangong.edu.cn/",
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

import { AboutSection } from "@/components/sections/about-section"
import { ResearchSection } from "@/components/sections/research-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"

export function MainContent() {
  return (
    <main className="lg:ml-[33.333%] w-full lg:w-2/3 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 lg:py-16 space-y-20">
        <AboutSection />
        <ResearchSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </main>
  )
}

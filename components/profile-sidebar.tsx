import Image from "next/image"
import { FileText, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-full lg:w-1/3 bg-card border-r border-border p-8 lg:p-12 flex flex-col justify-center items-center overflow-y-auto">
      <div className="flex flex-col items-center space-y-6 max-w-md">
        {/* Profile Photo */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
          <Image src="/professional-portrait.png" alt="Profile Photo" fill className="object-cover" priority />
        </div>

        {/* Name and Greeting */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Zicheng Hao</h1>
          <p className="text-lg text-muted-foreground">
            welcome to my homepage
            <br />
            在这里添加第二行内容
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 bg-primary/10 hover:bg-primary/20 border-primary/30"
            asChild
          >
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5" />
              <span>简历</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 bg-primary/10 hover:bg-primary/20 border-primary/30"
            asChild
          >
            <a
              href="https://github.com/maxclementine21-boop/maxclementine21-boop.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </aside>
  )
}

import { ProfileSidebar } from "@/components/profile-sidebar"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <ProfileSidebar />
      <MainContent />
    </div>
  )
}

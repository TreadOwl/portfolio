import { TooltipProvider } from '@/components/ui/tooltip'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { FloatingHeader } from '@/components/floating-header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <FloatingHeader />
        <main className="mt-18 w-full">{children}</main>
      </SidebarProvider>
    </TooltipProvider>
  )
}

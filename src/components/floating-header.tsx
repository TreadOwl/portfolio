import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function FloatingHeader() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
      <div
        className="pointer-events-auto relative flex justify-between max-w-2xl w-full
        bg-background/50 backdrop-blur-sm border border-border/50 rounded-full p-3 mt-3 mx-3"
      >
        <SidebarTrigger className="shrink-0 w-fit rounded-full p-4" />
        <Link href="/" className="mr-4 font-bold text-2xl tracking-wider">
          /\\
        </Link>
      </div>
    </header>
  )
}

import Link from 'next/link'
import { HomeBg } from '@/components/bg-absolute'

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center flex-col">
      <HomeBg />

      <div className="relative z-3">
        <div className="text-lg font-medium max-w-2xl mx-9">
          <p>
            I&apos;m <span className="font-bold tracking-wider animate-pulse">Ayush Gusain</span>, a &ldquo;Full Stack&rdquo; Web-App Developer from
            Dehradun, Uttarakhand.
          </p>
          <p>I like working on Front-end, UI/UX elements, interactive visual aspects and more... trying to make cool looking things.</p>
          <p className="mt-6">Apart from that, I dabble in music production, video games and watching video essays on anything and everything.</p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-12 w-fit mx-auto">
          <Link
            href="/projects"
            className="rounded-md p-6 border-2 border-muted-foreground/20 bg-transparent hover:-translate-y-2 transition-all duration-200"
          >
            Check out my projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md p-6 border-2 border-muted-foreground/20 bg-transparent hover:-translate-y-2 transition-all duration-200"
          >
            Contact me / Reach out
          </Link>
        </div>
      </div>
    </div>
  )
}

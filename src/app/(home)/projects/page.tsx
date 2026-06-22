'use client'

import Link from 'next/link'
import Image from 'next/image'
import { LinkIcon, EmptyIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { ProjectsBg } from '@/components/bg-absolute'
import projects from '@/lib/projects.json'

export default function Projects() {
  return (
    <div className="flex h-full items-center justify-center flex-col py-6">
      <ProjectsBg />

      <div className="relative z-3 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 xl:gap-12">
        {projects.Projects.map((project) => {
          const headerLink = project.github ? project.github : project.url
          const HeaderIcon = project.github ? GithubLogoIcon : LinkIcon
          const headerColor = project.github ? 'hover:bg-green-200' : 'hover:bg-accent'
          const url = project.url

          return (
            <div key={project.name} className="bg-transparent border border-border/50 p-3 mx-6 rounded-xl max-w-sm flex flex-col items-center">
              <Link
                className={`rounded-lg bg-transparent border border-border p-3 w-full mb-3 text-2xl
                ${headerColor} hover:text-primary transition-all duration-200 group flex items-center gap-0`}
                href={headerLink}
                target="_blank"
              >
                {project.name}
                <HeaderIcon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-200" size={24} />
              </Link>

              {url ? (
                <div className="w-[320px] h-[180px] hover:scale-115 transition-all duration-200 overflow-hidden rounded-lg border">
                  <div onClick={() => window.open(url, '_blank')} className="w-[1280px] h-[720px] scale-[0.25] origin-top-left cursor-pointer">
                    <iframe src={url} className="w-full h-full border-0 pointer-events-none" loading="lazy" />
                  </div>
                </div>
              ) : (
                <div className="w-[320px] h-[180px] rounded-lg border flex items-center justify-center">
                  <EmptyIcon className="animate-pulse" size={36} />
                </div>
              )}

              {project.type === 'me' ? (
                <div className="flex items-center gap-2 mt-3 text-sm font-sans text-green-400">Personal project</div>
              ) : (
                <div className="flex items-center gap-2 mt-3 text-sm font-sans text-blue-400">
                  Professional work @
                  <Link href="https://prodioslabs.com" target="_blank" className="flex items-center gap-0 hover:underline">
                    <Image src="/prodios.png" alt="Prodios Labs" height={14} width={14} />
                    ProdiosLabs
                  </Link>
                </div>
              )}

              <p className="italic mt-2">{project.description}</p>
              <p className="text-sm mt-3">{project.tech}</p>
            </div>
          )
        })}

        <Link
          href="https://github.com/TreadOwl"
          target="_blank"
          className="mx-6 border border-border/50 rounded-xl p-3 flex items-center hover:bg-green-200 hover:text-primary transition-all duration-200 group"
        >
          Checkout more on my Github...
          <GithubLogoIcon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-200" size={24} />
        </Link>
      </div>
    </div>
  )
}

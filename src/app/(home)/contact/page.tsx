import Link from 'next/link'
import { GithubLogoIcon, LinkedinLogoIcon, AtIcon } from '@phosphor-icons/react/dist/ssr'
import { ContactBg } from '@/components/bg-absolute'

const contactLinks = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushgusain2106', icon: LinkedinLogoIcon },
  { title: 'E-mail', href: 'mailto:ayushgusain2106@gmail.com', icon: AtIcon },
  { title: 'GitHub', href: 'https://github.com/TreadOwl', icon: GithubLogoIcon },
]

export default function Contact() {
  return (
    <div className="flex h-full items-center justify-center flex-col py-6">
      <ContactBg />

      <div className="relative z-3">
        <div className="mb-6 flex justify-center text-xl animate-pulse">Reach out</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {contactLinks.map(({ title, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              target="_blank"
              className="py-6 min-w-36 rounded-xl transition-all duration-200 group flex flex-col items-center justify-center
              border border-border/50 hover:-translate-y-2"
            >
              <Icon size={36} />
              <span className="mt-6">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

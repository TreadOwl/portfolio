'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { HouseIcon, FolderSimpleIcon, EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, AtIcon } from '@phosphor-icons/react'
import Link from 'next/link'

const YEAR = new Date().getFullYear()

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-3">
        <Link href="/" className="flex items-center hover:bg-accent/50 transition-all duration-200 ease-in-out rounded-md">
          <div className="flex p-3 shrink-0 group-data-[collapsible=icon]:mx-auto items-center justify-center rounded-md bg-accent text-background font-bold">
            /\
          </div>
          <div className="flex flex-col gap-0.5 leading-none ml-3 group-data-[collapsible=icon]:hidden">
            <span className="font-semibold text-sm font-sans">Ayush</span>
            <span className="text-xs text-muted">Gusain</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="text-muted">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="hover:translate-x-2 group-data-[collapsible=icon]:hover:translate-x-1 transition-all duration-200 ease-in-out"
                >
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span className="font-sans">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">Socials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="hover:translate-x-2 group-data-[collapsible=icon]:hover:translate-x-1 transition-all duration-200 ease-in-out"
                >
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <item.icon />
                      <span className="font-sans">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 group-data-[collapsible=icon]:p-2 text-sidebar">
        <div className="text-[10px] group-data-[collapsible=icon]:hidden">©{YEAR} Ayush Gusain</div>
      </SidebarFooter>
    </Sidebar>
  )
}

const navItems = [
  { title: 'Home', href: '/', icon: HouseIcon },
  { title: 'Projects', href: '/projects', icon: FolderSimpleIcon },
  { title: 'Contact', href: '/contact', icon: EnvelopeSimpleIcon },
]

const socialItems = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushgusain2106/', icon: LinkedinLogoIcon },
  { title: 'E-mail', href: 'mailto:ayushgusain2106@gmail.com', icon: AtIcon },
  { title: 'GitHub', href: 'https://github.com/TreadOwl', icon: GithubLogoIcon },
]

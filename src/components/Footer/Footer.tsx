import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
                   href,
                   children,
                 }: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-indigo-500 dark:hover:text-indigo-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-gray-100 pb-16 pt-10 dark:border-gray-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div
                className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/socials">Socials</NavLink>
                <NavLink href={'https://devshaded.com/bobwatts'}>Bob Watts</NavLink>
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                &copy; {new Date().getFullYear()} DevShaded. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}

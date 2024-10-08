import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, TwitterIcon, } from '@/components/Social/SocialIcons'
import portraitImage from '@/images/avatar/fredrik.webp'

function SocialLink({
                        className,
                        href,
                        children,
                        icon: Icon,
                    }: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'About me',
    description:
        'The Fullstack Web Developer from Norway, here is the official portfolio for DevShaded',
    twitter: {
        card: 'summary',
        title: 'About me - DevShaded',
        description: 'The Fullstack Web Developer from Norway, here is the official portfolio for DevShaded',
        images: '/favicons/devshaded/android-chrome-512x512.png',
    },
    openGraph: {
        type: 'website',
        locale: 'no_NO',
        siteName: 'About me - DevShaded',
        title: 'About me - DevShaded',
        description: 'The Fullstack Web Developer from Norway, here is the official portfolio for DevShaded',
        images: [
            {
                url: '/favicons/devshaded/android-chrome-512x512.png',
                width: 180,
                height: 180,
                alt: 'DevShaded - Web developer, photographer, and entrepreneur.',
            },
        ],
    }
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        The beautiful country of Norway 🇳🇴 is where I was born and raised. I am {new Date().getFullYear() - 2006} years old!
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I began my programming career in primary school, where I learned Scratch. Not only that, but I liked programming after we did Scratch classes, so I wanted to learn more. I started learning Python, but I didn&apos;t want to. I was eager to learn how to build websites, and so I did.
                        </p>
                        <p>
                            Also, I mostly use PHP and JavaScript. My primary choice for PHP development is Laravel. Furthermore, I use Vue.js and Tailwind CSS for my front-end. I am also proficient in C#, Golang, Lua, and Rust.
                        </p>
                        <p>
                            My Fortnite Stats Tracker is my best project yet. You can see it on the project page. I am proud of this project and have gained valuable knowledge through the creation of this web application. This project was also developed utilizing Laravel and Vue.js.
                        </p>
                        <p>
                            I&apos;ve been using a lot of text and code editors in the past few years. I went from Atom to Brackets a lot, but then I found VSCode, and everything changed. Not only that, but I also coded faster and better with this tool because it has good IntelliSense. I discovered an even superior integrated development environment, namely PhpStorm. I was in love with PhpStorm when I first tried it. It helped me a lot when I used Laravel to code.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="https://twitter.com/devshaded" icon={TwitterIcon}>
                            Follow on Twitter
                        </SocialLink>
                        <SocialLink href="https://github.com/DevShaded" icon={GitHubIcon} className="mt-4">
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink href="https://www.linkedin.com/in/fredrik-sundquist-b04b29231/" icon={LinkedInIcon}
                                    className="mt-4">
                            Follow on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="devshaded@devshaded.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            devshaded@devshaded.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

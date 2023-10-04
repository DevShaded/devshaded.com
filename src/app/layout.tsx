import './globals.css'
import type { Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout/Layout'
import { Poppins } from "next/font/google";
import { clsx } from 'clsx'

const poppins = Poppins({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        template: '%s - DevShaded',
        default:
            'DevShaded - Web developer, photographer, and entrepreneur.',
    },
    description:
        'The Fullstack Web Developer from Norway, here is the official portfolio for DevShaded',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className={clsx(poppins.className, 'flex h-full bg-zinc-50 dark:bg-black')}>
        <Providers>
            <div className="flex w-full">
                <Layout>{children}</Layout>
            </div>
        </Providers>
        </body>
        </html>
    )
}

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
    twitter: {
        card: 'summary',
        title: 'DevShaded - Web developer, photographer, and entrepreneur.',
        description: 'The Fullstack Web Developer from Norway, here is the official portfolio for DevShaded',
        images: '/favicons/devshaded/android-chrome-512x512.png',
    },
    openGraph: {
        type: 'website',
        locale: 'no_NO',
        siteName: 'DevShaded - Web developer, photographer, and entrepreneur.',
        title: 'DevShaded - Web developer, photographer, and entrepreneur.',
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

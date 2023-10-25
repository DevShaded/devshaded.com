import { Container } from "@/components/Container";
import { SocialLink } from "@/components/Social/SocialLink";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/Social/SocialIcons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact me',
    description: 'Here you can find some projects I\'ve made on my spare time. You can find more projects on my GitHub if I haven\'t updated this page.',
    twitter: {
        card: 'summary',
        title: 'Contact me - DevShaded',
        description: 'The Fullstack Web Developer from Norway, here is the official portfolio for DevShaded',
        images: '/favicons/devshaded/android-chrome-512x512.png',
    },
    openGraph: {
        type: 'website',
        locale: 'no_NO',
        siteName: 'Contact me - DevShaded',
        title: 'Contact me - DevShaded',
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

export default function Contact() {
    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
                        Ready to get in touch? Let&apos;s talk!
                    </h1>

                    <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                        You can contact me either by email or by sending me a message on LinkedIn! I&apos;ll try to
                        respond as soon
                        as possible.
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://twitter.com/DevShaded"
                            aria-label="Follow on Twitter"
                            icon={TwitterIcon}
                        />
                        <SocialLink
                            href="https://github.com/DevShaded"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/fredrik-sundquist-b04b29231"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>
            </Container>

            <Container className="pt-14 sm:pt-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Get in
                                    touch</h2>
                                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-200">
                                    Here are some ways you can get in touch with me. I&apos;ll try to respond as soon as
                                    possible.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">My
                                        email</h3>
                                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
                                        <div>
                                            <dt className="sr-only">Email</dt>
                                            <dd>
                                                <a className="font-semibold text-indigo-600"
                                                   href="mailto:devshaded@devshaded.com">
                                                    devshaded@devshaded.com
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Company</h3>
                                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
                                        <div>
                                            <dt className="sr-only">Email</dt>
                                            <dd>
                                                <a className="font-semibold text-indigo-600"
                                                   href="mailto:kontakt@tech-media.no">
                                                    kontakt@tech-media.no
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

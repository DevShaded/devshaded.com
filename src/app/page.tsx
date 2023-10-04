import { Container } from "@/components/Container";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/Social/SocialIcons";
import image1 from '@/images/photos/image-1.webp'
import image2 from '@/images/photos/image-2.webp'
import image3 from '@/images/photos/image-3.webp'
import image4 from '@/images/photos/image-4.webp'
import image5 from '@/images/photos/image-5.webp'
import { clsx } from "clsx";
import Image from "next/image";
import { Card } from "@/components/Card/Card";
import { getArticles } from "../../sanity/utils/article";
import { ArticleType } from "@/types/Sanity/Article/ArticleType";
import { getWorkExperiences } from "../../sanity/utils/work";
import { ImageType, WorkExperiencesType } from "@/types/Sanity/Work/WorkExperinceType";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

function SocialLink({
                        icon: Icon,
                        ...props
                    }: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon
                className="h-6 w-6 fill-gray-500 transition group-hover:fill-gray-600 dark:fill-gray-400 dark:group-hover:fill-gray-300"/>
        </Link>
    )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-gray-100 stroke-gray-400 dark:fill-gray-100/10 dark:stroke-gray-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-gray-400 dark:stroke-gray-500"
            />
        </svg>
    )
}

function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length],
                        )}
                    >
                        <Image
                            src={image}
                            alt="Picture that Fredrik have taken"
                            sizes="(min-width: 640px) 50rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

function Article({article}: { article: ArticleType }) {
    return (
        <Card as="article">
            <Card.Title href={`${article.link}`}>
                {article.title}
            </Card.Title>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta>{article.cta}</Card.Cta>
        </Card>
    )
}

const builder = imageUrlBuilder(client);

function ImageComponent({name, image}: { name: string, image: ImageType }) {
    const imageUrl = builder.image(image).url() || "";

    return (
        <Image
            src={imageUrl}
            alt={name}
            width={200}
            height={200}
            className="rounded-full"
        />
    )
}

function Role({role}: { role: WorkExperiencesType }) {
    const endDate = role.endDate ? role.endDate.substring(0, 7) : 'Present'

    return (
        <li className="flex gap-4">
            <div
                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0">
                <ImageComponent name={role.companyName} image={role.image}/>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-gray-900 dark:text-gray-100">
                    {role.companyName}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-gray-500 dark:text-gray-400">
                    {role.role}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                    className="ml-auto text-xs text-gray-400 dark:text-gray-500"
                    aria-label={`${role.startDate} until ${endDate}`}
                >
                    <time dateTime={role.startDate.substring(0, 7)}>{role.startDate.substring(0, 7)}</time>
                    {' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={endDate}>{endDate}</time>
                </dd>
            </dl>
        </li>
    )
}

function Resume({resume}: { resume: WorkExperiencesType[] }) {
    return (
        <div className="rounded-2xl border border-gray-100 p-6 dark:border-gray-700/40">
            <h2 className="flex text-sm font-semibold text-gray-900 dark:text-gray-100">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3 pt-0.5">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role}/>
                ))}
            </ol>
        </div>
    )
}

export default async function Home() {
    const articles = await getArticles()
    const resume = await getWorkExperiences()

    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
                        Web developer, photographer, and entrepreneur.
                    </h1>

                    <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                        I&apos;m a Fullstack Web Developer from Norway, and coding is not just my profession, it&apos;s
                        my passion!
                        In my free
                        time, you&apos;ll find me fully immersed in code, exploring new techniques, and staying
                        up-to-date with the
                        latest advancements in technology.
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
            <Photos/>
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {articles.map((article, index) => (
                            <Article key={index} article={article}/>
                        ))}
                    </div>
                    <div className="space-y-5 lg:pl-16 xl:pl-24">
                        <Resume resume={resume}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

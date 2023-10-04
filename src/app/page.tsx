import { clsx } from "clsx";
import Image from "next/image";

import { getArticles } from "../../sanity/utils/article";
import { getWorkExperiences } from "../../sanity/utils/work";
import { getEducation } from "../../sanity/utils/education";

import { ArticleType } from "@/types/Sanity/Article/ArticleType";
import { WorkExperiencesType } from "@/types/Sanity/Work/WorkExperinceType";
import { EducationType } from "@/types/Sanity/Education/EducationType";

import { Container } from "@/components/Container";
import { Card } from "@/components/Card/Card";
import { ImageComponent } from "@/components/Image/ImageComponent";
import { BriefcaseIcon } from "@/components/Icon/BreifcaseIcon";
import { EducationIcon } from "@/components/Icon/EducationIcon";
import { SocialLink } from "@/components/Social/SocialLink";

import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/Social/SocialIcons";

import image1 from '@/images/photos/image-1.webp';
import image2 from '@/images/photos/image-2.webp';
import image3 from '@/images/photos/image-3.webp';
import image4 from '@/images/photos/image-4.webp';
import image5 from '@/images/photos/image-5.webp';


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

function Role({role}: { role: WorkExperiencesType }) {
    const endDate = role.endDate ? role.endDate.substring(0, 7) : 'Present'

    return (
        <li className="flex gap-4">
            <div
                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0">
                <ImageComponent name={role.companyName} image={role.image} width={200} height={200}/>
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

function EducationRole({role}: { role: EducationType }) {
    const endDate = role.endDate.substring(0, 7)

    return (
        <li className="flex gap-4">
            <div
                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0">
                {role.image ?
                    <ImageComponent name={role.schoolName} image={role.image} width={200} height={200}/> : null}
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">School</dt>
                <dd className="w-full flex-none text-sm font-medium text-gray-900 dark:text-gray-100">
                    {role.schoolName}
                </dd>
                <dt className="sr-only">Grade</dt>
                <dd className="text-xs text-gray-500 dark:text-gray-400">
                    {role.grade}
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

function Education({educations}: { educations: EducationType[] }) {
    return (
        <div className="rounded-2xl border border-gray-100 p-6 dark:border-gray-700/40">
            <h2 className="flex text-sm font-semibold text-gray-900 dark:text-gray-100">
                <EducationIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3 pt-0.5">Education</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {educations.map((role, roleIndex) => (
                    <EducationRole key={roleIndex} role={role}/>
                ))}
            </ol>
        </div>
    )
}

export default async function Home() {
    const articles = await getArticles()
    const resume = await getWorkExperiences()
    const education = await getEducation()

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
                    <div className="flex flex-col gap-16 order-last lg:order-first">
                        {articles.map((article, index) => (
                            <Article key={index} article={article}/>
                        ))}
                    </div>
                    <div className="space-y-5 lg:pl-16 xl:pl-24">
                        <Resume resume={resume}/>
                        <Education educations={education}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

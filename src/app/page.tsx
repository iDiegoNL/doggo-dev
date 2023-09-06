import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  BlueskyIcon,
  TwitterIcon,
  GitHubIcon,
  TelegramIcon,
} from '@/components/SocialIcons'

import logoAwoostria from '@/images/logos/awoostria.png'
import logoArtisticAnthro from '@/images/logos/artisticanthro.png'
import logoTruckersmp from '@/images/logos/truckersmp.png'
import logoViva from '@/images/logos/viva-trucking.png'
import logoPhoenix from '@/images/logos/phoenix.png'
import fleurCoffee from '@/images/photos/fleur-coffee.png'
import septemberfoxForest from '@/images/photos/septemberfox-forest.jpg'
import dudiCoffee from '@/images/photos/dudi-coffee.jpeg'
import trashmuttPride from '@/images/photos/trashmutt-pride.png'
import paranormawsPride from '@/images/photos/paranormaws-pride.png'
import portraitImage from '@/images/photos/frickle-blep.png'

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
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Awoostria',
      title: 'Developer',
      logo: logoAwoostria,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'ArtisticAnthro',
      title: 'Founder',
      logo: logoArtisticAnthro,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'TruckersMP',
      title: 'Web Developer',
      logo: logoTruckersmp,
      start: '2021',
      end: '2022',
    },
    {
      company: 'PhoenixVTC',
      title: 'Management & Lead Developer',
      logo: logoPhoenix,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Viva Trucking',
      title: 'Director & Lead Developer',
      logo: logoViva,
      start: 'Aug 2020',
      end: 'Dec 2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work (on voluntary basis)</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          trashmuttPride,
          septemberfoxForest,
          fleurCoffee,
          dudiCoffee,
          paranormawsPride,
        ].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
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
              21 y/o · Shiba Inu · Developer · Digital Nomad
            </h1>
            <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Heyo! I’m Diego, a 21-year-old non-binary furry that currently
                lives in Prague. Any pronouns are fine, but they/them is
                preferred. I also respond to the nicknames Doggo or Dot!
              </p>
              <p>
                In my free time, you’ll probably find me either coding,
                traveling, or playing with my dog. I’ve been in the furry fandom
                for about 7-ish years now, but I have been quite inactive in the
                community until the start of 2022.
              </p>
            </div>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://twitter.com/DoggoDot_"
                target="_blank"
                aria-label="Follow me on Twitter"
                icon={TwitterIcon}
              />
              <SocialLink
                href="https://bsky.app/profile/doggodot.bsky.social"
                target="_blank"
                aria-label="Follow me on Bluesky"
                icon={BlueskyIcon}
              />
              <SocialLink
                href="https://github.com/iDiegoNL"
                target="_blank"
                aria-label="Follow me on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://t.me/DotDoggo"
                target="_blank"
                aria-label="Message me on Telegram"
                icon={TelegramIcon}
              />
            </div>
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}

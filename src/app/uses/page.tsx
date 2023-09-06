import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="What's the purpose of being a developer if you can't talk about your fancy products? Here's a list of the things I use on a daily basis."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="AMD Ryzen 9 5900X, RTX 3070, 64GB DDR4 RAM @ 3.600MT/s">
            My desktop machine is my pride and joy. Featuring some fancy
            hardware, NZXT watercooling, RGB and storage for days. It’s the
            perfect machine for my needs.
          </Tool>
          <Tool title="13,6” MacBook Air, M2, 16GB RAM (2022)">
            I was using a Dell XPS prior to switching to Apple, and I’m very
            happy with my choice. The M2 chip is blazing fast, and the battery
            life is amazing.
          </Tool>
          <Tool title="27” Samsung Odyssey G5">
            The perfect combination of size, resolution, and refresh rate.
            Outside of my working hours I love watching series on Netflix and
            playing games, and this monitor is a great choice for both.
          </Tool>
          <Tool title="Corsair Gaming K95 RGB Platinum Cherry">
            I’ve been using this keyboard for years now and I’m still very happy
            with it. I’m a huge fan of the Cherry MX Brown switches, and with
            the marco keys and media controls it’s the perfect keyboard for me.
          </Tool>
          <Tool title="Logitech MX Master 3">
            This mouse shouldn’t need an introduction. Logitech’s MX series are
            the best mice that I have ever used, and I’ll never switch to
            something else.
          </Tool>
          <Tool title="IKEA Markus">
            It’s a chair. It’s comfortable. It’s cheap. What else is there to
            say?
          </Tool>
        </ToolsSection>
        <ToolsSection title="Audio setup">
          <Tool title="Sony WH-1000XM5">
            My go-to headphones for when I’m not home. Amazing sound quality,
            noise cancellation and battery life.
          </Tool>
          <Tool title="Sony WF-1000XM4">
            My go-to earbuds for when I’m on the go. The noise cancellation is
            great, and so is the sound quality. I travel a lot, and these are
            the perfect companion for that.
          </Tool>
          <Tool title="Sennheiser HD 660 S">
            In my opinion one of the best value for money headphones out there.
            They’re comfortable, and the sound quality is amazing.
          </Tool>
          <Tool title="Focusrite Scarlett 2i2">
            This audio interface functions as my headphone and speaker output,
            and the input for my microphone. Also, the two input channels are
            really handy for quickly mixing in other audio sources.
          </Tool>
          <Tool title="Audio-Technica AT2020">
            For only € 90 this microphone is a steal. The sound quality is
            amazing, so that I can sound crispy clear during meetings.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="PhpStorm">
            My IDE of choice. I’ve been using it for years now, and I’m still
            very happy with it. I’ve heavily customized it with plugins and
            themes by now, and will probably never switch to anything else.
          </Tool>
          <Tool title="Tinkerwell">
            If you love Laravel Tinker, you’ll love Tinkerwell even more. It’s
            an amazing tool for quickly running code snippets, while having the
            hot-reload that I miss with Tinker.
          </Tool>
          <Tool title="Spatie Ray">
            My favorite debugging tool. Super easy to use, and it’s a great way
            to quickly debug code of any application.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Tech stack">
          <Tool title="Laravel, Livewire, Tailwind CSS, Alpine.js and Vue.js">
            My favourite PHP framework. Whenever I start a new project, I don’t
            even need to think about what framework to use, because I know that
            Laravel is the best choice for me.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            From quickly taking notes to writing to-do lists and standup
            reports, Notion is my go-to text editor.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

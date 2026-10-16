import { ArrowIcon } from '../ui/Icons'
import Button from '../ui/Button'
import { PROJECT_MAILTO } from '../../data/siteData'

/** Mini dashboard card that floats at the bottom of the hero */
function HeroDashboardCard() {
  return (
    <div className="mx-auto w-full max-w-[580px] rounded-2xl border border-[#e5e7e2] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#f2f3f0] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2f3f0] text-[10px] font-bold font-[Inter] text-[#0a0a0a]">
            W
          </span>
          <span className="text-[12px] font-medium font-[Inter] text-[#3a3d3a]">
            World of Diversity / Space
          </span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f2f3f0] px-2.5 py-1 text-[11px] font-medium font-[Inter] text-[#3a3d3a]">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
          Live Node
        </span>
      </div>

      {/* Split content */}
      <div className="flex">
        {/* Left stats */}
        <div className="flex-1 border-r border-[#f2f3f0] p-4 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'New leads', value: '12' },
              { label: 'In chat now', value: '10' },
              { label: 'Resolved', value: '1' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[10px] text-[#9ca3a0] font-[Inter]">{s.label}</p>
                <p className="text-[22px] font-semibold font-[Inter] text-[#0a0a0a] leading-tight">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-2 border-t border-[#f2f3f0]">
            <p className="text-[10px] text-[#9ca3a0] font-[Inter]">Monthly Throughput</p>
            <p className="text-[16px] font-semibold font-[Inter] text-[#0a0a0a]">$23,251</p>
          </div>
        </div>

        {/* Right: chat */}
        <div className="flex-1 p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef2f8] text-[10px] font-bold font-[Inter] text-[#3a3d3a]">
                MA
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] font-semibold font-[Inter] text-[#0a0a0a]">Marcus</span>
                  <span className="text-[10px] text-[#9ca3a0] font-[Inter]">#SH-24819</span>
                </div>
                <p className="text-[10px] text-[#9ca3a0] font-[Inter]">Automated resolution flow</p>
              </div>
            </div>
            <span className="shrink-0 rounded-md bg-[#f2f3f0] px-2 py-0.5 text-[10px] font-medium font-[Inter] text-[#3a3d3a]">
              Order Lookup
            </span>
          </div>

          <div className="rounded-xl bg-[#f8f9f6] px-3 py-2.5">
            <p className="text-[11px] text-[#3a3d3a] font-[Inter]">
              Hey, any update?
            </p>
          </div>

          <div className="rounded-xl bg-[#0a0a0a] px-3 py-2.5 space-y-0.5">
            <div className="flex items-center gap-1.5 mb-1">
              
              <p className="text-[10px] text-white font-[Inter]"></p>
            </div>
            <p className="text-[10px] text-white/70 font-[Inter]">
              Status: almost done just few polish (3–6 PM).
            </p>
            <p className="text-[10px] text-white/70 font-[Inter]">You will notified soon.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/*
        Background image — place your image at: public/images/hero-nature.webp
        The image shows a serene sky with green grass and stone bricks in the foreground.
      */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-nature.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      >
        {/* Subtle gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-start pt-[120px] pb-0 px-5">
        {/* YC badge */}
        

        {/* Heading */}
        <h1 className="mx-auto max-w-[750px] text-center font-serif text-[56px] sm:text-[64px] md:text-[72px] font-normal leading-[1.1] text-[#0a0a0a] tracking-tight">
          We build the software your business runs on.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-[460px] text-center font-[Inter] text-[16px] text-[#6b7270] leading-relaxed">
          Web apps, mobile apps, and online stores, designed, built, and
          deployed by one small team.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button href={PROJECT_MAILTO}>
            Start a project&nbsp;
            <ArrowIcon size={13} />
          </Button>
          <Button variant="ghost" href="#services">
            Explore studio methodology
          </Button>
        </div>

        {/* Dashboard card — floats below */}
        <div className="mt-14 w-full max-w-[700px]">
          <HeroDashboardCard />
        </div>
      </div>
    </section>
  )
}

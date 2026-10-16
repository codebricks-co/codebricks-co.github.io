import { teamMembers, clientLogos } from '../../data/siteData'

/** Individual team member card */
function TeamCard({ member }) {
  return (
    <article className="flex flex-col rounded-2xl border border-[#e5e7e2] bg-white p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      {/* Avatar */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef2f8] border border-[#dce4ee]">
        <span className="text-[15px] font-semibold font-[Inter] text-[#3a3d3a] tracking-wide">
          {member.initials}
        </span>
      </div>

      {/* Name + title */}
      <h3 className="font-serif text-[22px] font-normal text-[#0a0a0a] leading-snug mb-0.5">
        {member.name}
      </h3>
      <p className="text-[12px] text-[#9ca3a0] font-[Inter] mb-4">{member.title}</p>

      {/* Description */}
      <p className="text-[13px] text-[#6b7270] font-[Inter] leading-relaxed flex-1">
        {member.description}
      </p>

      {/* Focus */}
      <div className="mt-5 pt-4 border-t border-[#f2f3f0]">
        <p className="text-[12px] text-[#9ca3a0] font-[Inter]">{member.focus}</p>
      </div>
    </article>
  )
}

export default function StudioSection() {
  return (
    <section id="studio" aria-label="The Studio">
      {/* ─── Client logos marquee strip ─── */}
      <div className="border-y border-[#e5e7e2] bg-white">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12">
          <span className="shrink-0 text-[10px] font-semibold tracking-widest uppercase text-[#9ca3a0] font-[Inter]">
            Engineered for teams at
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-[14px] font-medium font-[Inter] text-[#6b7270] hover:text-[#0a0a0a] transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Team section ─── */}
      <div className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8">
          {/* Header */}
          <div className="mb-10 max-w-[500px]">
            <p className="mb-2 text-[11px] font-semibold tracking-widest uppercase text-[#9ca3a0] font-[Inter]">
              The Studio
            </p>
            <h2 className="font-serif text-[40px] md:text-[48px] font-normal text-[#0a0a0a] leading-tight mb-4">
              Three builders, zero bloat.
            </h2>
            <p className="text-[14px] text-[#6b7270] font-[Inter] leading-relaxed">
              No account executives, no junior contractor delegation. You partner
              with the three software architects executing the code.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member) => (
              <TeamCard key={member.initials} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

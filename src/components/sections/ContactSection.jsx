import { ArrowIcon } from '../ui/Icons'
import { PROJECT_MAILTO } from '../../data/siteData'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-12 md:py-16 px-4 md:px-8"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-[1100px]">
        {/*
          Contact card with background image.
          Place your image at: public/images/hero-nature.webp
          (Same scene as hero — sky, grass, stone bricks)
        */}
        <div className="relative overflow-hidden rounded-3xl min-h-[420px] flex flex-col items-center justify-center text-center px-6 py-16">
          {/* Background image */}
            <div
              data-animate="zoom"
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/hero-nature.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
            }}
            aria-hidden="true"
          />
          {/* Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 via-white/20 to-white/50" aria-hidden="true" />

          {/* Content */}
          <div data-animate="fade-up" className="relative z-10 flex flex-col items-center">
            {/* Availability badge */}
            <div className="mb-6 flex items-center gap-2 rounded-full border border-[#e5e7e2] bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
              <span className="text-[13px] font-medium font-[Inter] text-[#3a3d3a]">
                Q3 Availability: 1 of 3 Client Slots Open
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[44px] sm:text-[52px] md:text-[58px] font-normal text-[#0a0a0a] leading-tight mb-4 max-w-[500px]">
              Have a product in mind?
            </h2>

            {/* Subtext */}
            <p className="max-w-[400px] text-[15px] text-[#6b7270] font-[Inter] leading-relaxed mb-8">
              We take on 3 new client builds each quarter. Let's discuss your
              timeline and technical scope.
            </p>

            {/* CTA */}
            <a
              href={PROJECT_MAILTO}
              data-motion-interactive
              className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-7 py-3.5 text-[14px] font-medium font-[Inter] text-white hover:bg-[#2a2a2a] active:scale-[0.98] transition-all duration-200 mb-7"
            >
              Start a project
              <ArrowIcon size={13} />
            </a>

            {/* Contact details */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[13px] font-[Inter] text-[#0a0a0a]">
              <a
                href="mailto:abhinav.bhamer@gmail.com"
                className="underline underline-offset-4 hover:text-[#0a0a0a] transition-colors"
              >
                abhinav.bhamer@gmail.com
              </a>
              <span className="hidden sm:block text-[#0a0a0a]">•</span>
              <a
                href="tel:+919772020440"
                className="hover:text-[#0a0a0a] transition-colors"
              >
                +91 97720 20440
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

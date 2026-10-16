import { useState, useEffect } from 'react'
import { navLinks, PROJECT_MAILTO } from '../../data/siteData'
import {
  GridIcon, SettingsIcon, LayersIcon, PersonIcon, ChatIcon, ArrowLeftIcon,
} from '../ui/Icons'

const iconMap = {
  grid:     <GridIcon />,
  settings: <SettingsIcon />,
  layers:   <LayersIcon />,
  person:   <PersonIcon />,
  chat:     <ChatIcon />,
}

export default function Navbar() {
  const [active, setActive] = useState('overview')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = (id, href) => {
    setActive(id)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_#e5e7e2]' : ''
        }`}
      >
        <nav
          className="mx-auto flex h-[60px] max-w-[1100px] items-center justify-between px-5 md:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#overview"
            className="flex items-center gap-2 text-[25px] font-bold text-[#0a0a0a] font-[Inter] select-none hover:opacity-75 transition-opacity"
            onClick={() => handleNav('overview', '#overview')}
            aria-label="CodeBricks home"
          >
            
            <span>CodeBricks</span>
          </a>

          {/* Desktop pill nav */}
          <div
            className="hidden md:flex items-center gap-0.5 rounded-full border border-[#e5e7e2] bg-white px-1.5 py-1.5 shadow-sm"
            role="navigation"
          >
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id, link.href)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium font-[Inter] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0a0a0a] text-white'
                      : 'text-[#3a3d3a] hover:bg-[#f2f3f0]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {iconMap[link.icon]}
                  {link.label}
                </button>
              )
            })}
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PROJECT_MAILTO}
              className="hidden sm:inline-flex items-center rounded-full border border-[#0a0a0a] px-4 py-1.5 text-[13px] font-medium font-[Inter] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-200"
            >
              Start Project
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1.5 rounded-lg hover:bg-[#f2f3f0] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className={`block h-0.5 w-5 bg-[#0a0a0a] transition-all duration-200 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-[#0a0a0a] transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-[#0a0a0a] transition-all duration-200 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-[60px] left-4 right-4 rounded-2xl border border-[#e5e7e2] bg-white shadow-xl p-4 transition-all duration-300 ${
            mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id, link.href)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-[14px] font-medium font-[Inter] text-left transition-colors ${
                    isActive ? 'bg-[#0a0a0a] text-white' : 'text-[#3a3d3a] hover:bg-[#f2f3f0]'
                  }`}
                >
                  {iconMap[link.icon]}
                  {link.label}
                </button>
              )
            })}
            <div className="mt-2 pt-2 border-t border-[#e5e7e2]">
              <a
                href={PROJECT_MAILTO}
                className="flex justify-center items-center rounded-xl px-4 py-3 text-[14px] font-medium font-[Inter] bg-[#0a0a0a] text-white"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

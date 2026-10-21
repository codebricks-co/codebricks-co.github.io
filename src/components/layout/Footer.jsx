import { ArrowLeftIcon } from '../ui/Icons'

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7e2] bg-white">
      <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1100px] px-5 md:px-8 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[14px] font-semibold text-[#0a0a0a] font-[Inter]">
         
          <span>CodeBricks</span>
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-[#9ca3a0] font-[Inter] text-center sm:text-left">
          © 2023 CodeBricks Studio. Architectural software craftsmanship.
        </p>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-5 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Studio Colophon', 'Index'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[12px] text-[#6b7270] font-[Inter] hover:text-[#0a0a0a] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

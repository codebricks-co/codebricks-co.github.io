import './animations.css'

const root = document.documentElement

export function initAnimations() {
  if (root.classList.contains('motion-ready') || root.dataset.motionDisabled === 'true' || !('IntersectionObserver' in window)) return

  root.classList.add('motion-ready')
  const targets = [...document.querySelectorAll('[data-animate]')]
  const reveal = (element) => {
    element.classList.add('is-visible')
    observer.unobserve(element)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) reveal(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

  targets.forEach((element) => {
    const delay = element.dataset.delay
    if (delay) element.style.setProperty('--motion-delay', `${Number(delay)}ms`)
    if (element.closest('[data-hero-sequence]')) {
      // Let the hidden starting style paint before revealing the hero sequence.
      requestAnimationFrame(() => requestAnimationFrame(() => reveal(element)))
    } else {
      observer.observe(element)
    }
  })

  const nav = document.querySelector('[data-motion-nav]')
  if (nav) {
    const updateNav = () => root.classList.toggle('motion-nav-scrolled', window.scrollY > 10)
    updateNav()
    window.addEventListener('scroll', updateNav, { passive: true })
  }

  document.querySelectorAll('[data-stagger]').forEach((group) => {
    [...group.children].forEach((child, index) => {
      child.setAttribute('data-animate', child.hasAttribute('data-motion-image') ? 'zoom' : 'fade-up')
      child.setAttribute('data-delay', String(index * 80))
      observer.observe(child)
    })
  })

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]')
    if (!link) return
    const destination = document.querySelector(link.getAttribute('href'))
    if (destination) destination.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  })
}

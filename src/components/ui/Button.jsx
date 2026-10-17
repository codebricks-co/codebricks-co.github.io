/**
 * Button component
 * variant: 'primary' | 'outline' | 'ghost'
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 rounded-full font-[Inter] font-medium transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary:
      'bg-[#0a0a0a] text-white px-6 py-3 text-sm hover:bg-[#2a2a2a] active:scale-[0.98]',
    outline:
      'border border-[#0a0a0a] text-[#0a0a0a] bg-white px-5 py-2 text-sm hover:bg-[#f2f3f0] active:scale-[0.98]',
    ghost:
      'text-[#0a0a0a] underline underline-offset-4 px-0 py-0 text-sm hover:opacity-70',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} data-motion-interactive className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} data-motion-interactive className={cls} {...props}>
      {children}
    </button>
  )
}

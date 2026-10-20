/**
 * Badge / tag pill component
 */
export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-[#f2f3f0] text-[#3a3d3a]',
    green:   'bg-[#d6edd4] text-[#2d6b2a]',
    white:   'bg-white text-[#3a3d3a] border border-[#e5e7e2]',
    dot:     'bg-white text-[#3a3d3a] border border-[#e5e7e2]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium font-[Inter] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

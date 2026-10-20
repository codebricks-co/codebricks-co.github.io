// ─── Contact / CTA ───────────────────────────────────────────────────────────────
export const PROJECT_MAILTO =
  'https://mail.google.com/mail/?view=cm&fs=1&to=abhinav.bhamer%40gmail.com&su=Connect%20for%20Project%20Requirement'

// ─── Navigation ────────────────────────────────────────────────────────────────
export const navLinks = [
  { id: 'overview', label: 'Overview', href: '#overview', icon: 'grid' },
  { id: 'services', label: 'Services', href: '#services', icon: 'settings' },
  { id: 'studio',   label: 'Studio',   href: '#studio',   icon: 'person' },
  { id: 'contact',  label: 'Contact',  href: '#contact',  icon: 'chat' },
]

// ─── Capabilities Tabs ─────────────────────────────────────────────────────────
export const capabilityTabs = [
  { id: 'web',     label: 'Web apps',      sub: 'Smart AI workflows' },
  { id: 'mobile',  label: 'Mobile apps',   sub: 'Native iOS & Android' },
  { id: 'stores',  label: 'Online stores', sub: 'Headless commerce' },
  { id: 'analytics', label: 'Analytics',   sub: 'Real-time telemetry' },
]

export const capabilityFeatures = [
  {
    number: '01',
    title: 'Single Team',
    description: 'No middle management. Speak directly to senior technical founders.',
  },
  {
    number: '02',
    title: 'Micro-Bespoke',
    description: 'Engineered specifically to solve high-friction bottlenecks.',
  },
  {
    number: '03',
    title: 'Clean Handoff',
    description: 'Complete source code ownership and infrastructure documentation.',
  },
]

// ─── Work / Projects ───────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'acadza',
    name: 'Acadza',
    tags: ['Web App', 'AI Architecture'],
    description:
      'Learning platform and AI study engine built to process adaptive personalized coursework for 12,000+ students.',
    stat: 'Scale: 100k daily queries',
    bgColor: '#eef2f8',
    cardType: 'acadza',
  },
  {
    id: 'mart-commerce',
    name: 'Mart Commerce',
    tags: ['E-Commerce', 'Next.js Headless'],
    description:
      'Sub-second checkout, multi-region catalog synchronization, and a custom merchant fulfillment control deck.',
    stat: 'GMV: $14M Processed',
    bgColor: '#ffffff',
    cardType: 'mart',
    border: true,
  },
  {
    id: 'aura-telemetry',
    name: 'Aura Telemetry',
    tags: ['Analytics', 'Real-Time Data'],
    description:
      'High-density serverless observability interface delivering live predictive revenue projections and event alerts.',
    stat: 'Latency: <14ms',
    bgColor: '#eaf1e7',
    cardType: 'aura',
  },
]

// ─── Studio / Team ─────────────────────────────────────────────────────────────
export const clientLogos = [
  'Fleek', 'Acadza', 'Vanta', 'Linear', 'Raycast', 'Supabase',
]

export const teamMembers = [
  {
    initials: 'AR',
    name: 'Abhinav Raj',
    title: 'Co-founder & Systems Architect',
    description:
      'Specializes in distributed cloud backends, database replication topologies, and high-throughput real-time APIs.',
    focus: 'Focus: Go, Node, Distributed DBs',
  },
  {
    initials: 'AD',
    name: 'Aditya Raj',
    title: 'Co-founder & Product Lead',
    description:
      'Directs interaction design, micro-animations, and client journey strategy. Ensures product experiences feel effortless.',
    focus: 'Focus: Design Systems & Strategy',
  },
  {
    initials: 'MG',
    name: 'Mohit Godara',
    title: 'Co-founder & Full-Stack Engineer',
    description:
      'Bridges tactile client UI with resilient server-side components. Deep background in Next.js, React Native, and AI workflows.',
    focus: 'Focus: Next.js, Mobile & AI',
  },
]

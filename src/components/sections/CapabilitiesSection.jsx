import { useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

// Content for this section (matched to the Upwork profile / resume)
const capabilityTabs = [
  { id: 'backend', label: 'Backend', sub: 'Go & Python APIs' },
  { id: 'compliance', label: 'Compliance', sub: 'KYC, KYB & AML' },
  { id: 'integrations', label: 'Integrations', sub: 'Identity & payments' },
  { id: 'data', label: 'Data & Events', sub: 'Kafka & SQS' },
]

const capabilityContent = {
  backend: {
    badge: 'Backend & Microservices',
    title: 'Backend Systems & APIs',
    description:
      'Design and build reliable backend services in Go, Python and PHP. From new REST APIs to moving a legacy monolith onto microservices without breaking existing clients.',
    turnaround: '3–6 weeks turnaround',
    features: [
      {
        number: '1',
        title: 'Microservice migration',
        description:
          'Moved core onboarding flows from a PHP monolith to a Go service while keeping backward compatibility.',
      },
      {
        number: '2',
        title: 'Workflow engines',
        description:
          'Maker-Checker state machines with policy checks evaluated at runtime.',
      },
      {
        number: '3',
        title: 'Scalable APIs',
        description:
          'Django REST backends serving 400,000+ users and 1,000+ orders a day.',
      },
    ],
    card: {
      header: 'API Gateway',
      initials: 'CR',
      name: 'Client request',
      time: 'Just now',
      message: 'POST /applications: create a new business onboarding case.',
      action: 'Routing to new Go service',
      resultTitle: 'Case created',
      resultText:
        'Responses match the legacy PHP API, so existing clients keep working unchanged.',
      footerLeft: 'Backward compatible',
      footerRight: 'Sample data',
    },
  },

  compliance: {
    badge: 'FinTech Compliance',
    title: 'KYC, KYB & AML Automation',
    description:
      'Automate business and identity verification so approvals move faster and operations teams stop doing repetitive manual reviews.',
    turnaround: '3–6 weeks turnaround',
    features: [
      {
        number: '1',
        title: 'Straight-through approvals',
        description:
          'Zero-touch KYB approvals driven by a settings-based eligibility engine, with no redeploy to change rules.',
      },
      {
        number: '2',
        title: 'Periodic reviews',
        description:
          'Auto-created reviews with missing-information handling and full history tracking.',
      },
      {
        number: '3',
        title: 'Review flows',
        description:
          'Business reviews, role upgrades and liquidator KYC delivered end to end.',
      },
    ],
    card: {
      header: 'KYB Review Queue',
      initials: 'AT',
      name: 'Acme Trading Pte Ltd',
      time: 'Just now',
      message: 'Business registration submitted. Director documents uploaded.',
      action: 'Automated eligibility check',
      resultTitle: 'Approved by policy rules',
      resultText:
        'Identity verified and AML screening clear. No manual review needed.',
      footerLeft: 'Straight-through processing',
      footerRight: 'Sample data',
    },
  },

  integrations: {
    badge: 'Third-Party Integrations',
    title: 'Identity, Risk & Payment Integrations',
    description:
      'Connect your product to the verification, screening and payment providers it depends on, with clean error handling and monitoring.',
    turnaround: '3–6 weeks turnaround',
    features: [
      {
        number: '1',
        title: 'Identity checks',
        description:
          'Onfido and MyInfo integrations for automated KYC approvals, including a Singapore director flow.',
      },
      {
        number: '2',
        title: 'AML screening',
        description:
          'LexisNexis RiskNarrative for AML screening and real-time transaction risk scoring.',
      },
      {
        number: '3',
        title: 'Payments',
        description:
          'Payment gateway integrations, with slow work moved to async workers (Celery, Redis).',
      },
    ],
    card: {
      header: 'Identity Verification',
      initials: 'DC',
      name: 'Director check',
      time: 'Just now',
      message: 'Director submitted an ID document for verification.',
      action: 'Automated identity and AML screening',
      resultTitle: 'Verification passed',
      resultText:
        'Identity confirmed and screening returned no matches. The case moves to approval.',
      footerLeft: 'Illustrative flow',
      footerRight: 'Sample data',
    },
  },

  data: {
    badge: 'Data & Event Pipelines',
    title: 'Event-Driven & Data Pipelines',
    description:
      'Build decoupled, observable systems on AWS SQS and Kafka so data moves in real time and failures are easy to trace.',
    turnaround: '3–6 weeks turnaround',
    features: [
      {
        number: '1',
        title: 'Event-driven design',
        description: 'SQS-based pipelines that decouple KYB and KYC steps.',
      },
      {
        number: '2',
        title: 'Observability',
        description: 'OpenTelemetry distributed tracing across services.',
      },
      {
        number: '3',
        title: 'Real-time data',
        description:
          'Cut batch lag from 6 hours to real time with Apache Kafka at IBM.',
      },
    ],
    card: {
      header: 'Event Stream',
      initials: 'QM',
      name: 'Queue message',
      time: 'Just now',
      message: 'application.submitted event published to the queue.',
      action: 'Consumers processing in parallel',
      resultTitle: 'Pipeline healthy',
      resultText:
        'KYB and KYC checks ran independently and the full request trace is visible end to end.',
      footerLeft: 'Distributed tracing on',
      footerRight: 'Sample data',
    },
  },
}

/** The chat-style card shown in the capabilities right panel (content comes from the active tab) */
function MultiChannelCard({ card }) {
  return (
    <div className="w-full rounded-2xl border border-[#e5e7e2] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#f2f3f0] px-4 py-3">
        <span className="text-[10px] font-semibold tracking-widest text-[#9ca3a0] font-[Inter] uppercase">
          {card.header}
        </span>
        <div className="flex gap-1.5" aria-hidden="true">
          {['#d1d5db', '#d1d5db', '#d1d5db'].map((c, i) => (
            <span key={i} className="h-5 w-5 rounded-md" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>

      {/* Chat thread */}
      <div className="p-4 space-y-3">
        {/* User row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef2f8] text-[11px] font-bold font-[Inter] text-[#3a3d3a]">
              {card.initials}
            </span>
            <span className="text-[13px] font-semibold font-[Inter] text-[#0a0a0a]">
              {card.name}
            </span>
          </div>
          <span className="text-[11px] text-[#9ca3a0] font-[Inter]">{card.time}</span>
        </div>

        {/* User message */}
        <div className="rounded-xl bg-[#f8f9f6] px-3.5 py-2.5">
          <p className="text-[12px] text-[#3a3d3a] font-[Inter]">{card.message}</p>
        </div>

        {/* System action */}
        <div className="flex items-center gap-2 px-1">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
          <p className="text-[11px] font-medium font-[Inter] text-[#3a3d3a]">
            {card.action}
          </p>
        </div>

        {/* Result */}
        <div className="rounded-xl bg-[#f8f9f6] px-3.5 py-2.5 space-y-1">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3 shrink-0">
              <circle cx="5" cy="5" r="4" fill="#22c55e" />
              <path d="M3 5L4.5 6.5L7 3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-[11px] font-medium font-[Inter] text-[#0a0a0a]">
              {card.resultTitle}
            </p>
          </div>
          <p className="text-[11px] text-[#6b7270] font-[Inter]">{card.resultText}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-[#f2f3f0]">
          <span className="text-[11px] text-[#9ca3a0] font-[Inter]">{card.footerLeft}</span>
          <span className="text-[11px] text-[#9ca3a0] font-[Inter]">{card.footerRight}</span>
        </div>
      </div>
    </div>
  )
}

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState(capabilityTabs[0].id)
  const content = capabilityContent[activeTab]

  return (
    <section
      id="services"
      className="bg-white py-20 md:py-28"
      aria-label="Capabilities"
    >
      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        {/* Section header row */}
        <div data-animate="fade-up" className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div>
            <p className="mb-2 text-[11px] font-semibold tracking-widest uppercase text-[#9ca3a0] font-[Inter]">
              Capabilities
            </p>
            <h2 className="font-serif text-[40px] md:text-[48px] font-normal text-[#0a0a0a] leading-tight max-w-[420px]">
              Engineered for endurance.
            </h2>
          </div>
          <p className="lg:max-w-[340px] text-[14px] text-[#6b7270] font-[Inter] leading-relaxed lg:pt-8">
            Building backend systems, APIs and compliance workflows with Go, Python, PHP, JavaScript and C++, from KYC and KYB automation to event-driven microservices on AWS.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* ─── Left: Feature card ─── */}
          <div data-animate="fade-up" className="rounded-2xl border border-[#e5e7e2] bg-[#f8f9f6] p-7">
            {/* Tab strip */}
            <nav
              className="mb-7 flex flex-wrap gap-6 border-b border-[#e5e7e2] pb-4"
              aria-label="Capability categories"
            >
              {capabilityTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex flex-col text-left transition-all duration-150 cursor-pointer ${
                    activeTab === tab.id ? '' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-pressed={activeTab === tab.id}
                >
                  <span
                    className={`text-[13px] font-semibold font-[Inter] ${
                      activeTab === tab.id
                        ? 'text-[#0a0a0a] border-b-[1.5px] border-[#0a0a0a] pb-[2px]'
                        : 'text-[#6b7270]'
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span className="text-[11px] text-[#9ca3a0] font-[Inter] mt-0.5">
                    {tab.sub}
                  </span>
                </button>
              ))}
            </nav>

            {/* Feature content (changes with the active tab) */}
            <div>
              <Badge variant="green" className="mb-5">
                {content.badge}
              </Badge>

              <h3 className="font-serif text-[32px] md:text-[36px] font-normal text-[#0a0a0a] leading-tight mb-4">
                {content.title}
              </h3>

              <p className="text-[14px] text-[#6b7270] font-[Inter] leading-relaxed mb-7">
                {content.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                {/* <Button href="#contact">See examples</Button> */}
                <span className="text-[13px] text-[#9ca3a0] font-[Inter]">
                  {content.turnaround}
                </span>
              </div>

              {/* Numbered features */}
              <div data-stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-[#e5e7e2]">
                {content.features.map((f) => (
                  <div key={f.number}>
                    <p className="text-[12px] font-semibold font-[Inter] text-[#9ca3a0] mb-1">
                      {f.number}. {f.title}
                    </p>
                    <p className="text-[12px] text-[#6b7270] font-[Inter] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right: Image + card ─── */}
          <div className="relative rounded-2xl overflow-hidden min-h-[480px]">
            {/*
              Background image for capabilities right panel.
              Place your image at: public/images/hero-nature.webp
              (Same nature scene as the hero section)
            */}
            <div
              data-animate="zoom"
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/hero-nature.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-white/10" aria-hidden="true" />

            {/* Card overlay */}
            <div className="relative z-10 flex h-full items-center justify-center p-6">
              <div className="w-full max-w-[340px]">
                <MultiChannelCard card={content.card} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

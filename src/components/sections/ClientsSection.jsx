import { useState } from 'react'

const clients = [
  {
    name: 'Fleek',
    logo: '/images/client-fleek.png',
    mark: 'f',
    color: '#476c57',
    logoClass: 'max-h-8 max-w-[150px] object-contain',
    darkLogo: true,
  },
  {
    name: 'Pingbuds',
    logo: '/images/client-pingbuds.webp',
    mark: 'P',
    color: '#526c9b',
    logoClass: 'h-10 w-10 object-contain',
  },
  {
    name: 'Stopgo',
    logo: '/images/client-stopgo.jpeg',
    mark: 'S',
    color: '#5b6a55',
    logoClass: 'h-full w-full object-cover object-[center_30%]',
    crop: true,
  },
]

function ClientLogo({ client }) {
  const [imageFailed, setImageFailed] = useState(false)

  if (!client.logo || imageFailed) {
    return (
      <span
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef2f8] text-[24px] font-semibold"
        style={{ color: client.color }}
      >
        {client.mark}
      </span>
    )
  }

  const image = (
    <img
      src={client.logo}
      alt=""
      className={client.logoClass}
      loading="lazy"
      onError={() => setImageFailed(true)}
    />
  )

  return client.crop ? (
    <div className="h-[56px] w-full max-w-[170px] overflow-hidden rounded-md bg-white">
      {image}
    </div>
  ) : (
    <div className={`flex h-[56px] w-full max-w-[190px] items-center justify-center ${client.darkLogo ? 'rounded-md bg-[#787A91]' : ''}`}>
      {image}
    </div>
  )
}

export default function ClientsSection() {
  return (
    <section id="clients" aria-label="Our clients" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <div data-animate="fade-up" className="mb-10 md:mb-12">
         
          <h2 className="font-serif text-[40px] font-normal leading-tight text-[#0a0a0a] md:text-[48px]">
            Our clients.
          </h2>
        </div>

        <div data-stagger className="grid grid-cols-1 border-y border-[#e5e7e2] sm:grid-cols-3">
          {clients.map((client) => (
            <article
              key={client.name}
              className="flex min-h-[132px] flex-col items-center justify-center gap-3 border-b border-[#e5e7e2] px-6 py-6 transition-colors hover:bg-[#f8f9f6] last:border-b-0 sm:min-h-[148px] sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <ClientLogo client={client} />
              <h3 className="font-[Inter] text-[14px] font-semibold tracking-[-0.02em] text-[#3a3d3a]">
                {client.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

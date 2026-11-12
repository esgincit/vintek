import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { LEGAL } from '../data/content'

const pages: Record<string, { title: string; crumb: string; kicker: string; body: string }> = {
  disclaimer: { title: 'Disclaimer', crumb: 'Disclaimer', kicker: 'Legal', body: LEGAL.disclaimer },
  'company-terms': { title: 'Company Terms', crumb: 'Company Terms', kicker: 'Legal', body: LEGAL.companyTerms },
  'privacy-policy': { title: 'Privacy Policy', crumb: 'Privacy Policy', kicker: 'Legal', body: LEGAL.privacyPolicy },
}

export default function Legal({ page }: { page: 'disclaimer' | 'company-terms' | 'privacy-policy' }) {
  const meta = pages[page]
  return (
    <>
      <PageHeader kicker={meta.kicker} crumb={meta.crumb} title={meta.title} />
      <section className="mx-auto max-w-3xl px-5 pb-10 lg:px-8">
        <Reveal>
          <div className="glass rounded-3xl p-9 md:p-11">
            <p className="leading-[1.9] text-slate-400">{meta.body}</p>
            <p className="mt-8 font-mono text-[11px] tracking-[0.3em] text-slate-500">LAST UPDATED // JANUARY 2026</p>
          </div>
        </Reveal>
      </section>
    </>
  )
}

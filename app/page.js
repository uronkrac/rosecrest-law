'use client'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Home() {
  const ruleRef = useRef(null)

  useEffect(() => {
    const rule = ruleRef.current
    if (rule) {
      rule.style.animation = 'none'
      setTimeout(() => {
        rule.style.animation = 'drawRule 1.2s ease forwards 0.2s'
      }, 50)
    }
  }, [])

  return (
    <main>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.logo}>Rosecrest Law</div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#clarioso">Clarioso</a>
            <a href="#newsletter">Insights</a>
            <a href="#footer">About</a>
          </div>
          <a href="https://calendly.com/rosecrestlaw/rosecrest-law-consultation" target="_blank" className={styles.navCta}>Book a Consultation →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>AI-Native Commercial Legal</div>
            <div className={styles.goldRule} ref={ruleRef}></div>
            <h1 className={styles.headline}>
              Commercial counsel<br />for <em>technology</em><br />companies.
            </h1>
            <p className={styles.subhead}>
              Attorney-led contract review, negotiation, and outside-GC support — enhanced by AI-native workflows and 16 years of practical business judgment.
            </p>
            <div className={styles.heroBtns}>
              <a href="https://calendly.com/rosecrestlaw/rosecrest-law-consultation" target="_blank" className={styles.btnDark}>Book a Consultation →</a>
              <a href="https://clarioso.com" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>Explore Clarioso</a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.demoCard}>
              <div className={styles.demoHeader}>
                <div className={styles.demoHeaderLeft}>
                  <div className={styles.demoIcon}>C</div>
                  <div>
                    <div className={styles.demoTitle}>Master SaaS Agreement</div>
                    <div className={styles.demoCounterparty}>Counterparty: Acme Corporation</div>
                  </div>
                </div>
                <div className={styles.demoBadgeStable}>Stable</div>
              </div>
              <div className={styles.demoBody}>
                <div className={styles.demoScoreBlock}>
                  <div className={styles.demoScoreLabel}>C-Score</div>
                  <svg width="200" height="170" viewBox="0 0 200 170" style={{display:'block',margin:'0 auto'}}>
                    {/* Track — C shape open on right, drawn from bottom to top */}
                    <path d="M 155 135 A 72 72 0 1 1 155 35" stroke="#e5e7eb" strokeWidth="14" fill="none" strokeLinecap="round"/>
                    {/* Fill — starts at 0 (bottom), sweeps counter-clockwise to 67% */}
                    <path d="M 155 135 A 72 72 0 1 1 155 35" stroke="#0891b2" strokeWidth="14" fill="none" strokeLinecap="round" strokeDasharray="239 119"/>
                    {/* 100 label — top right */}
                    <text x="163" y="32" textAnchor="start" dominantBaseline="middle" fill="#9ca3af" fontSize="11">100</text>
                    {/* 0 label — bottom right */}
                    <text x="163" y="138" textAnchor="start" dominantBaseline="middle" fill="#9ca3af" fontSize="11">0</text>
                    {/* Score — shifted right to center in C */}
                    <text x="100" y="82" textAnchor="middle" dominantBaseline="middle" fill="#111827" fontWeight="600" fontSize="42">67</text>
                    {/* /100 */}
                    <text x="134" y="88" textAnchor="start" dominantBaseline="middle" fill="#6b7280" fontSize="12">/ 100</text>
                    {/* Stable pill — centered below score */}
                    <rect x="72" y="106" width="56" height="22" rx="11" fill="#cffafe" stroke="#67e8f9" strokeWidth="1"/>
                    <text x="100" y="117" textAnchor="middle" dominantBaseline="middle" fill="#0e7490" fontSize="11" fontWeight="600">Stable</text>
                  </svg>
                </div>
                <div className={styles.demoNextStep}>
                  <div className={styles.demoNextLabel}>Recommended next step</div>
                  <div className={styles.demoBadgeMonitor}>Monitor</div>
                  <div className={styles.demoNextText}>Monitor this contract and set a renewal check-in. Review and decide next steps.</div>
                </div>
              </div>
              <div className={styles.demoIssues}>
                <div className={styles.demoIssueRow}><span>Liability Cap</span><span className={`${styles.badge} ${styles.high}`}>High</span></div>
                <div className={styles.demoIssueRow}><span>IP Ownership</span><span className={`${styles.badge} ${styles.med}`}>Medium</span></div>
                <div className={styles.demoIssueRow}><span>Indemnification</span><span className={`${styles.badge} ${styles.med}`}>Medium</span></div>
                <div className={styles.demoIssueRow}><span>Termination for Convenience</span><span className={`${styles.badge} ${styles.low}`}>Low</span></div>
              </div>
              <div className={styles.demoFooter}>
                <span className={styles.screenshotTag}>Clarioso</span>
                Contract intelligence — live C-Score analysis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRED BAR */}
      <div className={styles.credsWrap}>
        <div className={styles.creds}>
          <div className={styles.cred}>
            <div className={styles.credNum}>$100M+</div>
            <div className={styles.credLabel}>SaaS negotiations</div>
          </div>
          <div className={styles.cred}>
            <div className={styles.credNum}>16+</div>
            <div className={styles.credLabel}>years commercial experience</div>
          </div>
          <div className={styles.cred}>
            <div className={styles.credNum}>$6B+</div>
            <div className={styles.credLabel}>career contract value</div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionEyebrow}>How it works</div>
          <h2 className={styles.sectionTitle}>From contract to closed.</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.stepTitle}>Understand the deal</div>
              <div className={styles.stepBody}>Plain-English intake to understand goals, context, and priorities. We spot issues early and align on what matters most before review begins.</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.stepTitle}>Surface the risks</div>
              <div className={styles.stepBody}>Clarioso analyzes the contract to identify commercial and legal friction points and benchmark against market standards. You see the issues before we do.</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.stepTitle}>Put it into paper</div>
              <div className={styles.stepBody}>We review, redline, and negotiate with precision — advancing your position and closing the deal with the judgment 16 years builds.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionEyebrow}>Services</div>
          <h2 className={styles.sectionTitle}>What we handle.</h2>
          <div className={styles.services}>
            <div className={styles.service}>
              <div className={styles.serviceTitle}>SaaS & Enterprise Agreements</div>
              <div className={styles.serviceBody}>MSAs, order forms, and enterprise licensing for AI and technology companies at any stage.</div>
            </div>
            <div className={styles.service}>
              <div className={styles.serviceTitle}>AI Governance & Data Terms</div>
              <div className={styles.serviceBody}>AI addenda, data licensing, DPAs, and security exhibits built for the commercial realities of AI products.</div>
            </div>
            <div className={styles.service}>
              <div className={styles.serviceTitle}>Vendor & Partner Contracts</div>
              <div className={styles.serviceBody}>Inbound vendor review, partnership agreements, and reseller arrangements with speed and senior judgment.</div>
            </div>
            <div className={styles.service}>
              <div className={styles.serviceTitle}>Fractional GC Coverage</div>
              <div className={styles.serviceBody}>Ongoing commercial legal support on retainer. Senior in-house coverage without the full-time cost.</div>
            </div>
            <div className={styles.serviceFeatured}>
              <div className={styles.serviceTitle}>AI Visibility Audits</div>
              <div className={styles.serviceBody}>Monthly reports on how Claude, GPT-4o, Perplexity, and Gemini describe your company and competitors — with strategic guidance on what it means for your deals and market position.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionEyebrow}>Products</div>
          <h2 className={styles.sectionTitle}>The tools we built.</h2>
          <div className={styles.products}>
            <div id="clarioso" className={styles.product}>
              <div className={styles.productTag}>Contract Intelligence</div>
              <div className={styles.productName}>Clarioso</div>
              <div className={styles.productDesc}>Upload a contract. Get a scored risk analysis in plain language, flagged clauses, and market-standard alternatives — before you talk to an attorney.</div>
              <a href="https://clarioso.com" className={styles.productLink}>clarioso.com →</a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER + CTA */}
      <section id="newsletter" className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div className={styles.nlLeft}>
            <div className={styles.nlTag}>Rosecrest Weekly</div>
            <div className={styles.nlTitle}>How AI talks about<br />the legal market.</div>
            <div className={styles.nlBody}>Weekly data on how Claude, GPT-4o, Perplexity, and Gemini describe law firms, legal tech, and legal thought leaders — and what it means for your brand.</div>
            <div className={styles.nlCta}>
              <a href="mailto:hello@rosecrestlaw.com" className={styles.btnDark} id="contact">Start with a conversation →</a>
            </div>
          </div>
          <div className={styles.nlRight}>
            <div className={styles.nlForm}>
              <input className={styles.nlInput} type="email" placeholder="your@email.com" />
              <button className={styles.nlSubmit}>Subscribe →</button>
            </div>
            <div className={styles.nlFormLabel}>Subscribe to Rosecrest Weekly — free.</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className={styles.footer}>
        <div className={styles.footerBottomInner}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span className={styles.footerNote}>© 2026 Rosecrest Law PLLC · Pennsylvania · AI-Native Commercial Legal</span>
            <a href="/privacy" className={styles.footerEmail}>Privacy Policy</a>
          </div>
          <a href="mailto:hello@rosecrestlaw.com" className={styles.footerEmail}>hello@rosecrestlaw.com</a>
        </div>
      </footer>

      {/* FLOATING CHAT LAUNCHER */}
      <a
        href="https://jorja-mvp-five.vercel.app/intake"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          background: '#111827',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: 600,
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        Need help? Talk to Jorja →
      </a>
    </main>
  )
}
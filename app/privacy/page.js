import styles from '../page.module.css'

export const metadata = {
  title: 'Privacy Policy | Rosecrest Law',
  description: 'Privacy policy for rosecrestlaw.com, Jorja, and Clarioso.',
}

export default function Privacy() {
  return (
    <main>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="/" className={styles.logo}>Rosecrest Law</a>
          <div className={styles.navLinks}>
            <a href="/#services">Services</a>
            <a href="/#clarioso">Clarioso</a>
            <a href="/#newsletter">Insights</a>
            <a href="/#footer">About</a>
          </div>
          <a href="https://calendly.com/rosecrestlaw/rosecrest-law-consultation" target="_blank" className={styles.navCta}>Book a Consultation →</a>
        </div>
      </nav>

      {/* PRIVACY POLICY */}
      <section className={styles.section}>
        <div className={styles.legalInner}>
          <h1 className={styles.legalTitle}>Privacy Policy</h1>
          <div className={styles.legalDate}>Effective date: July 12, 2026</div>
          <div className={styles.legalRule}></div>

          <h2 className={styles.legalHeading}>Who We Are</h2>
          <p className={styles.legalBody}>
            Rosecrest Law PLLC is a Pennsylvania-licensed commercial law practice. This policy covers rosecrestlaw.com, Jorja (our automated intake tool), and Clarioso (our contract intelligence platform).
          </p>

          <h2 className={styles.legalHeading}>What We Collect</h2>
          <p className={styles.legalBody}>
            <strong>Jorja:</strong> Information you share during an intake conversation — contract type, deal context, urgency, and email address if provided. Conversations are processed through Anthropic&apos;s API and stored in our database. Limited intake details may be shared with Clarioso to personalize your experience if you are routed there.
          </p>
          <p className={styles.legalBody}>
            <strong>Clarioso:</strong> Account information (email, password), contracts you upload, analysis results, and payment information. Contracts are analyzed via Anthropic&apos;s API. Payment processing is handled by Stripe — we do not store payment card data.
          </p>
          <p className={styles.legalBody}>
            <strong>Both:</strong> Standard server logs, IP addresses, and usage data via Vercel.
          </p>

          <h2 className={styles.legalHeading}>How We Use It</h2>
          <ul className={styles.legalList}>
            <li>To route you to the right resource (Jorja)</li>
            <li>To analyze your contracts and provide risk assessments (Clarioso)</li>
            <li>To send renewal alerts and account communications you have opted into</li>
            <li>We do not sell your data to third parties</li>
          </ul>

          <h2 className={styles.legalHeading}>AI Training</h2>
          <p className={styles.legalBody}>
            Contracts uploaded to Clarioso are not used to train AI models — by us or any third party. Anthropic, which powers our AI analysis, does not train on data submitted via the API by default.
          </p>
          <p className={styles.legalBody}>
            Rosecrest Law may use anonymized insights derived from its own internal legal work product to improve its proprietary tools, subject to applicable professional responsibility rules. Client confidential information is never used for this purpose.
          </p>

          <h2 className={styles.legalHeading}>Third Parties</h2>
          <ul className={styles.legalList}>
            <li><strong>Anthropic</strong> — AI processing for Jorja conversations and Clarioso contract analysis. Data is processed via API and not used for model training. Subject to Anthropic&apos;s usage policies.</li>
            <li><strong>Supabase</strong> — Database and authentication. Data stored in the United States.</li>
            <li><strong>Vercel</strong> — Hosting and infrastructure.</li>
            <li><strong>Stripe</strong> — Payment processing. Subject to Stripe&apos;s privacy policy.</li>
          </ul>

          <h2 className={styles.legalHeading}>Data Retention</h2>
          <p className={styles.legalBody}>
            Jorja intake records are retained for 12 months. Clarioso contracts and analysis results are retained for the life of your account plus 90 days after cancellation.
          </p>

          <h2 className={styles.legalHeading}>Your Rights</h2>
          <p className={styles.legalBody}>
            You may request deletion of your data at any time by emailing <a href="mailto:hello@rosecrestlaw.com" style={{ borderBottom: '1px solid #C8A96E' }}>hello@rosecrestlaw.com</a>. We will respond within 30 days. Deletion removes your account, contracts, and associated analysis from our systems, as well as your payment record from Stripe.
          </p>

          <h2 className={styles.legalHeading}>Security</h2>
          <p className={styles.legalBody}>
            Data is encrypted in transit and at rest. Access to intake and contract data is restricted to authenticated users and authorized system processes.
          </p>

          <h2 className={styles.legalHeading}>Changes to This Policy</h2>
          <p className={styles.legalBody}>
            We may update this policy as our products evolve. Material changes will be noted with a revised effective date.
          </p>

          <h2 className={styles.legalHeading}>Contact</h2>
          <p className={styles.legalBody}>
            Rosecrest Law PLLC<br />
            <a href="mailto:hello@rosecrestlaw.com" style={{ borderBottom: '1px solid #C8A96E' }}>hello@rosecrestlaw.com</a><br />
            Pennsylvania
          </p>
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
    </main>
  )
}

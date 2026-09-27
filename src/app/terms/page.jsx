const Section = ({ title, children }) => (
  <div style={{ marginBottom: '32px' }}>
    <h2 style={{ color: '#083e78', fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{title}</h2>
    <div style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.85' }}>{children}</div>
  </div>
)

export default function Terms() {
  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Legal</p>
          <h1 className="page-hero-title">Terms of Use</h1>
          <p className="page-hero-desc">Last updated: September 2026</p>
        </div>
      </section>

      <section style={{ padding: '56px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.85', marginBottom: '32px' }}>
            These Terms of Use ("Terms") govern your access to and use of the website of CM Public School and
            Taare Zameen Par Play School ("the School", "we", "us", "our"). By accessing or using this website,
            you agree to be bound by these Terms. If you do not agree, please do not use this website.
          </p>

          <Section title="1. Use of This Website">
            <p>
              This website is provided to share information about the School, its academics, admissions process,
              notices, and events. You agree to use this website only for lawful purposes and in a manner that
              does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by
              any third party.
            </p>
          </Section>

          <Section title="2. Admission Enquiry Form">
            <p>
              The admission enquiry form on this website is provided to help prospective parents and guardians
              express interest in enrolling a child at the School. By submitting the form, you confirm that the
              information provided is accurate to the best of your knowledge, and you consent to being contacted
              by school staff using the details provided, for the purpose of processing your enquiry.
            </p>
          </Section>

          <Section title="3. No Guarantee of Admission">
            <p>
              Submission of an admission enquiry or application form does not guarantee admission to the School.
              Admission is subject to seat availability, eligibility criteria, verification of documents, and the
              School's internal admission process and decisions, which are at the sole discretion of the School
              management.
            </p>
          </Section>

          <Section title="4. Accuracy of Information">
            <p style={{ marginBottom: '12px' }}>
              We make reasonable efforts to keep the information on this website — including fee structures,
              class details, notices, and contact information — accurate and up to date. However, we do not
              warrant that all content on the website is complete, current, or error-free at all times.
            </p>
            <p>
              In the event of any discrepancy between information on the website and information provided
              directly by the school administration, the information provided directly by the School shall take
              precedence.
            </p>
          </Section>

          <Section title="5. User Responsibilities">
            <p>
              You agree to provide accurate and truthful information when using any form on this website,
              including the admission enquiry and contact forms, and not to misuse the website in any way that
              could damage, disable, or impair its functioning.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All content on this website, including text, images, logos, and design, is the property of the
              School unless otherwise stated, and may not be reproduced or used without prior written permission,
              except for personal, non-commercial reference.
            </p>
          </Section>

          <Section title="7. Third-Party Links and Services">
            <p>
              This website may contain links to third-party websites (such as the UP Board website) or use
              third-party services (such as Cloudinary for image hosting). We are not responsible for the content
              or privacy practices of any third-party websites or services.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              The School shall not be liable for any direct, indirect, or incidental loss or damage arising from
              your use of, or inability to use, this website, to the fullest extent permitted by applicable law.
            </p>
          </Section>

          <Section title="9. Changes to These Terms">
            <p>
              We may update these Terms of Use from time to time. Continued use of the website after any changes
              constitutes acceptance of the revised Terms. The "Last updated" date at the top of this page
              indicates when these Terms were last revised.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by the laws of India, and any disputes arising from or relating to these
              Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of
              India.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about these Terms of Use, please contact us at{' '}
              <a href="mailto:admin@cmtzp.in" style={{ color: '#083e78', fontWeight: '600' }}>admin@cmtzp.in</a>.
            </p>
          </Section>

        </div>
      </section>
    </div>
  )
}

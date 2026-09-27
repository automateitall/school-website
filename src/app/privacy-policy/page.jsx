const Section = ({ title, children }) => (
  <div style={{ marginBottom: '32px' }}>
    <h2 style={{ color: '#083e78', fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{title}</h2>
    <div style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.85' }}>{children}</div>
  </div>
)

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Legal</p>
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p className="page-hero-desc">Last updated: September 2026</p>
        </div>
      </section>

      <section style={{ padding: '56px 2rem', background: 'white' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.85', marginBottom: '32px' }}>
            CM Public School and Taare Zameen Par Play School ("the School", "we", "us", "our") are committed to
            protecting the privacy of our students, parents, guardians, and website visitors. This Privacy Policy
            explains what information we collect, how we use it, and the choices you have. It applies to our
            website and to the school management system used to administer student records.
          </p>

          <Section title="1. Information We Collect">
            <p style={{ marginBottom: '12px' }}>We collect the following categories of information:</p>
            <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
              <li style={{ marginBottom: '8px' }}><strong>Admission enquiries:</strong> when you submit an enquiry or application form on our website, we collect the child's name, parent/guardian name, phone number, email address, and any other details you choose to provide.</li>
              <li style={{ marginBottom: '8px' }}><strong>Student academic records:</strong> for enrolled students, our school management system (CMS) stores academic data such as attendance, marks, report cards, class and section, and related administrative information.</li>
              <li style={{ marginBottom: '8px' }}><strong>Photographs and media:</strong> images used for school activities, notices, and the photo gallery are stored using Cloudinary, a third-party cloud image hosting service.</li>
              <li>General website usage data collected automatically by our hosting providers, such as browser type and pages visited, for the purpose of keeping the website running securely.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
              <li style={{ marginBottom: '8px' }}>To respond to admission enquiries and process applications.</li>
              <li style={{ marginBottom: '8px' }}>To maintain accurate academic and administrative records for enrolled students.</li>
              <li style={{ marginBottom: '8px' }}>To generate report cards, attendance records, and other academic documents.</li>
              <li style={{ marginBottom: '8px' }}>To communicate school notices, circulars, and important updates to parents and guardians.</li>
              <li>To display school activities and events on our website and in our photo gallery.</li>
            </ul>
          </Section>

          <Section title="3. Data Storage and Third-Party Services">
            <p style={{ marginBottom: '12px' }}>
              Student academic data is stored in our internal school management system (CMS), accessible only to
              authorized school staff. Photographs and images shared on our website are stored using
              <strong> Cloudinary</strong>, a third-party image hosting and delivery service, which processes
              images solely for the purpose of storage and display on our website.
            </p>
            <p>
              We do <strong>not</strong> use any third-party advertising networks, and we do not sell, rent, or
              share your personal information with advertisers or marketing companies.
            </p>
          </Section>

          <Section title="4. Data Sharing">
            <p>
              We do not share personal or academic information with third parties except where necessary to
              operate the school (for example, with the education board for statutory reporting), where required
              by law, or with your explicit consent. Staff members only access student data as required for their
              role.
            </p>
          </Section>

          <Section title="5. Data Security">
            <p>
              We take reasonable technical and organizational measures to protect the information we hold,
              including restricting access to student records to authorized staff and using secure, password
              protected systems. However, no method of electronic storage or transmission is completely secure,
              and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain admission enquiry information for as long as reasonably necessary to process the enquiry
              and respond to follow-up questions. Student academic records are retained for the duration of the
              student's enrolment and thereafter as required for record-keeping and regulatory purposes.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Parents and guardians may contact us at any time to review, correct, or request removal of personal
              information provided through an admission enquiry. For enrolled students, requests relating to
              academic records should be made directly to the school administration.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Our website and admission forms may involve information about minors, provided by a parent or
              legal guardian. We do not knowingly collect information directly from children without parental
              involvement.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes arising in connection with this
              policy shall be subject to the jurisdiction of the courts of India.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for
              legal or regulatory reasons. The "Last updated" date at the top of this page indicates when this
              policy was last revised.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how your information is handled, please
              contact us at <a href="mailto:admin@cmtzp.in" style={{ color: '#083e78', fontWeight: '600' }}>admin@cmtzp.in</a>.
            </p>
          </Section>

        </div>
      </section>
    </div>
  )
}

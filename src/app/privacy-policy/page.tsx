import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SuperBae",
  description: "Read the Super Bae Privacy Policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
    <Header />
    <LegalDocument title="Super Bae — Privacy Policy" effectiveDate="[Effective date]">
      <section>
        <h2>1. Who we are</h2>
        <p>Super Bae (&quot;the app&quot;, &quot;we&quot;, &quot;us&quot;) is operated by Space and Beauty Creations Private Limited, [CIN], [Registered office address], Chennai, Tamil Nadu, India. We are the Data Fiduciary for your personal data under India&apos;s Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;).</p>
        <p>This policy covers the Super Bae apps for iPhone and Android, our website, and our related services. By creating an account you agree to it. If you do not agree, do not use the app.</p>
      </section>

      <section>
        <h2>2. Data we collect</h2>
        <p>We collect only what you give us, what the app needs to work, and limited technical data. We do not sell your data and we do not use it for advertising.</p>
        <table>
          <thead><tr><th>Category</th><th>Examples</th><th>Where it comes from</th></tr></thead>
          <tbody>
            <tr><td>Account</td><td>Name, mobile number, email address, password-free login codes, Google account name and email if you sign in with Google</td><td>You, Google</td></tr>
            <tr><td>Profile</td><td>Photo, date of birth, zodiac sign, city, bio and other “About me” details</td><td>You</td></tr>
            <tr><td>Health and wellness</td><td>Menstrual cycle and period dates, symptoms, mood, sickness logs, water intake, sleep, weight, BMI and body measurements, habits</td><td>You</td></tr>
            <tr><td>Journal and notes</td><td>Journal entries, notes, life story, voice notes, photos you attach, private vault contents</td><td>You</td></tr>
            <tr><td>Money</td><td>Expenses and account balances you record in the trackers</td><td>You</td></tr>
            <tr><td>Wardrobe</td><td>Photos of clothes, outfit boards, style preferences</td><td>You</td></tr>
            <tr><td>Partner and couple data</td><td>Your partner connection, shared moods, cycle summaries you choose to share, love notes, date and gift plans, couple journal</td><td>You and your connected partner</td></tr>
            <tr><td>Community</td><td>Posts, photos, comments, replies, likes, clubs joined, reports and blocks</td><td>You</td></tr>
            <tr><td>Location</td><td>Your city, chosen by search or from your device location once at setup (only if you allow it)</td><td>You, your device</td></tr>
            <tr><td>Payments</td><td>Subscription status, plan, renewal and expiry dates, invoice records. We never see or store your full card, UPI or bank details</td><td>Razorpay, Apple</td></tr>
            <tr><td>Referrals</td><td>Referral or affiliate code used and whether a purchase qualified</td><td>You, our systems</td></tr>
            <tr><td>Device and technical</td><td>Device model, OS version, app version, push notification token, crash reports, IP address, timestamps</td><td>Your device, Sentry</td></tr>
          </tbody>
        </table>
        <p><strong>Sensitive data.</strong> Cycle, mood, sickness and body data are health information. We use it only to show you your trackers, predictions and insights, and to share what you choose with your partner. We never use it for advertising, and never share it with employers, insurers or data brokers.</p>
        <p><strong>Device permissions.</strong> The app asks before using your camera (photos for journal, wardrobe and boards), photo library, microphone (voice notes and speech-to-text), location (finding your city) and Face ID (locking your private vault). Face ID is checked by your device; we never receive your face data. You can turn any permission off in your phone&apos;s settings.</p>
      </section>

      <section>
        <h2>3. How we use your data</h2>
        <ul>
          <li>To run your account: sign-in, login codes by SMS or email, account recovery.</li>
          <li>To provide the features: trackers, predictions, reminders, journal, wardrobe, partner sharing, clubs and community.</li>
          <li>To generate AI features you ask for, such as outfit suggestions, clothing background removal, daily fortune, affirmations and zodiac readings.</li>
          <li>To process Premium subscriptions, issue receipts and pay referral commissions.</li>
          <li>To send notifications you have allowed, such as reminders and partner updates.</li>
          <li>To keep the community safe: review reports, remove content, restrict or block accounts, and prevent spam and abuse.</li>
          <li>To fix crashes and improve reliability.</li>
          <li>To meet legal obligations and respond to lawful requests.</li>
        </ul>
        <p>Our legal basis is your consent, given when you create an account and when you enable each feature or permission. You can withdraw consent at any time (section 10); this does not affect processing already done.</p>
      </section>

      <section><h2>4. Sharing with your partner</h2><p>When you connect with a partner, they see only what you choose to share, such as your mood, a cycle summary or shared notes. You can change what you share or disconnect at any time from Settings. After you disconnect, your partner loses access to your newly shared data; items you added to shared spaces (such as a couple journal) may remain visible to them.</p></section>
      <section><h2>5. Community content</h2><p>Posts, comments and replies in clubs are visible to other members of those clubs. Your display name and profile photo appear next to them. Do not post anything you want to keep private. We review reported content and may remove it, and we keep records of reports and moderation decisions to protect users.</p></section>

      <section>
        <h2>6. Service providers</h2>
        <p>We share data only with companies that help us run the app, under contracts that limit their use of it to providing their service to us.</p>
        <table>
          <thead><tr><th>Provider</th><th>Purpose</th><th>Data involved</th></tr></thead>
          <tbody>
            <tr><td>Amazon Web Services (Mumbai, India)</td><td>Servers and photo storage</td><td>All app data</td></tr>
            <tr><td>MongoDB Atlas</td><td>Database</td><td>All app data</td></tr>
            <tr><td>MSG91</td><td>Login codes by SMS and email</td><td>Mobile number, email</td></tr>
            <tr><td>Google</td><td>Google sign-in; Gemini AI features</td><td>Google account name and email; content you submit to an AI feature</td></tr>
            <tr><td>OpenAI</td><td>AI features</td><td>Content you submit to an AI feature</td></tr>
            <tr><td>remove.bg (Kaleido AI)</td><td>Removing backgrounds from clothing photos</td><td>Wardrobe photos you submit</td></tr>
            <tr><td>Razorpay</td><td>Premium payments on Android and web</td><td>Payment and subscription records</td></tr>
            <tr><td>Apple</td><td>Premium payments on iPhone; push notifications</td><td>Subscription records; device token</td></tr>
            <tr><td>Google Firebase Cloud Messaging</td><td>Push notifications on Android</td><td>Device token</td></tr>
            <tr><td>Sentry</td><td>Crash reports</td><td>Device and error details</td></tr>
          </tbody>
        </table>
        <p>We send AI providers only the content needed for the feature you used, not your whole account. They may not use it to train their models under our agreements with them.</p>
        <p>We may also disclose data when required by law, a court order or a government authority, or to protect the safety of users. If our company is merged or sold, your data may transfer to the new owner under this policy, and we will tell you first.</p>
      </section>

      <section><h2>7. Security</h2><p>Data is encrypted in transit (HTTPS) and at rest on our cloud providers. Access to production data is limited to staff who need it. Your private vault can be locked with a PIN or Face ID on your device. No system is perfectly secure; if a breach affects your data, we will notify you and the Data Protection Board of India as the DPDP Act requires.</p></section>
      <section><h2>8. Where your data is stored</h2><p>Our servers run in AWS Mumbai, India. Some providers listed in section 6 process data outside India, including in the United States. We transfer data abroad only to countries not restricted by the Government of India, and under safeguards required by law.</p></section>

      <section>
        <h2>9. How long we keep it</h2>
        <table><thead><tr><th>Data</th><th>Kept for</th></tr></thead><tbody>
          <tr><td>Account and tracker data</td><td>Until you delete it or your account</td></tr>
          <tr><td>Community posts and comments</td><td>Until you or we delete them</td></tr>
          <tr><td>Login codes</td><td>Minutes; deleted after use or expiry</td></tr>
          <tr><td>Reports and moderation records</td><td>Up to 3 years after the decision, for safety and legal claims</td></tr>
          <tr><td>Payment and invoice records</td><td>8 years, as Indian tax and company law requires</td></tr>
          <tr><td>Crash reports</td><td>Up to 90 days</td></tr>
          <tr><td>Data export files</td><td>7 days after they are created</td></tr>
        </tbody></table>
        <p>When you delete your account, we delete or anonymise your personal data within 30 days, including from backups, except records we must keep by law.</p>
      </section>

      <section>
        <h2>10. Your rights</h2>
        <p>Under the DPDP Act you can:</p>
        <ul>
          <li><strong>Access</strong> a summary of your data and how we process it. Use Settings → Download my data (CSV or JSON).</li>
          <li><strong>Correct and update</strong> your data in the app at any time.</li>
          <li><strong>Delete</strong> individual entries, or your whole account in Settings → Delete account.</li>
          <li><strong>Withdraw consent</strong> for a feature or permission, or for all processing by deleting your account.</li>
          <li><strong>Nominate</strong> a person to exercise these rights if you die or become incapacitated.</li>
          <li><strong>Raise a grievance</strong> with us (section 12), and if unresolved, with the Data Protection Board of India.</li>
        </ul>
        <p>We respond to requests within 30 days. We may ask you to verify your identity first.</p>
      </section>
      <section><h2>11. Children</h2><p>Super Bae is for adults aged 18 and over. We do not knowingly collect data from anyone under 18. If you believe a child has created an account, write to <a href="mailto:privacy@superbae.co">privacy@superbae.co</a> and we will delete it.</p></section>
      <section>
        <h2>12. Grievance and contact</h2>
        <p><strong>Grievance Officer</strong><br />
          Space and Beauty Creations Private Limited<br />
          782, 1st Floor, Anna Salai, Above Sundaram Honda,<br />
          Opp. YMCA Grounds, CIT Nagar East, Nandanam,<br />
          Chennai, Tamil Nadu, India 600 035<br />
          Email: <a href="mailto:support@superbae.co">support@superbae.co</a>
        </p>
        <p>We acknowledge grievances within 24 hours and resolve them within 15 days.</p>
      </section>
      <section><h2>13. Changes to this policy</h2><p>We will post changes here and update the effective date. For significant changes, we will notify you in the app before they take effect.</p></section>
    </LegalDocument>
    <Footer />
    </>
  );
}

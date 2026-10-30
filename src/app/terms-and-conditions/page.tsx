import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | SuperBae",
  description: "Read the Super Bae Terms and Conditions.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
    <Header />
    <LegalDocument title="Super Bae — Terms and Conditions" effectiveDate="[Effective date]">
      <p>These Terms are an agreement between you and Space and Beauty Creations Private Limited, [Registered office address], Chennai, India (&quot;we&quot;, &quot;us&quot;). By creating an account or using Super Bae you accept these Terms and the Privacy Policy.</p>

      <section><h2>1. Who can use Super Bae</h2><p>You must be at least 18 years old and able to enter a binding contract under Indian law. You may hold one personal account. You must not use the app if we have previously banned you.</p></section>
      <section><h2>2. Your account</h2><p>Give accurate details and keep your mobile number and email current, since we use them for login and recovery. You are responsible for activity on your account. Tell us at <a href="mailto:support@superbae.co">support@superbae.co</a> if you think someone else has accessed it.</p></section>
      <section><h2>3. Not medical advice</h2><p>Cycle predictions, fertile-window estimates, BMI, mood insights and other health features are for general information only. They are not medical advice, diagnosis or treatment, and must not be used as contraception or to plan or avoid pregnancy. Always consult a qualified doctor about health concerns. In an emergency, call 112.</p><p>Fortune, affirmation and zodiac content is for entertainment.</p></section>

      <section>
        <h2>4. Premium subscription</h2>
        <p>Most features are free. Super Bae Premium is a yearly subscription at ₹2,999 per year (taxes included where applicable), or the local price shown in the app.</p>
        <p><strong>On iPhone (Apple In-App Purchase)</strong></p>
        <ul>
          <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
          <li>The subscription renews automatically each year unless you turn off auto-renew at least 24 hours before the end of the current period.</li>
          <li>Your account is charged for renewal within 24 hours before the end of the current period.</li>
          <li>You can manage or cancel in your Apple ID&apos;s Subscriptions settings, or from Settings → Subscription in the app.</li>
          <li>Refunds are handled by Apple under its policies.</li>
        </ul>
        <p><strong>On Android and web (Razorpay AutoPay)</strong></p>
        <ul>
          <li>You authorise yearly automatic charges through Razorpay using your chosen method (card, UPI or bank mandate).</li>
          <li>You can cancel AutoPay at any time in Settings → Subscription. Premium continues until the end of the period you paid for.</li>
          <li>Payments are non-refundable except where required by law, or where we charged you in error. Write to <a href="mailto:support@superbae.co">support@superbae.co</a> within 7 days of a charge.</li>
        </ul>
        <p>We may change the price for future periods. We will tell you at least 30 days before a renewal at a new price, and you can cancel before it applies.</p>
      </section>

      <section>
        <h2>5. Community rules</h2>
        <p>Clubs and community are for respectful conversation. You must not post content that:</p>
        <ul>
          <li>harasses, bullies, threatens or encourages violence or self-harm;</li>
          <li>is sexually explicit, or sexualises anyone under 18;</li>
          <li>is hateful based on religion, caste, race, gender, sexuality or disability;</li>
          <li>shares someone&apos;s private information, or impersonates anyone;</li>
          <li>infringes copyright or other rights;</li>
          <li>is spam, scams, unauthorised advertising, or false and misleading;</li>
          <li>breaks any Indian law.</li>
        </ul>
        <p>You must accept the Community Guidelines before posting. Anyone can report a post, comment or account, and block other users. We review reports and may remove content, limit features, or suspend or ban accounts, with or without notice. You can raise a grievance about a moderation decision with our Grievance Officer.</p>
      </section>

      <section><h2>6. Your content</h2><p>You keep ownership of everything you create. You grant us a non-exclusive, royalty-free, worldwide licence to store, process, display and transmit your content only to operate the app for you and the people you share it with. This licence ends when you delete the content or your account, except for copies other users have already received in shared spaces and records we must keep by law.</p></section>
      <section><h2>7. Acceptable use</h2><p>Do not reverse-engineer, scrape or overload the app; access other users&apos; data without permission; get around rate limits, paywalls or security; create fake accounts or referral fraud; or use the app for anything unlawful. Referral and affiliate commissions are paid only on verified purchases and may be withheld for fraud.</p></section>
      <section><h2>8. Our app and intellectual property</h2><p>Super Bae, its name, logo, design, code and content are owned by us or our licensors. We give you a personal, non-transferable, revocable licence to use the app under these Terms. Third-party services in the app (Apple, Google, Razorpay, AI providers) are subject to their own terms.</p></section>
      <section><h2>9. AI features</h2><p>AI-generated suggestions, readings and edited images may be inaccurate or unsuitable. Use your judgement before relying on them.</p></section>
      <section><h2>10. Availability and changes</h2><p>We may update, change or remove features, and the service may sometimes be unavailable. If we discontinue Premium, we will refund the unused portion of a paid period where the law requires.</p></section>
      <section><h2>11. Ending your use</h2><p>You can delete your account at any time in Settings. Deleting the account does not cancel an Apple subscription; cancel it in your Apple ID settings. We may suspend or end your account if you breach these Terms or the law, or to protect other users.</p></section>
      <section><h2>12. Disclaimers and limits of liability</h2><p>The app is provided &quot;as is&quot; and &quot;as available&quot;. To the extent the law allows, we are not liable for indirect or consequential loss, lost data or lost profits. Our total liability to you for any claim is limited to the amount you paid us in the 12 months before the claim. Nothing here limits liability that cannot be limited under Indian law.</p></section>
      <section><h2>13. Indemnity</h2><p>You agree to compensate us for claims arising from content you post or your breach of these Terms.</p></section>
      <section><h2>14. Governing law and disputes</h2><p>These Terms are governed by the laws of India. Courts in Chennai, Tamil Nadu have exclusive jurisdiction. Please contact us first; most issues can be resolved informally.</p></section>
      <section><h2>15. Apple-specific terms</h2><p>If you downloaded the app from the App Store: these Terms are between you and us, not Apple. Apple has no obligation to provide maintenance or support. If the app fails to meet any warranty, you may notify Apple for a refund of the purchase price, and Apple has no other warranty obligation. Apple is not responsible for claims about the app, including product liability, legal compliance or intellectual-property claims. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them.</p></section>
      <section><h2>16. Changes and contact</h2><p>We may update these Terms and will notify you in the app of material changes. Continuing to use the app after they take effect means you accept them.</p><p>Questions: <a href="mailto:support@superbae.co">support@superbae.co</a> · Grievances: [Grievance Officer name], <a href="mailto:privacy@superbae.co">privacy@superbae.co</a></p></section>
    </LegalDocument>
    <Footer />
    </>
  );
}

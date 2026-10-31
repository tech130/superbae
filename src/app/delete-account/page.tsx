import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import "./delete-account.css";

export const metadata: Metadata = {
  title: "Delete your Super Bae account",
  description: "Learn how to delete your Super Bae account and data.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main className="delete-account">
        <article className="delete-account__content">
        <h1>Delete your Super Bae account</h1>
        <p className="delete-account__muted">
          Super Bae is made by Space and Beauty Creations Private Limited, Chennai, India.
        </p>

        <section>
          <h2>Option 1: In the app</h2>
          <div className="delete-account__box">
            <ol>
              <li>Open Super Bae.</li>
              <li>Go to <strong>Settings → Account actions → Delete account</strong>.</li>
              <li>Confirm. Your account is deleted.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2>Option 2: Without the app</h2>
          <div className="delete-account__box">
            <p>
              Email <a href="mailto:support@superbae.co?subject=Delete%20my%20account">support@superbae.co</a> with the subject <strong>“Delete my account”</strong>.
            </p>
            <p>Include the mobile number you signed up with. We will confirm it is you and delete your account within 30 days.</p>
          </div>
        </section>

        <section>
          <h2>What we delete</h2>
          <ul>
            <li>Your profile (name, photo, date of birth, city)</li>
            <li>All trackers and health logs (cycle, mood, sickness, intimacy, water, habits and others)</li>
            <li>Journal entries, notes and voice notes</li>
            <li>Photos and wardrobe</li>
            <li>Your partner connection and shared data</li>
            <li>Your community posts, comments and likes</li>
          </ul>
          <p>Everything else is deleted within 30 days, including from backups.</p>
        </section>

        <section>
          <h2>What we keep, and for how long</h2>
          <ul>
            <li><strong>Payment and invoice records:</strong> 8 years, because Indian tax law requires it.</li>
            <li><strong>Community safety reports:</strong> up to 3 years.</li>
          </ul>
          <p>Deleted items are removed from our servers within 30 days, including from backups. Payment records are kept for 8 years, as Indian tax law requires.</p>
        </section>

        <section>
          <h2>Delete some of your data, and keep your account</h2>
          <ul>
            <li><strong>Single entries:</strong> open any tracker log, journal entry, note, photo or wardrobe item in the app and tap Delete.</li>
            <li><strong>Community posts and comments:</strong> tap ••• on the post or comment → Delete.</li>
            <li><strong>Partner data:</strong> Settings → Partner → Disconnect. Your partner stops seeing anything you shared.</li>
            <li><strong>Anything else</strong> (for example, all your cycle data or all your photos): email <a href="mailto:support@superbae.co?subject=Delete%20my%20data">support@superbae.co</a> with the subject “Delete my data”, your registered mobile number, and what you want deleted. We delete it within 30 days.</li>
          </ul>
        </section>

        <p className="delete-account__muted">
          If you subscribed to Premium through Google Play or the App Store, deleting your account does not cancel the subscription. Cancel it in Google Play → Payments &amp; subscriptions, or in your Apple ID settings.
        </p>
        <p className="delete-account__muted">
          Questions: <a href="mailto:support@superbae.co">support@superbae.co</a> · <Link href="/privacy-policy">Privacy Policy</Link>
        </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

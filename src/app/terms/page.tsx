import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#5fa06a] via-[#4e915c] to-[#4a8b57] px-4 py-10 sm:px-6 sm:py-14">
      <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/40 bg-[#ecf4ee] p-6 text-[#193626] shadow-2xl sm:p-8">
        <span className="inline-flex rounded-full bg-[#dceadf] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#2d5b40]">
          Terms
        </span>

        <h1 className="mt-4 text-3xl font-black leading-tight sm:text-6xl">
          Simple terms for using Tarsi.
        </h1>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#365843]">
          <p>
            Tarsi is provided as a personal budgeting tool for individual use. You are responsible for how you use the app and
            for keeping your device and backups secure.
          </p>

          <p>
            Tarsi may be available as a one-time purchase, and it may also offer an optional Tarsi Cloud subscription for cloud
            sync across supported devices and access to Gemini API-powered AI features. The subscription is optional and is not
            required to use the local, on-device features of the app.
          </p>

          <p>
            If you purchase a Tarsi Cloud subscription through the App Store, billing, renewals, cancellations, refunds, and
            other platform purchase policies are handled by Apple under Apple&apos;s own terms. Unless stated otherwise in the
            App Store listing, subscriptions automatically renew until canceled through your Apple account settings.
          </p>

          <p>
            Cloud sync and AI features depend on internet connectivity, third-party services, and compatible app versions. We
            may change, improve, limit, or discontinue optional cloud or AI features if needed for security, legal, technical,
            or product reasons.
          </p>

          <p>
            When you use AI features, outputs are generated automatically and may sometimes be inaccurate, incomplete, or
            unsuitable for your situation. You remain responsible for reviewing AI-generated content before relying on it.
          </p>

          <p>
            Tarsi is provided on an &quot;as is&quot; basis without guarantees of uninterrupted availability, compatibility with every
            device configuration, or fitness for any particular financial outcome.
          </p>

          <p>
            These terms may be updated from time to time, and this page will reflect the latest version.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1f3e2d] shadow transition hover:-translate-y-0.5 hover:bg-[#f8fffa]"
        >
          <span aria-hidden="true">→</span>
          Back to home
        </Link>
      </section>
    </main>
  );
}

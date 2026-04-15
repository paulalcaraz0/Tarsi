import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#5fa06a] via-[#4e915c] to-[#4a8b57] px-4 py-10 sm:px-6 sm:py-14">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/40 bg-[#ecf4ee] p-6 text-[#193626] shadow-2xl sm:p-8">
        <span className="inline-flex rounded-full bg-[#dceadf] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#2d5b40]">
          Privacy Policy
        </span>

        <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
          Privacy for local use, cloud sync, and optional AI features.
        </h1>

        <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#365843]">
          <p>
            Tarsi is designed to work locally on your device by default. If you use Tarsi without an account or subscription,
            your budgeting information remains on your device except when you choose to export, back up, or share it yourself.
          </p>

          <p>
            Tarsi also offers an optional Tarsi Cloud subscription. If you choose to subscribe, we may collect and store the
            information needed to create and maintain your account, sync your data across your devices, manage your
            subscription status, and provide cloud access to the features you request.
          </p>

          <p>
            Tarsi may also offer optional AI features that use the Gemini API to generate responses or assist with app
            features. When you use those AI features, the content you submit for that request may be sent to the AI service
            provider only to process your request and return a result.
          </p>

          <p>
            We do not sell your personal information. We do not use advertising trackers for third-party ad targeting, and we
            do not use your financial data for data brokerage.
          </p>

          <p>
            If you contact support by email, we use the information you send only to respond, troubleshoot, and support your
            request.
          </p>

          <p>
            If this privacy policy changes, this page will be updated to reflect the current version. Continued use of Tarsi
            after an update means you accept the revised policy.
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

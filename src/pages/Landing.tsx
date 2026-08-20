const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col landing-background">
      {/* Top Navigation */}
      <nav className="w-full sticky top-0 z-50 bg-transparent font-headline antialiased">
        <div className="flex justify-between items-center px-8 py-5 max-w-[1600px] mx-auto">
          <span className="text-2xl font-bold tracking-tight text-primary-foreground">
            Pyro Press Publication
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}about`}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
              aria-label="About"
            >
              <span className="material-symbols-outlined text-xl">info</span>
            </a>
            {/* TEMPORARY: Sudo login buttons — remove when real auth is implemented */}
            <button
              onClick={() => { localStorage.setItem('sudo-role', 'guest'); window.location.href = `${import.meta.env.BASE_URL}dashboard/guest`; }}
              className="px-4 py-2 text-xs font-semibold text-primary-foreground border border-primary-foreground/20 rounded-md hover:bg-white/10 transition-colors"
            >
              Guest
            </button>
            <button
              onClick={() => { localStorage.setItem('sudo-role', 'staff'); window.location.href = `${import.meta.env.BASE_URL}dashboard/staff`; }}
              className="px-4 py-2 text-xs font-semibold text-primary-foreground border border-primary-foreground/20 rounded-md hover:bg-white/10 transition-colors"
            >
              Staff
            </button>
            <button
              onClick={() => { localStorage.setItem('sudo-role', 'spa'); window.location.href = `${import.meta.env.BASE_URL}dashboard/spa`; }}
              className="px-4 py-2 text-xs font-semibold text-primary-foreground border border-primary-foreground/20 rounded-md hover:bg-white/10 transition-colors"
            >
              SPA
            </button>
            <a
              href={`${import.meta.env.BASE_URL}login`}
              className="px-5 py-2 text-sm font-semibold text-primary-foreground border border-primary-foreground/30 rounded-md hover:bg-white/10 transition-colors"
            >
              Log In
            </a>
            <a
              href={`${import.meta.env.BASE_URL}signup`}
              className="px-5 py-2 text-sm font-bold bg-primary-foreground text-primary rounded-md hover:bg-white transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center max-w-3xl mx-auto gap-6">
        <p className="text-primary-foreground/50 font-label text-sm tracking-[0.25em] uppercase">
          Editorial Workflow Platform
        </p>
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
          From Draft to Print,{" "}
          <span className="italic text-primary-foreground/70">Streamlined.</span>
        </h1>
        <p className="text-primary-foreground/60 font-body text-lg max-w-xl leading-relaxed">
          The all-in-one workspace for Calatagan Senior High School's editorial staff — submit articles, review drafts, and manage every issue from one dashboard.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href={`${import.meta.env.BASE_URL}signup`}
            className="px-8 py-3 text-sm font-bold bg-primary-foreground text-primary rounded-md hover:bg-white transition-colors"
          >
            Get Started
          </a>
          <a
            href={`${import.meta.env.BASE_URL}about`}
            className="px-8 py-3 text-sm font-semibold text-primary-foreground border border-primary-foreground/30 rounded-md hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* How It Works */}
      <section className="px-8 pb-24 pt-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-primary-foreground/40 font-label text-xs tracking-[0.3em] uppercase mb-12">
            How It Works
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "edit_note",
                title: "Writers Submit",
                desc: "Staff writers log in and upload their articles directly to the platform — no more email chains or lost files.",
              },
              {
                icon: "rate_review",
                title: "Reviewers Check",
                desc: "Grammarians and the school paper advisor review every submission, flag edits, and approve articles for layout.",
              },
              {
                icon: "newspaper",
                title: "Editor Publishes",
                desc: "The Editor-in-Chief oversees the entire pipeline, gives final approval, and pushes articles to print-ready status.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="border border-primary-foreground/10 rounded-lg p-8 flex flex-col gap-4 hover:border-primary-foreground/25 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl text-primary-foreground/50">
                  {step.icon}
                </span>
                <h3 className="font-headline text-xl font-semibold text-primary-foreground">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/50 font-body text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-primary-foreground/10">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <span className="font-headline text-sm text-primary-foreground/40">
            © 2026 Pyro Press Publication
          </span>
          <a
            href={`${import.meta.env.BASE_URL}about`}
            className="text-sm text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors font-body"
          >
            About
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

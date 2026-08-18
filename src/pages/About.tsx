import signatureImg from "@/assets/signature-cropped.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col landing-background">
      {/* Top Navigation */}
      <nav className="w-full sticky top-0 z-50 bg-transparent font-headline antialiased">
        <div className="flex justify-between items-center px-8 py-5 max-w-[1600px] mx-auto">
          <a href="/" className="text-2xl font-bold tracking-tight text-primary-foreground">
            Pyro Press Publication
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/about"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
              aria-label="About"
            >
              <span className="material-symbols-outlined text-xl">info</span>
            </a>
            <a
              href="/login"
              className="px-5 py-2 text-sm font-semibold text-primary-foreground border border-primary-foreground/30 rounded-md hover:bg-white/10 transition-colors"
            >
              Log In
            </a>
            <a
              href="/signup"
              className="px-5 py-2 text-sm font-bold bg-primary-foreground text-primary rounded-md hover:bg-white transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 px-8 py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">

          {/* About Section */}
          <section className="flex flex-col gap-6">
            <p className="text-primary-foreground/40 font-label text-xs tracking-[0.3em] uppercase">
              About
            </p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              What is this website?
            </h1>
            <div className="flex flex-col gap-4 text-primary-foreground/60 font-body text-base leading-relaxed">
              <p>
                This is an editorial workflow platform built specifically for the publication staff of Calatagan Senior High School. It was created to solve a real problem — managing the flow of articles from draft to print was messy, scattered across group chats and email threads, with no clear system in place.
              </p>
              <p>
                This platform gives the editorial staff a proper workspace. Writers log in and submit their articles directly. Grammarians review submissions for language and clarity. The School Paper Advisor checks and approves content. And the Editor-in-Chief oversees the entire pipeline, giving final approval before articles move to layout and publication.
              </p>
              <p>
                No more lost drafts. No more chasing people for updates. Everything lives in one place, with a clear chain of review from submission to print.
              </p>
              <p>
                Beyond workflow, this platform also serves as an archive — preserving every editorial staff member, every article written, and every final newspaper published. A way to save and remember the people and work behind each issue, for years to come.
              </p>
            </div>
          </section>

          {/* Why It Was Made */}
          <section className="flex flex-col gap-6">
            <p className="text-primary-foreground/40 font-label text-xs tracking-[0.3em] uppercase">
              Purpose
            </p>
            <h2 className="font-headline text-3xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              Why it was made
            </h2>
            <div className="flex flex-col gap-4 text-primary-foreground/60 font-body text-base leading-relaxed">
              <p>
                As the sole Layout Artist of Calatagan Senior High School during S.Y. 2026–2028, every article eventually came down to me — to lay out into a beautifully made newspaper. But before I could even start layouting, I had to chase down every submission, check if each article had a headline, a sub-headline, an attached image, a photo journal, and whether it had already been reviewed by the Managing Editor and the Editor-in-Chief. There was no central system — just scattered messages and files across multiple platforms.
              </p>
              <p>
                It was overwhelming and frustrating. It became one of the main reasons I ended up passing my final newspaper late during Grade 11 — something that really stuck with me.
              </p>
              <p>
                That frustration is what drove me to build this website. Not only to help myself during Grade 12, but to leave behind a proper system for the next generation of editorial staff who will face the same problems on different issues of the newspaper.
              </p>
            </div>
          </section>

          {/* School Paper Advisor */}
          <section className="flex flex-col gap-6">
            <p className="text-primary-foreground/40 font-label text-xs tracking-[0.3em] uppercase">
              School Paper Advisor
            </p>
            <h2 className="font-headline text-3xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              Ma'am Maycee P. Mariano
            </h2>
            <p className="text-primary-foreground/60 font-body text-base leading-relaxed">
              The current School Paper Advisor (SPA) of Pyro Press Publication, guiding the editorial staff and ensuring that every issue meets the standards of responsible and quality student journalism.
            </p>
          </section>

          {/* Credits */}
          <section className="border border-primary-foreground/10 rounded-lg p-10 flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3 text-primary-foreground/50">
              <span className="material-symbols-outlined text-2xl">group</span>
              <span className="font-headline text-xl font-semibold text-primary-foreground">Credits</span>
            </div>
            <p className="text-primary-foreground/40 font-body text-sm">
              The person behind this platform.
            </p>

            <div className="flex flex-col items-center gap-2 mt-4">
              <h3 className="font-headline text-2xl font-bold text-primary-foreground">
                Franzes Aiel R. Opiniano
              </h3>
              <p className="text-primary-foreground/50 font-body text-sm tracking-wide">
                STEM 11 EULER · Layout Artist & Lead Developer
              </p>
              <p className="text-primary-foreground/40 font-body text-xs mt-1">
                Editorial Staff Member, S.Y. 2026–2028
              </p>
              <img
                src={signatureImg}
                alt="Signature of Franzes Aiel R. Opiniano"
                className="w-48 mt-4 opacity-80 invert"
              />
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-primary-foreground/10">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <span className="font-headline text-sm text-primary-foreground/40">
            © 2026 Pyro Press Publication
          </span>
          <a
            href="/"
            className="text-sm text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors font-body"
          >
            Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;

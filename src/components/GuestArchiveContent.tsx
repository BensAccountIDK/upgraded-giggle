const publishedIssues = [
  { title: "Winter Issue 2023", date: "December 2023", articles: 12, status: "Published" },
  { title: "Fall Issue 2023", date: "September 2023", articles: 15, status: "Published" },
  { title: "Summer Issue 2023", date: "June 2023", articles: 10, status: "Published" },
  { title: "Spring Issue 2023", date: "March 2023", articles: 14, status: "Published" },
];

const GuestArchiveContent = () => {
  return (
    <main className="flex-1 px-5 sm:px-6 md:px-10 lg:px-12 pb-8 md:pb-10 overflow-x-hidden">
      <header className="pt-6 md:pt-8 pb-4 md:pb-6 border-b border-outline-variant/10 mb-6 md:mb-8">
        <div className="max-w-2xl">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface leading-tight">Archive</h1>
          <p className="font-body text-base md:text-lg text-secondary mt-3 md:mt-4 leading-relaxed">
            Browse all published issues and articles from the Pyro Press Publication.
          </p>
        </div>
      </header>

      {/* Search */}
      <div className="bg-card p-4 mb-6 md:mb-8 rounded-xl border border-outline-variant/10 shadow-sm flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="relative w-full sm:flex-1 sm:min-w-[240px]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">search</span>
          <input
            className="w-full pl-9 pr-4 py-2 bg-muted border border-stone-200 rounded text-sm focus:ring-1 focus:ring-primary-container focus:border-primary-container"
            placeholder="Search the archive..."
            type="text"
          />
        </div>
        <select className="w-full sm:w-auto sm:min-w-[140px] bg-muted border border-stone-200 rounded text-sm px-3 py-2">
          <option value="">All Issues</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>

      {/* Published Issues */}
      <section className="mb-8 md:mb-10">
        <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4 md:mb-5">Published Issues</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {publishedIssues.map((issue) => (
            <a
              key={issue.title}
              href="#"
              className="bg-card p-5 md:p-6 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{issue.title}</h4>
                  <p className="text-sm text-secondary mt-1">{issue.date}</p>
                </div>
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded font-bold uppercase tracking-tighter">
                  {issue.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">description</span>
                  {issue.articles} articles
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  View Issue
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Editorial Staff Archive */}
      <section className="mb-8 md:mb-10">
        <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4 md:mb-5">Editorial Staff</h3>
        <div className="bg-card p-4 md:p-5 lg:p-6 rounded-xl border border-outline-variant/10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["2026-2028", "2028-2030"].map((year) => (
              <a
                key={year}
                href="#"
                className="p-4 rounded-lg border border-outline-variant/10 hover:bg-muted transition-colors group cursor-pointer"
              >
                <h5 className="font-bold text-on-surface group-hover:text-primary transition-colors">School Year {year}</h5>
                <p className="text-xs text-secondary mt-1">View editorial staff roster</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuestArchiveContent;

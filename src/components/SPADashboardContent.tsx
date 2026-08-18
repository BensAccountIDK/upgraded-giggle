const metricCards = [
  { label: "Total Articles", value: "12", active: false },
  { label: "Pending Review", value: "4", active: true },
  { label: "In Progress", value: "3", active: false },
  { label: "Approved", value: "2", active: false },
  { label: "Published", value: "8", active: false },
];

const SPADashboardContent = () => {
  return (
    <main className="flex-1 px-8 lg:px-12 pb-24 overflow-x-hidden">
      <header className="pt-12 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/10 mb-8">
        <div className="max-w-2xl">
          <h1 className="font-headline text-5xl font-bold text-on-surface leading-tight">Advisor Dashboard</h1>
          <p className="font-body text-lg text-secondary mt-4 leading-relaxed">
            Welcome back, Advisor. There are <span className="text-primary font-bold">4 articles</span> pending your final approval for the upcoming Winter Issue.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-high px-6 py-4 rounded-lg flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Press Deadline</span>
            <span className="font-headline text-2xl font-bold text-primary-container">Dec 14, 2023</span>
          </div>
          <div className="bg-surface-container-high px-6 py-4 rounded-lg flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Active Staff</span>
            <span className="font-headline text-2xl font-bold text-primary-container">14</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {metricCards.map((card) => (
          <button
            key={card.label}
            className={`metric-card-filter flex flex-col items-start p-5 bg-card border border-outline-variant/20 rounded-xl transition-all text-left shadow-sm group ${
              card.active ? "ring-2 ring-primary-container" : ""
            }`}
          >
            <span className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
              card.active ? "text-primary-container" : "text-secondary group-hover:text-primary-container"
            }`}>
              {card.label}
            </span>
            <span className="text-3xl font-headline font-bold text-on-surface">{card.value}</span>
          </button>
        ))}
      </div>

      <section className="mb-12 bg-card p-6 rounded-xl border border-outline-variant/10 shadow-sm">
        <h4 className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6 border-b border-outline-variant/10 pb-2">
          Recent Activity
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="flex gap-4 group cursor-pointer" href="#">
            <div className="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-sm">check_circle</span>
            </div>
            <div>
              <p className="text-sm text-on-surface"><span className="font-bold">Campus Housing Crisis</span> approved.</p>
              <p className="text-[10px] text-secondary mt-1 uppercase font-bold">14 mins ago</p>
            </div>
          </a>
          <a className="flex gap-4 group cursor-pointer" href="#">
            <div className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-sm">person_add</span>
            </div>
            <div>
              <p className="text-sm text-on-surface"><span className="font-bold">New staff member</span> joined the team.</p>
              <p className="text-[10px] text-secondary mt-1 uppercase font-bold">1 hour ago</p>
            </div>
          </a>
          <div className="flex items-center">
            <a className="text-xs font-bold text-primary-container uppercase hover:underline" href="#">View all activity →</a>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-6 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-3xl font-bold">All Articles</h3>
          <div className="flex gap-2">
            <button className="bg-card border border-outline-variant/20 px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-muted transition-colors">
              Export CSV
            </button>
            <button className="bg-card border border-outline-variant/20 px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-muted transition-colors">
              Staff Report
            </button>
          </div>
        </div>
        <div className="bg-muted border border-outline-variant/20 rounded-xl p-4 flex flex-wrap gap-3 items-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary mr-2">Quick Actions:</span>
          <button className="bg-primary-container text-primary-foreground px-4 py-2 rounded text-xs font-bold flex items-center gap-2 hover:bg-primary transition-all shadow-sm active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm">add</span> Create New Article
          </button>
          <button className="bg-card border border-outline-variant/20 px-4 py-2 rounded text-xs font-bold flex items-center gap-2 hover:bg-muted transition-all text-on-surface shadow-sm active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm">person_add</span> Assign Reviewer
          </button>
          <button className="bg-card border border-outline-variant/20 px-4 py-2 rounded text-xs font-bold flex items-center gap-2 hover:bg-muted transition-all text-on-surface shadow-sm active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm">sync_alt</span> Change Status
          </button>
          <button className="bg-card border border-green-600 text-green-700 px-4 py-2 rounded text-xs font-bold flex items-center gap-2 hover:bg-green-50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">verified</span> Approve Selected
          </button>
        </div>
      </div>

      <div className="bg-card p-4 mb-6 rounded-xl border border-outline-variant/10 shadow-sm flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[240px]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">search</span>
          <input
            className="w-full pl-9 pr-4 py-2 bg-muted border border-stone-200 rounded text-sm focus:ring-1 focus:ring-primary-container focus:border-primary-container"
            placeholder="Search all articles..."
            type="text"
          />
        </div>
        <select className="bg-muted border border-stone-200 rounded text-sm px-3 py-2 min-w-[140px]">
          <option value="">All Sections</option>
          <option>Opinions</option>
          <option>Sports</option>
          <option>Science</option>
          <option>Campus</option>
        </select>
        <select className="bg-muted border border-stone-200 rounded text-sm px-3 py-2 min-w-[140px]">
          <option value="">All Staff</option>
          <option>Writers</option>
          <option>Editors</option>
          <option>Layout Artists</option>
        </select>
      </div>

      <div className="bg-card rounded-xl overflow-x-auto shadow-sm border border-outline-variant/10">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-surface-container-low border-b border-outline-variant/20">
            <tr>
              <th className="px-6 py-4 w-10">
                <input className="rounded border-stone-300 text-primary-container focus:ring-primary-container cursor-pointer" type="checkbox" />
              </th>
              {["Title", "Author", "Section", "Status", "Stage", "Last Updated", "Assigned To"].map((h) => (
                <th key={h} className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            <tr className="article-row transition-colors">
              <td className="px-6 py-4">
                <input className="rounded border-stone-300 text-primary-container focus:ring-primary-container cursor-pointer" type="checkbox" />
              </td>
              <td className="px-6 py-4"><p className="font-bold text-sm text-on-surface">The Future of AI in Liberal Arts</p></td>
              <td className="px-6 py-4 text-sm font-medium">Writer A</td>
              <td className="px-6 py-4"><span className="text-[10px] bg-muted px-2 py-1 rounded font-bold text-secondary uppercase tracking-tighter">Opinions</span></td>
              <td className="px-6 py-4">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-destructive uppercase tracking-tighter">
                  <span className="w-2 h-2 rounded-full bg-destructive"></span> Review
                </span>
              </td>
              <td className="px-6 py-4 text-xs font-semibold text-on-surface-variant">Advisor Review</td>
              <td className="px-6 py-4 text-xs text-secondary">2h ago</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-primary-container text-primary-foreground flex items-center justify-center text-[10px] font-bold">MM</div>
                  <span className="text-xs font-medium">Ma'am Maycee</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs text-secondary font-medium italic">Showing 1 of 12 articles</p>
        <div className="flex gap-2">
          <button className="p-2 border border-outline-variant/20 rounded hover:bg-muted disabled:opacity-50" disabled>
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="p-2 border border-outline-variant/20 rounded hover:bg-muted">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default SPADashboardContent;

const navItems = [
  { icon: "dashboard", label: "Dashboard", active: true, filled: true },
  { icon: "description", label: "Articles", active: false },
  { icon: "list_alt", label: "Sections", active: false },
  { icon: "send", label: "Submissions", active: false },
  { icon: "rate_review", label: "Reviews", active: false },
  { icon: "auto_stories", label: "Published", active: false },
];

const Sidebar = () => {
  return (
    <aside className="h-screen w-72 sticky left-0 top-[72px] sidebar-background hidden md:block">
      <div className="flex flex-col h-full space-y-4 font-body text-sm">
        {/* Logo */}
        <div className="relative logo-blend-container overflow-hidden">
          <div className="logo-glow"></div>
          <img
            alt="Pyro Press Logo"
            className="relative z-10 w-full h-auto object-cover mix-blend-screen"
            src="/pyro-press-logo.png"
          />
        </div>

        <div className="flex-1 flex flex-col px-6 space-y-6">
          {/* Navigation */}
          <nav className="space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                  item.active
                    ? "text-[#f8f4f2] font-semibold bg-white/10"
                    : "text-[#f8f4f2]/70 hover:text-[#f8f4f2] hover:bg-white/5"
                }`}
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  style={item.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* My Tasks */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#f8f4f2]/40 mb-3 px-3">My Tasks</h4>
            <div className="space-y-1">
              <a className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors" href="#">
                <span className="text-xs font-medium text-[#f8f4f2]">Assigned to me</span>
                <span className="bg-[#f8f4f2] text-primary text-[9px] px-1.5 py-0.5 rounded-full font-bold">4</span>
              </a>
              <a className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors" href="#">
                <span className="text-xs font-medium text-[#f8f4f2]">Pending my approval</span>
                <span className="bg-white/20 text-[#f8f4f2] text-[9px] px-1.5 py-0.5 rounded-full font-bold">7</span>
              </a>
            </div>
          </div>

          {/* New Article Button */}
          <div className="pt-4 pb-8">
            <button className="w-full bg-[#f8f4f2] text-primary py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-white active:scale-95 transition-all shadow-xl">
              <span className="material-symbols-outlined">add_circle</span>
              New Article
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

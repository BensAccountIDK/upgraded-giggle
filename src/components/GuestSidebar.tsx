const navItems = [
  { icon: "archive", label: "Archive", active: true, filled: true },
  { icon: "auto_stories", label: "Published Issues", active: false },
  { icon: "group", label: "Editorial Staff", active: false },
];

const GuestSidebar = () => {
  return (
    <aside className="h-screen w-72 sticky left-0 top-[72px] sidebar-background hidden md:block">
      <div className="flex flex-col h-full space-y-4 font-body text-sm">
        <div className="relative logo-blend-container overflow-hidden">
          <div className="logo-glow"></div>
          <img
            alt="Pyro Press Logo"
            className="relative z-10 w-full h-auto object-cover mix-blend-screen"
            src="/pyro-press-logo.png"
          />
        </div>

        <div className="flex-1 flex flex-col px-6 space-y-6">
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

          <div className="pt-6 border-t border-white/10 mt-auto">
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-xs text-[#f8f4f2]/60 leading-relaxed">
                Archive, issues, and staff rosters for guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default GuestSidebar;

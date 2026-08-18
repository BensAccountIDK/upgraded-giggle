const TopNav = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-background border-none font-headline antialiased">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-bold tracking-tight text-primary">Pyro Press Publication</span>
          <div className="hidden md:flex space-x-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Dashboard</a>
            <a className="text-secondary font-semibold hover:text-primary transition-colors pb-1" href="#">Archive</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 group-focus-within:text-primary">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-surface-container border-none rounded-lg focus:ring-1 focus:ring-primary w-64 text-sm transition-all"
              placeholder="Search archive..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
            <div className="text-right">
              <p className="text-sm font-bold text-on-surface">Editor in Chief</p>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-semibold">Editor in Chief</p>
            </div>
            <img
              alt="User avatar"
              className="w-10 h-10 rounded-lg object-cover border-2 border-primary-container-foreground"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3yJXtGylEbiGyJ_VJps7uY2DgMadEdwzekfCYOrNgPgXSUdzHOIShvzdNBoD3tg98oGV6xZGLnF2Y49QQpKgYjMJWkuLd9tQ2_6BblXLMi05UXuVYoBGIsgbb5hu9Ld2jByqu6osksC5TQKp94vFIeS2HxYdm_OjF-F1-2KUpQ9YW6s0kCLF7uwmyRFM7Uu3lIYvAhFw8Iof9uJy_sXind0W2X-mXKUh8NFk6EPWHv8czib-H5A1k2M96Li4b6T-uGk2skHFg9hxZ"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

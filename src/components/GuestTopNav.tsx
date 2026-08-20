const GuestTopNav = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-background border-none font-headline antialiased">
      <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 max-w-[1600px] mx-auto">
        <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-primary">Pyro Press Publication</span>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative hidden lg:block group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 group-focus-within:text-primary">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-surface-container border-none rounded-lg focus:ring-1 focus:ring-primary w-48 xl:w-64 text-sm transition-all"
              placeholder="Search archive..."
              type="text"
            />
          </div>
          <a
            href={`${import.meta.env.BASE_URL}login`}
            className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-primary border border-primary/30 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Log In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default GuestTopNav;

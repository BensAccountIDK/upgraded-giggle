const GuestFooter = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#1a0203]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-md">
            <img
              alt="Pyro Press Publication"
              className="h-16 w-auto object-contain mb-3"
              src="/pyro-press-logo.png"
            />
            <p className="text-sm text-[#f8f4f2]/60 leading-relaxed">
              The official school publication of Calatagan Senior High School. Submit articles, review drafts, and explore our published issues.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="text-sm text-[#f8f4f2]/70">
              <span className="text-[#f8f4f2]/50">Viewing as </span>
              <span className="font-semibold text-[#f8f4f2]">Guest</span>
            </div>
            <a
              href={import.meta.env.BASE_URL}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-[#f8f4f2] text-sm font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-sm">login</span>
              Log In
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#f8f4f2]/40">
            © {new Date().getFullYear()} Pyro Press Publication. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#f8f4f2]/50">
            <a href={`${import.meta.env.BASE_URL}about`} className="hover:text-[#f8f4f2] transition-colors">About</a>
            <a href="#" className="hover:text-[#f8f4f2] transition-colors">Archive</a>
            <a href="#" className="hover:text-[#f8f4f2] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GuestFooter;

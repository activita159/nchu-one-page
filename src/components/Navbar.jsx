import { Menu, Sparkle } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#fbfbf8]/88 backdrop-blur-xl">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="focus-ring flex items-center gap-2 rounded-full text-sm font-black uppercase tracking-wide">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pop-lime text-pop-ink">
            <Sparkle size={18} strokeWidth={2.6} />
          </span>
          POPFRAME
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-black/10 bg-white px-2 py-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-black/70 transition hover:bg-pop-ink hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full bg-pop-ink px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-pop-blue md:inline-flex"
        >
          Start Talk
        </a>

        <button
          type="button"
          aria-label="切換導覽選單"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm md:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <div className="section-shell pb-4 md:hidden">
          <div className="grid gap-2 rounded-2xl border border-black/10 bg-white p-2 shadow-pop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl px-4 py-3 text-sm font-bold text-black/75 transition hover:bg-pop-lime"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

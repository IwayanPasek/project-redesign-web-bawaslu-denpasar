import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-surface-variant">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">

          {/* Bagian Brand & Logo (Logo di sebelah KIRI teks) */}
          <div className="flex items-center gap-3 shrink-0 cursor-pointer">
            <img
              src="https://cdn.antaranews.com/cache/1200x800/2023/09/17/logo-bawaslu.jpg"
              alt="Logo Bawaslu"
              className="h-10 w-auto object-contain mix-blend-multiply"
            />
            <div className="font-headline-md font-bold text-primary">
              Bawaslu Kota Denpasar
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-gutter items-center h-full">
            <li className="h-full flex items-center"><a className="font-bold text-primary border-b-2 border-primary pb-1" href="#">Beranda</a></li>
            <li className="h-full flex items-center"><a className="text-on-surface-variant hover:text-primary transition" href="#">Profil</a></li>
            <li className="h-full flex items-center"><a className="text-on-surface-variant hover:text-primary transition" href="#">Regulasi</a></li>
            <li className="h-full flex items-center"><a className="text-on-surface-variant hover:text-primary transition" href="#">Berita</a></li>
            <li className="h-full flex items-center"><a className="text-on-surface-variant hover:text-primary transition" href="#">Kontak</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined text-on-surface">search</span>
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-on-surface">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 flex flex-col px-margin-mobile pb-8 overflow-y-auto">
          <ul className="flex flex-col gap-4 mt-4">
            <li><a className="block py-4 text-primary font-bold text-headline-md border-b border-surface-variant" href="#">Beranda</a></li>
            <li><a className="block py-4 text-on-surface text-headline-md border-b border-surface-variant" href="#">Profil</a></li>
            <li><a className="block py-4 text-on-surface text-headline-md border-b border-surface-variant" href="#">Regulasi</a></li>
            <li><a className="block py-4 text-on-surface text-headline-md border-b border-surface-variant" href="#">Berita</a></li>
            <li><a className="block py-4 text-on-surface text-headline-md border-b border-surface-variant" href="#">Kontak</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

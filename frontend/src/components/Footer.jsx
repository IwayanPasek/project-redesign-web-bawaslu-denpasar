const Footer = () => {
  return (
    <footer className="bg-inverse-surface w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-8 w-full max-w-container-max mx-auto">

        {/* Brand & Copyright */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <div className="text-xl font-extrabold text-white">
            Bawaslu Kota Denpasar
          </div>
          <p className="text-gray-300 opacity-80 max-w-sm">
            Badan Pengawas Pemilihan Umum Kota Denpasar bertugas mengawasi penyelenggaraan Pemilu dalam wilayah Kota Denpasar.
          </p>
          {/* <div className="text-xs text-primary mt-4">
            © 2024 Bawaslu Kota Denpasar. Seluruh Hak Cipta Dilindungi.
          </div>*/}
        </div>

        {/* Links Column 1 */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Informasi Publik</h4>
          <ul className="flex flex-col gap-2 text-xs">
            <li><a className="text-gray-300 hover:text-secondary-container transition-colors" href="#">PPID</a></li>
            <li><a className="text-gray-300 hover:text-secondary-container transition-colors" href="#">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigasi</h4>
          <ul className="flex flex-col gap-2 text-xs">
            <li><a className="text-gray-300 hover:text-secondary-container transition-colors" href="#">Peta Situs</a></li>
            <li><a className="text-gray-300 hover:text-secondary-container transition-colors" href="#">Aksesibilitas</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

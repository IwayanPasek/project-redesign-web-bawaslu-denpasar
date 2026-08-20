const Location = () => {
  // URL Google Maps resmi Bawaslu Kota Denpasar
  const mapsUrl = "https://www.google.com/maps/place/LPSE+Kota+Denpasar/@-8.6535603,115.2220709,19z/data=!3m1!4b1!4m6!3m5!1s0x2dd241a32889dd55:0xee1fc2d32e0fd424!8m2!3d-8.6535603!4d115.2227146!16s%2Fg%2F11q1mdzjqr?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop bg-white w-full border-t border-surface-container-highest">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">

        {/* Kolom Informasi Teks */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-on-surface">Kunjungi Kantor Kami</h2>
          <p className="text-lg text-on-surface-variant max-w-md">
            Pusat layanan informasi dan pelaporan tatap muka Bawaslu Kota Denpasar.
          </p>

          {/* Alamat Resmi (Tautan Google Maps) */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex gap-4 items-start group hover:bg-surface-container-low p-3 -ml-3 rounded-xl transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary-container mt-1 group-hover:scale-110 transition-transform">
              location_on
            </span>
            <div>
              <h4 className="text-sm font-bold text-primary group-hover:underline">
                Alamat Resmi (Buka di Google Maps)
              </h4>
              <p className="text-on-surface-variant mt-1 leading-relaxed">
                Jl. Melati No. 18, Dangin Puri Kangin,<br/>
                Kec. Denpasar Utara, Kota Denpasar,<br/>
                Bali 80233
              </p>
            </div>
          </a>

          {/* Jam Operasional */}
          <div className="flex gap-4 items-start p-3 -ml-3">
            <span className="material-symbols-outlined text-primary-container mt-1">
              schedule
            </span>
            <div>
              <h4 className="text-sm font-bold text-on-surface">Jam Operasional</h4>
              <p className="text-on-surface-variant mt-1 leading-relaxed">
                Senin - Jumat: Belum Buka<br/>
                Sabtu - Minggu: Tutup
              </p>
            </div>
          </div>
        </div>

        {/* Container Gambar Peta yang Pas & Proporsional */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full aspect-[4/3] md:aspect-[16/10] max-h-[420px] bg-surface-container rounded-2xl overflow-hidden border border-surface-container-highest shadow-md relative group block cursor-pointer"
        >
          {/* Overlay Hover halus */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-300 z-10 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full font-bold text-primary shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span className="material-symbols-outlined text-base">map</span>
              <span>Buka di Google Maps</span>
            </div>
          </div>

          {/* Gambar Peta disesuaikan dengan object-cover & object-center */}
          <img
            src="/map_image.png"
            alt="Peta Lokasi Bawaslu Denpasar"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </a>

      </div>
    </section>
  );
};

export default Location;

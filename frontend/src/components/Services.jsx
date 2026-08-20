const Services = () => {
  const serviceData = [
    { title: "Cek DPT Kota Denpasar", desc: "Pastikan nama Anda terdaftar sebagai pemilih tetap di wilayah Denpasar.", icon: "how_to_reg", colorClass: "text-primary-container" },
    { title: "Informasi Pemilihan Regional", desc: "Data dan jadwal spesifik pemilihan kepala daerah dan legislatif di Denpasar.", icon: "map", colorClass: "text-secondary-container" },
    { title: "Produk Hukum Daerah", desc: "Akses transparan ke peraturan dan keputusan Bawaslu tingkat daerah.", icon: "gavel", colorClass: "text-primary-container" },
    { title: "Aspirasi Warga Denpasar", desc: "Sampaikan masukan dan saran untuk perbaikan proses demokrasi kita.", icon: "campaign", colorClass: "text-secondary-container" },
  ];

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low w-full">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-on-surface mb-4">Layanan Utama</h2>
          <div className="w-16 h-1 bg-primary-container"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {serviceData.map((service, index) => (
            <a key={index} className="group bg-white border border-surface-container-highest rounded-xl p-6 hover:shadow-lg transition-all flex flex-col" href="#">
              <div className={`w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center mb-6 ${service.colorClass}`}>
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>{service.icon}</span>
              </div>
              <h3 className="font-bold text-xl text-on-surface mb-2">{service.title}</h3>
              <p className="text-on-surface-variant flex-grow mb-6">{service.desc}</p>
              <span className={`flex items-center font-bold mt-auto ${service.colorClass}`}>
                Akses Layanan <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

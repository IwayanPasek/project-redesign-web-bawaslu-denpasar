const Hero = () => {
  return (
    <section className="relative w-full min-h-[819px] flex items-center pt-16 pb-24 md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 via-inverse-surface/70 to-transparent z-10"></div>
        <img alt="Denpasar Governance" className="w-full h-full object-cover object-center" src="https://tse2.mm.bing.net/th/id/OIP.IHWEB0Uew7GqfykXQQGjbwHaCD?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/>
      </div>
      <div className="relative z-20 max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-8 flex flex-col gap-stack-lg">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-container px-4 py-2 rounded-full w-fit">
            {/* <span className="material-symbols-outlined text-sm">verified_user</span>*/}
            {/* <span className="font-label-md font-semibold">Pengawasan Independen & Terpercaya</span>*/}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
            Bersama Rakyat <br className="hidden md:block"/>Awasi Pemilu
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl opacity-90">
            Bawaslu Kota Denpasar hadir untuk memastikan proses demokrasi berjalan jujur, adil, dan transparan demi masa depan kota yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-primary-container text-white px-8 py-4 rounded-lg font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>report</span>
              Lapor Pelanggaran Pemilu
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <span>Pelajari Lebih Lanjut</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

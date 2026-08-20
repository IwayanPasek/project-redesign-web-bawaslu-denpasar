import { useState, useEffect } from 'react';

const News = () => {
  // 1. Inisialisasi State
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Mengambil data dari Backend (Node.js + TiDB)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Ini adalah endpoint API Backend Anda nantinya
        const response = await fetch('http://localhost:5000/api/news');

        // Jika server bermasalah atau belum jalan, lemparkan error
        if (!response.ok) {
          throw new Error('Gagal mengambil data dari server');
        }

        const data = await response.json();
        setNewsList(data);
      } catch (err) {
        console.error("Error fetching news:", err);
        // CATATAN: Karena backend Anda belum berjalan, kode akan masuk ke sini.
        // Kita set array menjadi kosong [] agar Anda bisa melihat desain "Feedback Kosong"
        setNewsList([]);
      } finally {
        // Matikan animasi loading setelah proses selesai
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low w-full">
      <div className="max-w-container-max mx-auto">

        {/* Header Bagian Berita */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">Berita Terkini</h2>
            <div className="w-16 h-1 bg-primary-container"></div>
          </div>
          <a className="hidden md:flex items-center text-primary font-bold hover:underline" href="#">
            Lihat Semua Berita <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </a>
        </div>

        {/* 3. LOGIKA RENDER (Loading / Kosong / Ada Data) */}
        {isLoading ? (

          // TAMPILAN A: Sedang Loading (Spinner)
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="ml-4 font-bold text-on-surface-variant">Memuat data berita...</span>
          </div>

        ) : newsList.length === 0 ? (

          // TAMPILAN B: Feedback Jika Database Kosong
          <div className="bg-white border border-surface-container-highest rounded-xl p-16 text-center flex flex-col items-center justify-center shadow-sm">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">
                newspaper
              </span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-3">Belum Ada Berita</h3>
            <p className="text-on-surface-variant max-w-md mx-auto">
              Saat ini belum ada publikasi berita atau pengumuman terbaru dari Bawaslu Kota Denpasar. Silakan cek kembali secara berkala.
            </p>
          </div>

        ) : (

          // TAMPILAN C: Tampilkan Kartu Berita Jika Data Ada
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {newsList.map((news, index) => (
              <article key={news.id || index} className="bg-white border border-surface-container-highest rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="h-48 bg-surface-container relative">
                  {/* Fallback jika URL gambar kosong */}
                  <img
                    alt={news.title}
                    className="w-full h-full object-cover"
                    src={news.image || 'https://via.placeholder.com/400x250?text=Bawaslu+Denpasar'}
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${news.badgeClass || 'bg-primary-container text-white'}`}>
                    {news.category || 'Informasi'}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-on-surface-variant mb-2">{news.date}</span>
                  <h3 className="text-xl font-bold text-on-surface mb-3 line-clamp-2">{news.title}</h3>
                  <p className="text-on-surface-variant mb-6 line-clamp-3 flex-grow">{news.desc}</p>
                  <a className="text-primary font-bold hover:underline mt-auto" href="#">Baca Selengkapnya</a>
                </div>
              </article>
            ))}
          </div>

        )}

        {/* Tombol Mobile */}
        <div className="mt-8 md:hidden flex justify-center">
          <a className="inline-flex items-center text-primary border border-primary px-6 py-3 rounded-lg font-bold" href="#">
            Lihat Semua Berita
          </a>
        </div>

      </div>
    </section>
  );
};

export default News;

/**
 * Library Configuration
 * Add your research papers here. They will be automatically rendered on the landing page.
 */
const libraryConfig = {
    categories: [
        {
            id: "tech",
            name: "Technology & Engineering",
            description: "Deep dives into software architecture, simulation engines, and reverse engineering.",
            icon: "🚀"
        },
        {
            id: "education",
            name: "Education & STEM",
            description: "Research on educational pathways, STEM development, and doctoral studies.",
            icon: "🎓"
        },
        {
            id: "economy",
            name: "Economy & Strategy",
            description: "Market analysis, economic projections, and strategic business research.",
            icon: "📊"
        },
        {
            id: "conspiracy",
            name: "Conspiracy & Investigation",
            description: "Market analysis, economic projections, and strategic business research.",
            icon: "🪧"
        }
    ],
    papers: [
        {
            title: "Analisis Platform Simulasi Elektronik",
            category: "tech",
            path: "page/tech/simulation_re.html",
            date: "2026-05-01",
            summary: "Evaluasi arsitektur Wokwi, Tinkercad, dan Proteus untuk kebutuhan reverse engineering.",
            tags: ["Simulation", "Reverse Engineering", "WebAssembly"],
            coverImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Rekayasa%20Balik%20Simulator%20Sirkuit%20Berbasis%20WebAssembly%20(1).mp3"
        },
        {
            title: "S3 Terapan STEM di Indonesia",
            category: "education",
            path: "page/education/edu_stem.html",
            date: "2026-04-28",
            summary: "Peta jalan karir dan serapan industri untuk lulusan Doktor Terapan bidang STEM.",
            tags: ["Education", "STEM", "Doctoral"],
            coverImage: "https://www.reagent.co.uk/wp-content/uploads/what/is/what-is-stem-education.jpg",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/How%20D4%20Degrees%20Secure%20Indonesian%20Tech%20Careers.mp3"
        },
        {
            title: "Modern SaaS Improvement",
            category: "tech",
            path: "page/tech/saas_improve.html",
            date: "2026-04-25",
            summary: "Strategi optimasi performa dan skalabilitas aplikasi SaaS modern.",
            tags: ["SaaS", "Architecture", "Optimization"],
            coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Software%20Otonom%20Penuntas%20Hasil%20Kerja.mp3"
        },
        {
            title: "Personal App Ecosystem",
            category: "tech",
            path: "page/tech/personalapp.html",
            date: "2026-04-20",
            summary: "Membangun ekosistem aplikasi personal yang terintegrasi dan aman.",
            tags: ["App Dev", "Ecosystem", "Security"],
            coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/AI%20Second%20Brain%20Pengganti%20Catat%20Keuangan%20Manual.mp3"
        },
        {
            title: "The Resilient Side-Income Playbook: 2026",
            category: "economy",
            path: "page/economy/side_income.html",
            date: "2026-04-15",
            summary: "Analisis pasar dan strategi untuk membangun side income di era ekonomi digital.",
            tags: ["Economy", "Strategy", "Digital"],
            coverImage: "https://www.wealthbuilders.org/wp-content/uploads/2022/06/wooden-blocks-with-the-word-income-and-the-up-arro-2023-11-27-04-55-10-utc-1080x675.jpg",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Bisnis%20Mikro%20AI%20dan%20Kangkung%20Paling%20Cuan.mp3"
        },
        {
            title: "Peta Jalan Finansial 2026: Mengoptimalkan Ekonomi Cerdas",
            category: "economy",
            path: "page/economy/indonesia_income.html",
            date: "2026-04-15",
            summary: "Strategi adaptasi mahasiswa semester akhir dalam menghadapi disrupsi AI dan tantangan ekonomi digital di Indonesia.",
            tags: ["Education", "Digital", "Jakarta"],
            coverImage: "https://smartcity.jakarta.go.id/uploads/artikel-cover-image/ebae05a3-a31b-4326-8a26-e65039a8c2bd/SmartSelect_20220418-143508_Chrome.jpe",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Software%20Otonom%20Penuntas%20Hasil%20Kerja.mp3"
        },
        {
            title: "Virtual IoT Lab Blueprint",
            category: "tech",
            path: "page/tech/virtual_iot.html",
            date: "2026-05-04",
            summary: "Blueprint Strategis dan Data Riset untuk Platform Edukasi IoT Virtual.",
            tags: ["IoT", "Simulation", "Education"],
            coverImage: "https://thedailyplaniot.com/wp-content/uploads/2021/09/iot-design.png",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Virtual%20IoT%20Labs%20Replace%20Physical%20Workbenches%20(1).mp3"
        },
        {
            title: "Analisis Data: Mengungkap Isi Dokumen Epstein",
            category: "conspiracy",
            path: "page/conspiracy/epstein_research.html",
            date: "2026-05-03",
            summary: "Analisis Data: Mengungkap Isi Dokumen Epstein.",
            tags: ["Conspiracy", "Data", "Research"],
            coverImage: "https://m.media-amazon.com/images/I/614PBUiwIRL._AC_UF1000,1000_QL80_.jpg",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Skandal%20Seks%20dan%20Kekuasaan%20Berkas%20Epstein.mp3"
        },
        {
            title: "Lanskap Ekonomi & Kripto 2026",
            category: "economy",
            path: "page/economy/crypto_ex.html",
            date: "2025-09-09",
            summary: "Lanskap Ekonomi & Kripto 2026.",
            tags: ["Economy", "Crypto", "Finance"],
            coverImage: "https://s3.tradingview.com/news/image/invezz:c6b6cf277094b-62971483c07f665e369f9732d0042d67-resized.webp",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Ekonomi%20&%20Kripto%20Sep.%202025_%20Gejolak%20Global,%20Indonesia%20Tangguh,%20dan%20Transformasi%20Utilitas%20Kripto%20(RWA,%20ReFi,%20ZKP)"
        },
        {
            title: "Prospek Masa Depan Jasa, Pengadaan & AI",
            category: "economy",
            path: "page/economy/procure.html",
            date: "2025-08-23",
            summary: "Dasbor Interaktif: Prospek Masa Depan Jasa, Pengadaan & AI.",
            tags: ["Economy", "Data", "Research"],
            coverImage: "https://www.innovationnewsnetwork.com/wp-content/uploads/2024/02/shutterstockPhonlamai-Photo_1058815598.jpg",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Masa%20Depan%20Jasa%20&%20Pengadaan_%20Terobosan%20AI%202025-2030!.mp3"
        },
        {
            title: "Blueprint Bisnis Masa Depan: Langka, Sustainable & High Income",
            category: "economy",
            path: "page/economy/economy_province.html",
            date: "2025-05-05",
            summary: "Blueprint Bisnis Masa Depan: Langka, Sustainable & High Income.",
            tags: ["Economy", "Asia Tenggara", "Finance"],
            coverImage: "https://www.investopedia.com/thmb/D-tg8AGlBOzML-aRcOp8iCwth9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-20-24cdratesfedannouncement-c5d8817e128c4e849986051853df1529.jpg",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Cuan%20Ekspor%20Bonggol%20Jagung%20Lampung%20Selatan.mp3"
        },
        {
            title: "Membongkar Dunia Kripto & Blockchain",
            category: "tech",
            path: "page/tech/blockchain.html",
            date: "2025-05-05",
            summary: "Blueprint Bisnis Masa Depan: Langka, Sustainable & High Income.",
            tags: ["Economy", "Asia Tenggara", "Finance"],
            coverImage: "https://evc.sa/wp-content/uploads/2023/05/Blockchain-1-1024x614.webp",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Decoding%20the%20Crypto%20Revolution_%20Blockchain,%20Bitcoin,%20and%20Beyond.mp3"
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = libraryConfig;
}

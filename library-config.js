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
            podcastUrl: "https://your-project.supabase.co/storage/v1/object/public/podcasts/simulation.mp3"
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
            podcastUrl: ""
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
            summary: "Analisis pasar dan strategi untuk membangun side income di era ekonomi digital.",
            tags: ["Economy", "Strategy", "Digital"],
            coverImage: "https://smartcity.jakarta.go.id/uploads/artikel-cover-image/ebae05a3-a31b-4326-8a26-e65039a8c2bd/SmartSelect_20220418-143508_Chrome.jpe",
            podcastUrl: "https://bombfbodieaqdbeipcuz.supabase.co/storage/v1/object/public/podcast/Software%20Otonom%20Penuntas%20Hasil%20Kerja.mp3"
        }

    ]
};

if (typeof module !== 'undefined') {
    module.exports = libraryConfig;
}

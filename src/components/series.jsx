import { FiStar } from 'react-icons/fi';

export function Series() {
    const seriesList = [
        { id: 1, title: "Stranger Things", year: "2024", rating: "8.7", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80" },
        { id: 2, title: "The Crown", year: "2023", rating: "8.6", img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&q=80" },
        { id: 3, title: "Black Mirror", year: "2023", rating: "8.8", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80" },
        { id: 4, title: "Breaking Bad", year: "2013", rating: "9.5", img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80" },
        { id: 5, title: "Succession", year: "2023", rating: "8.9", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80" },
        { id: 6, title: "The Last of Us", year: "2023", rating: "8.8", img: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=400&q=80" },
        { id: 7, title: "Dark", year: "2020", rating: "8.7", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=400&q=80" },
        { id: 8, title: "Mindhunter", year: "2019", rating: "8.6", img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=400&q=80" },
        { id: 9, title: "Severance", year: "2022", rating: "8.7", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" },
        { id: 10, title: "The Bear", year: "2023", rating: "8.6", img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=400&q=80" },
        { id: 11, title: "Better Call Saul", year: "2022", rating: "8.9", img: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=400&q=80" },
        { id: 12, title: "House of Dragon", year: "2022", rating: "8.5", img: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=400&q=80" },
    ];

    return (
        <div className="py-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Popular Series</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {seriesList.map((item) => (
                    <div key={item.id} className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-[2/3] overflow-hidden relative">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                <button className="w-full py-1.5 bg-blue-600 text-white text-xs font-bold rounded hover:bg-blue-700 transition-colors">
                                    Watch Now
                                </button>
                            </div>
                        </div>
                        <div className="p-2.5">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate" title={item.title}>{item.title}</h3>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-gray-500 dark:text-gray-400">{item.year}</span>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <FiStar size={10} fill="currentColor" />
                                    <span className="text-xs font-bold">{item.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

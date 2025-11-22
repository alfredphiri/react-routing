import { FiStar } from 'react-icons/fi';

export function Movies() {
    const moviesList = [
        { id: 1, title: "Oppenheimer", year: "2023", rating: "8.4", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80" },
        { id: 2, title: "Barbie", year: "2023", rating: "7.0", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=400&q=80" },
        { id: 3, title: "Spider-Man: ATSV", year: "2023", rating: "8.7", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=400&q=80" },
        { id: 4, title: "John Wick 4", year: "2023", rating: "7.7", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80" },
        { id: 5, title: "Guardians Vol. 3", year: "2023", rating: "7.9", img: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?auto=format&fit=crop&w=400&q=80" },
        { id: 6, title: "Avatar 2", year: "2022", rating: "7.6", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80" },
        { id: 7, title: "Top Gun: Maverick", year: "2022", rating: "8.3", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80" },
        { id: 8, title: "Everything Everywhere", year: "2022", rating: "7.8", img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=400&q=80" },
        { id: 9, title: "The Batman", year: "2022", rating: "7.8", img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?auto=format&fit=crop&w=400&q=80" },
        { id: 10, title: "Dune", year: "2021", rating: "8.0", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=400&q=80" },
        { id: 11, title: "Interstellar", year: "2014", rating: "8.6", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80" },
        { id: 12, title: "Inception", year: "2010", rating: "8.8", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80" },
    ];

    return (
        <div className="py-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Top Movies</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {moviesList.map((item) => (
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

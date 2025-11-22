import { FiPlayCircle, FiCalendar } from 'react-icons/fi';

export function Latest() {
    const latestReleases = [
        {
            id: 1,
            title: "The Future of AI",
            desc: "An in-depth look at how artificial intelligence is reshaping our world.",
            date: "Today",
            img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Cyberpunk City",
            desc: "A documentary exploring the neon-lit streets of Tokyo's underground scene.",
            date: "Yesterday",
            img: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Space Exploration",
            desc: "Join the mission to Mars in this breathtaking visual journey.",
            date: "2 days ago",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="py-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Releases</h1>
            <div className="space-y-6">
                {latestReleases.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="w-full md:w-1/3 lg:w-1/4 aspect-video overflow-hidden rounded-xl relative group">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FiPlayCircle className="text-white w-12 h-12 drop-shadow-lg" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded dark:bg-blue-900/50 dark:text-blue-300 uppercase tracking-wide">New Episode</span>
                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                    <FiCalendar className="mr-1" /> {item.date}
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                                {item.desc}
                            </p>
                            <button className="self-start text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1">
                                Watch Now <span className="text-lg">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

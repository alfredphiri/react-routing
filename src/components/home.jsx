import { Link } from 'react-router-dom';
import { FiPlay, FiInfo, FiLoader, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollRow } from './ScrollRow';
import { PageTransition } from './PageTransition';
import { useState } from 'react';

export function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handlePlay = (e) => {
        e.preventDefault();
        setIsPlaying(true);

        // Simulate loading/playing for 4 seconds
        setTimeout(() => {
            setIsPlaying(false);
            setShowMessage(true);
        }, 4000);
    };

    const closeMessage = () => {
        setShowMessage(false);
    };

    const trendingMovies = [
        { id: 1, title: "Dune: Part Two", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=500&q=80" },
        { id: 2, title: "The Batman", img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?auto=format&fit=crop&w=500&q=80" },
        { id: 3, title: "Interstellar", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80" },
        { id: 4, title: "Inception", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
        { id: 5, title: "Blade Runner", img: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=500&q=80" },
        { id: 6, title: "Oppenheimer", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=500&q=80" },
    ];

    const newReleases = [
        { id: 7, title: "Stranger Things", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=500&q=80" },
        { id: 8, title: "The Crown", img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=500&q=80" },
        { id: 9, title: "Black Mirror", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80" },
        { id: 10, title: "Breaking Bad", img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=500&q=80" },
        { id: 11, title: "Succession", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80" },
    ];

    return (
        <PageTransition>
            <div className="space-y-10 pb-20 overflow-hidden">
                {/* Fake Play Overlay */}
                <AnimatePresence>
                    {isPlaying && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
                        >
                            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-white text-lg font-medium animate-pulse">Loading Stream...</p>
                        </motion.div>
                    )}

                    {showMessage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-200 dark:border-gray-700 relative">
                                <button
                                    onClick={closeMessage}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                                >
                                    <FiX size={24} />
                                </button>
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FiInfo size={32} className="text-red-600 dark:text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Demo Application</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    This is a School project, not a real streaming service. No movies can be played here.
                                </p>
                                <button
                                    onClick={closeMessage}
                                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                                >
                                    Understood
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Animated Hero Section */}
                <section className="relative h-[85vh] w-full overflow-hidden rounded-3xl mx-auto mt-4">
                    <motion.img
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
                        alt="Hero Background"
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>

                    <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-screen-xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-red-600 text-white text-xs font-bold tracking-wider mb-4 uppercase">
                                Netflix Original
                            </span>
                            <h1 className="mb-4 text-5xl md:text-7xl font-black tracking-tight text-white max-w-3xl drop-shadow-2xl">
                                STRANGER <br /> THINGS
                            </h1>
                            <p className="mb-8 text-lg md:text-xl text-gray-200 max-w-xl drop-shadow-md">
                                When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={handlePlay} className="inline-flex justify-center items-center py-3 px-8 text-lg font-semibold text-black rounded bg-white hover:bg-gray-200 transition-colors">
                                    <FiPlay className="mr-2 fill-current" /> Play
                                </button>
                                <Link to="/series" className="inline-flex justify-center items-center py-3 px-8 text-lg font-semibold text-white rounded bg-gray-500/70 hover:bg-gray-500/50 backdrop-blur-sm transition-colors">
                                    <FiInfo className="mr-2" /> More Info
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Horizontal Scroll Rows */}
                <div className="space-y-12 -mt-20 relative z-20 pl-4 md:pl-12">
                    <ScrollRow title="Trending Now" items={trendingMovies} />
                    <ScrollRow title="New Releases" items={newReleases} />
                    <ScrollRow title="Watch It Again" items={[...trendingMovies].reverse()} />
                </div>
            </div>
        </PageTransition>
    );
}

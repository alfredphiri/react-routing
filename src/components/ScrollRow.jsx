import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay, FiInfo } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function ScrollRow({ title, items }) {
    const rowRef = useRef(null);

    const scroll = (direction) => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-4 group/row relative">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white px-4 md:px-0">{title}</h2>

            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 rounded-r-lg backdrop-blur-sm"
                >
                    <FiChevronLeft size={32} />
                </button>

                {/* Scroll Container */}
                <div
                    ref={rowRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4 md:px-0 snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            className="flex-none w-[200px] md:w-[240px] aspect-[2/3] relative rounded-lg overflow-hidden cursor-pointer snap-start"
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center space-y-3">
                                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                                        <FiPlay fill="currentColor" />
                                    </button>
                                    <button className="p-2 border border-gray-400 text-white rounded-full hover:border-white transition-colors">
                                        <FiInfo />
                                    </button>
                                </div>
                                <p className="text-xs text-gray-300 line-clamp-3">{item.desc || "Experience the thrill of this masterpiece in stunning 4K HDR."}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 rounded-l-lg backdrop-blur-sm"
                >
                    <FiChevronRight size={32} />
                </button>
            </div>
        </div>
    );
}

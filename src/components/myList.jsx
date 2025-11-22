import { FiPlus, FiFilm } from 'react-icons/fi';

export function MyList() {
    return (
        <div className="py-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My List</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                    <FiPlus size={18} /> Add New
                </button>
            </div>

            <div className="flex flex-col items-center justify-center py-32 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-full mb-4">
                    <FiFilm className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Your list is empty</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs text-center">
                    Start adding movies and series to track what you want to watch next.
                </p>
            </div>
        </div>
    )
}

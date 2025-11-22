import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20 px-4 w-full max-w-screen-xl mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
}

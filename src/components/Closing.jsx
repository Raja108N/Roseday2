import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import React from 'react';

const Closing = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center text-rose-50 px-4 text-center font-serif relative overflow-hidden">

            {/* Background elements - ensuring transparency for global gradient */}
            {/* Removed internal dark background to let global gradient show */}

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="z-10 bg-white/20 backdrop-blur-md p-10 md:p-16 rounded-[2rem] border border-white/30 shadow-2xl max-w-3xl"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter drop-shadow-sm text-rose-950">
                    Forever Yours ❤️
                </h2>
                <p className="text-lg md:text-2xl font-medium text-rose-900 mb-12 italic max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    "Today is Rose Day, but every day with you is my favorite day. I promise to cherish you, always."
                </p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-rose-600 hover:bg-rose-500 text-white font-bold py-4 px-10 rounded-full shadow-xl shadow-rose-900/30 transition-all duration-300 flex items-center justify-center gap-3 mx-auto text-xl border border-rose-400"
                >
                    <span>My Heart is Yours</span>
                    <Heart className="group-hover:fill-current animate-pulse text-white" />
                </motion.button>
            </motion.div>

            <div className="absolute bottom-8 text-rose-100 text-sm font-sans flex flex-col items-center gap-2 drop-shadow-md">
                <p>Made with Love for You</p>
                <div className="w-16 h-1 bg-rose-200 rounded-full opacity-50"></div>
            </div>
        </section>
    );
};

export default Closing;

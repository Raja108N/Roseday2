import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const Surprise = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="overflow-hidden flex flex-col justify-center items-center py-24 text-white font-serif relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-2xl text-center px-4 bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-xl"
            >
                <h2 className="text-4xl md:text-5xl mb-8 font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] text-rose-100">A Hidden Surprise 🎁</h2>
                <p className="mb-10 text-rose-100 drop-shadow font-medium text-lg">
                    I've hidden a small note for you. Just a little something from my heart.
                </p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="bg-white text-rose-700 px-8 py-3 rounded-full shadow-lg hover:bg-rose-50 transition-colors duration-300 font-bold"
                >
                    Open Reveal
                </motion.button>
            </motion.div>

            {/* Modal / Reveal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.5, rotate: 10 }}
                            className="bg-white/95 backdrop-blur-xl text-rose-900 p-8 md:p-12 rounded-2xl max-w-lg w-full relative shadow-2xl border-4 border-rose-300"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        >
                            <button
                                className="absolute top-4 right-4 text-rose-500 hover:text-rose-700 font-bold text-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>

                            <h3 className="text-3xl font-bold mb-4 text-center text-rose-800">My Love Letter 💌</h3>
                            <div className="space-y-4 text-lg font-medium leading-relaxed italic text-rose-700">
                                <p>My Dearest,</p>
                                <p>
                                    Words often fail me when I try to express how much you mean to me.
                                    But today, on Rose Day, I want to remind you that you are my favorite person.
                                </p>
                                <p>
                                    Thank you for being you.
                                </p>
                                <p className="text-right font-bold mt-6 text-rose-900">- Forever Yours</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Surprise;

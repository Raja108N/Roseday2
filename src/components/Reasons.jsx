import { motion } from 'framer-motion';

const reasons = [
    { title: "Your Smile", description: "It lights up my darkest days.", emoji: "😊" },
    { title: "Your Kindness", description: "You make everyone feel special.", emoji: "💖" },
    { title: "Your Laugh", description: "The best sound in the world.", emoji: "😂" },
    { title: "Your Support", description: "You are my rock, always.", emoji: "💪" },
    { title: "Our Adventures", description: "Life is never boring with you.", emoji: "🌍" },
    { title: "Your Hugs", description: "My safest place.", emoji: "🤗" },
    { title: "Just You", description: "Everything about you is perfect to me.", emoji: "✨" },
];

const Reasons = () => {
    return (
        <section className="py-20 font-serif">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl text-center text-rose-100 mb-16 font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
            >
                Why I Love You 🌹
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-md border border-white/40 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer group hover:bg-white/95 transition-all duration-300"
                    >
                        <div className="text-4xl mb-4 group-hover:scale-125 transition-transform drop-shadow-md">{reason.emoji}</div>
                        <h3 className="text-xl font-bold mb-2 text-rose-900 transition-colors">{reason.title}</h3>
                        <p className="text-rose-700 text-sm group-hover:text-rose-800 transition-colors font-medium">
                            {reason.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Reasons;

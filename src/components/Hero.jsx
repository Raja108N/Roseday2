import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import UserImage from '../assets/IMG20211129135642.png';

const Hero = () => {
    // Generate random floating elements (hearts + roses)
    const items = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 6,
        type: Math.random() > 0.6 ? 'rose' : 'heart', // 40% roses, 60% hearts
        scale: Math.random() * 0.8 + 0.5,
    }));

    return (
        <section className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center text-center px-4">

            {/* Falling/Floating Elements */}
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    className="absolute top-[-10%]"
                    initial={{ y: -100, x: `${item.x}vw`, rotate: 0, opacity: 0 }}
                    animate={{
                        y: '110vh',
                        x: `${item.x + (Math.random() * 20 - 10)}vw`,
                        rotate: 360,
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "linear"
                    }}
                >
                    {item.type === 'rose' ? (
                        <span className="text-2xl filter drop-shadow-md" style={{ transform: `scale(${item.scale})` }}>🌹</span>
                    ) : (
                        <Heart
                            size={24}
                            className="fill-rose-300/60 text-rose-100/60"
                            style={{ transform: `scale(${item.scale})` }}
                        />
                    )}
                </motion.div>
            ))}

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="z-10 bg-white/40 backdrop-blur-md p-10 rounded-3xl border border-white/40 shadow-xl flex flex-col items-center"
            >
                {/* User Image */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="mb-8 p-1 bg-white/50 rounded-full shadow-lg"
                >
                    <img
                        src={UserImage}
                        alt="Us"
                        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-rose-200"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-6xl md:text-8xl font-serif font-bold text-rose-950 mb-6 drop-shadow-sm"
                >
                    Happy Rose Day,<br />Bandol 🌹
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-xl md:text-3xl text-rose-900 font-bold italic max-w-2xl mx-auto drop-shadow-sm"
                >
                    "This rose may fade, but my love for you never will."
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 3, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 text-rose-200 font-bold drop-shadow-md"
            >
                <span className="text-sm uppercase tracking-widest text-white">Scroll for our story</span>
            </motion.div>
        </section>
    );
};

export default Hero;

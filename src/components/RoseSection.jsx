import { motion } from 'framer-motion';
import RoseImg from '../assets/rose.png';

const RoseSection = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative px-4 text-center overflow-hidden">

            {/* Animated Rose Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mb-12 cursor-pointer group relative"
            >
                <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

                    {/* Realistic Rose Image with ROTATION */}
                    <motion.img
                        src={RoseImg}
                        alt="A perfect red rose"
                        className="w-72 md:w-96 relative z-10 drop-shadow-2xl"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 20, // Slow rotation
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    />
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-3xl bg-white/30 backdrop-blur-sm p-6 rounded-2xl border border-rose-100/30 shadow-lg"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-rose-900 mb-6 font-semibold leading-tight drop-shadow-sm">
                    "If I could give you one rose for every reason I love you, the world wouldn’t have enough roses."
                </h2>
                <p className="text-lg text-rose-800 font-medium italic drop-shadow-sm">
                    This single rose is for you. Timeless and eternal.
                </p>
            </motion.div>

        </section>
    );
};

export default RoseSection;

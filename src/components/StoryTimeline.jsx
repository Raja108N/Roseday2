import { motion } from 'framer-motion';

const storyData = [
    {
        title: "First kiss",
        date: "A special moment",
        content: "Across the Fenchurch Street, down the long tower: rainy windy, cold: you and me.",
    },
    {
        title: "When I Knew It Was You 💓",
        date: "The turning point",
        content: "After stubborn ness that it will work and your effort and understanding",
    },
    {
        title: "My Favorite Memories With You 🌙",
        date: "Countless laughs",
        content: "All days days with you holding hands and walking across, and chit chat",
    },
    {
        title: "What I Dream For Us 💍",
        date: "Forever & beyond",
        content: "Me , you, mom and bachha buchhu in our own ghar together and blessed",
    },
];

const StoryTimeline = () => {
    return (
        <section className="min-h-screen py-20 px-8 flex flex-col items-center relative">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif text-rose-100 mb-16 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] font-bold"
            >
                Our Journey Together
            </motion.h2>

            <div className="relative border-l-4 border-rose-200/50 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:bg-transparent w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Timeline Items */}
                {storyData.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`relative mb-10 md:mb-0 ${index % 2 === 0 ? 'md:pr-10 md:text-right md:border-r-4 md:border-rose-200/50' : 'md:pl-10 md:border-l-4 md:border-rose-200/50 md:translate-y-20'
                            } flex flex-col justify-center items-center md:items-${index % 2 === 0 ? 'end' : 'start'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        {/* Dot (Only visible on mobile or custom placing needed for desktop connecting line) */}
                        <div className="absolute -left-[22px] md:hidden w-4 h-4 bg-white rounded-full border-2 border-rose-500 top-5" />

                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/40 w-full md:w-auto hover:bg-white/90">
                            <span className="text-sm font-bold text-rose-500 uppercase tracking-wide block mb-1">
                                {item.date}
                            </span>
                            <h3 className="text-2xl font-serif text-rose-900 mb-2 font-bold">{item.title}</h3>
                            <p className="text-rose-700 leading-relaxed font-medium">{item.content}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default StoryTimeline;

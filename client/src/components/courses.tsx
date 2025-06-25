import { motion } from "framer-motion";

export default function Courses() {
  return (
    <section id="courses" className="relative py-12 overflow-hidden">
      {/* Comic Book Background Elements */}
      <div className="absolute inset-0 opacity-15">
        {/* Halftone Dot Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '15px 15px'
        }}></div>
        
        {/* Comic Action Words */}
        <div className="absolute top-10 left-20 text-5xl font-black text-white/40 transform rotate-12 font-mono">
          BOOM!
        </div>
        
        <div className="absolute bottom-20 right-16 text-4xl font-black text-yellow-300/50 transform -rotate-12 font-mono">
          ZAP!
        </div>
        
        <div className="absolute top-1/2 left-10 text-3xl font-black text-pink-300/40 transform rotate-45 font-mono">
          WOW!
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 right-1/4 w-16 h-16 bg-white/20 transform rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-yellow-300/30 rounded-full"></div>
        
        {/* Speed Lines */}
        <div className="absolute top-1/3 right-10">
          <div className="w-20 h-1 bg-white/30 transform rotate-12 mb-2"></div>
          <div className="w-16 h-1 bg-white/30 transform rotate-12 mb-2"></div>
          <div className="w-12 h-1 bg-white/30 transform rotate-12"></div>
        </div>
        
        {/* Comic Burst */}
        <div className="absolute bottom-16 left-16">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-white/40 transform rotate-0"></div>
            <div className="absolute inset-0 bg-white/40 transform rotate-45"></div>
            <div className="absolute inset-0 bg-white/40 transform rotate-90"></div>
            <div className="absolute inset-0 bg-white/40 transform rotate-135"></div>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center py-24">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-norwester font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            SOMETHING BIG IS COMING!
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

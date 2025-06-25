import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/Logo-removebg-preview_1750665967959.png";

export default function Hero() {
  const courses = [
    {
      id: 1,
      title: "Upcoming Events",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Free CSS Anthropology",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Free CSS Business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "CSS Philosophy",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "Free MDCAT Bridge Batch",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "MDCAT 2025 Practice Book",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=center",
    },
    {
      id: 7,
      title: "MDCAT Grand Laboratory",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=center",
    },
  ];

  return (
    <section id="home" className="relative text-white pt-16 overflow-hidden">
      {/* Comic Book Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Comic Book Dots Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Comic Book Speech Bubbles */}
        <div className="absolute top-20 left-10 w-24 h-16 bg-white/20 rounded-full transform rotate-12">
          <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/20"></div>
        </div>
        
        <div className="absolute top-32 right-20 w-32 h-20 bg-yellow-300/30 rounded-2xl transform -rotate-6">
          <div className="absolute bottom-0 right-6 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-yellow-300/30"></div>
        </div>
        
        <div className="absolute bottom-32 left-1/4 w-28 h-18 bg-pink-300/30 rounded-xl transform rotate-3">
          <div className="absolute bottom-0 left-4 w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-t-pink-300/30"></div>
        </div>
        
        {/* Comic Book Action Words */}
        <div className="absolute top-1/4 right-1/4 text-4xl font-black text-white/30 transform rotate-12 font-mono">
          POW!
        </div>
        
        <div className="absolute bottom-1/3 left-1/3 text-3xl font-black text-yellow-300/40 transform -rotate-6 font-mono">
          LEARN!
        </div>
        
        <div className="absolute top-1/2 right-10 text-2xl font-black text-pink-300/35 transform rotate-25 font-mono">
          COOL!
        </div>
        
        {/* Comic Book Lines and Shapes */}
        <div className="absolute top-16 right-1/3 w-1 h-20 bg-white/20 transform rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-16 bg-white/20 transform -rotate-45"></div>
        
        {/* Star Bursts */}
        <div className="absolute top-1/3 left-1/4">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-white/30 transform rotate-45"></div>
            <div className="absolute inset-0 bg-white/30 transform rotate-0"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/3">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 bg-yellow-300/40 transform rotate-45"></div>
            <div className="absolute inset-0 bg-yellow-300/40 transform rotate-0"></div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">


        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <motion.img
            src={logoPath}
            alt="EduNautics Logo"
            className="w-96 h-96 opacity-90 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <motion.span
            className="font-seasons text-4xl md:text-5xl text-black mt-4 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            edunautics
          </motion.span>
          <motion.p
            className="text-lg text-black mt-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            USA-based Edu-tech company!
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="text-center">
          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl font-bold text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <strong>Where learning isn't just about lectures. It's about doing, building and growing</strong>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

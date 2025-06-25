import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Home, Info, BookOpen, Mail, Facebook, Instagram, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoPath from "@assets/Logo-removebg-preview_1750665967959.png";
import { useSearch } from "@/hooks/useSearch";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }
  };

  const navigationItems = [
    { name: "Home", id: "home", icon: Home },
    { name: "About Us", id: "features", icon: Info },
    { name: "Courses", id: "courses", icon: BookOpen },
    { name: "Contact Us", id: "contact", icon: Mail },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Menu and Logo */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-700 hover:text-teal-600 p-1 md:p-2"
              >
                <Menu className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
              <div className="flex items-center space-x-2 md:space-x-3">
                <img
                  src={logoPath}
                  alt="EduNautics Logo"
                  className="h-8 md:h-12 w-auto"
                />
                <span className="font-seasons text-sm md:text-lg text-gray-700">edunautics</span>
              </div>
            </div>

            {/* Center - Empty Space */}
            <div className="flex-1"></div>

            {/* Right Side - Contact and Join Button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                className="hidden md:flex bg-black hover:bg-gray-800 text-white border-black px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm md:text-base"
              >
                +92 340 5118376
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white px-4 md:px-6 py-2 rounded-lg font-medium transition-colors text-sm md:text-base">
                Join us
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Expandable Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed left-0 top-0 h-full w-80 shadow-2xl z-50 overflow-y-auto"
            style={{
              background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 30%, #2a2a2a 60%, #1a1a1a 100%)'
            }}
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">EN</span>
                  </div>
                  <h2 className="text-xl font-bold text-white">EduNautics</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-200 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 py-6">
                <nav className="space-y-2 px-4">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white hover:bg-gray-600 hover:text-white rounded-lg transition-all duration-200 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <item.icon className="h-5 w-5 text-gray-200 group-hover:text-white" />
                      <span className="font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                </nav>

                {/* Divider */}
                <div className="mx-4 my-6 border-t border-gray-400"></div>

                {/* Additional Links */}
                <div className="px-4 space-y-2">
                  <motion.a
                    href="#"
                    className="flex items-center space-x-3 px-4 py-3 text-black hover:bg-white/20 hover:text-black rounded-lg transition-all duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ x: 4 }}
                  >
                    <BookOpen className="h-5 w-5 text-gray-200 group-hover:text-white" />
                    <span className="font-medium">How to Learn</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center space-x-3 px-4 py-3 text-black hover:bg-white/20 hover:text-black rounded-lg transition-all duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ x: 4 }}
                  >
                    <Info className="h-5 w-5 text-gray-200 group-hover:text-white" />
                    <span className="font-medium">Blog</span>
                  </motion.a>
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-gray-400">
                {/* Contact Button */}
                <Button className="w-full bg-white hover:bg-gray-100 text-black py-3 rounded-lg font-medium transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

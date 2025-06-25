import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter.",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter/subscriptions"] });
    },
    onError: (error: any) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "Failed to subscribe to newsletter. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(email);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/p/1Ao9oU95JN/", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/edunautics/#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "About Us", action: () => scrollToSection("features") },
    { name: "All Courses", action: () => scrollToSection("courses") },
    { name: "Instructors", href: "#" },
    { name: "Student Success", href: "#" },
    { name: "Help Center", href: "#" },
  ];

  return (
    <footer id="contact" className="relative text-white py-16 overflow-hidden">
      {/* Comic Book Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Halftone Dot Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '18px 18px'
        }}></div>
        
        {/* Comic Action Words */}
        <div className="absolute top-20 right-20 text-6xl font-black text-white/30 transform -rotate-12 font-mono">
          BAM!
        </div>
        
        <div className="absolute bottom-32 left-16 text-4xl font-black text-cyan-300/40 transform rotate-15 font-mono">
          SUPER!
        </div>
        
        {/* Geometric Comic Elements */}
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/15 transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-yellow-300/20 rounded-full"></div>
        
        {/* Lightning Bolts */}
        <div className="absolute top-16 left-1/3">
          <svg className="w-12 h-12 text-white/25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
          </svg>
        </div>
        
        {/* Star Burst */}
        <div className="absolute top-1/2 right-16">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-white/30 transform rotate-0"></div>
            <div className="absolute inset-0 bg-white/30 transform rotate-60"></div>
            <div className="absolute inset-0 bg-white/30 transform rotate-120"></div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-center">
          {/* Social Icons Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 EduNautics. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

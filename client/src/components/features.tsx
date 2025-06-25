import { motion } from "framer-motion";
import { GraduationCap, Route, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in their fields.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Route,
    title: "Personalized Learning Paths",
    description: "Customized curricula that adapt to your learning style and pace.",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Study at your own pace with 24/7 access to course materials and resources.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and achievements.",
    color: "text-purple-600 bg-purple-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EduNautics?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make learning with us an exceptional experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-lg text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

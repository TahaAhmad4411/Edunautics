import Header from "@/components/header";
import Hero from "@/components/hero";
import Courses from "@/components/courses";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Footer />
    </div>
  );
}

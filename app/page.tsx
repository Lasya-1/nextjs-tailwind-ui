import Image from "next/image";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-8 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Posts */}
          <MainContent />

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

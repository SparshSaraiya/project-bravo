import { Outlet } from "react-router-dom";

import { Footer } from "./ui/Footer";
import Header from "./ui/Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* <Outlet /> is a placeholder. React Router replaces this with the component for the current URL. */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

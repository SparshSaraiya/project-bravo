import { useState } from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Credits } from "./components/Credits";
import { Contact } from "./components/Contact";
import { ExpenseLogging } from "./components/ExpenseLogging";
import { ExpenseReport } from "./components/ExpenseReport";
import { AdminWindow } from "./components/AdminWindow";
import { Button } from "./components/ui/button";
import { Menu, Home as HomeIcon, Info, Award, Mail, Wallet, BarChart3, Shield } from "lucide-react";

type Page = "home" | "about" | "credits" | "contact" | "expenses" | "reports" | "admin";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: "home" as Page, label: "Home", icon: HomeIcon },
    { id: "expenses" as Page, label: "Expense Logging", icon: Wallet },
    { id: "reports" as Page, label: "Expense Report", icon: BarChart3 },
    { id: "admin" as Page, label: "Admin", icon: Shield },
    { id: "about" as Page, label: "About", icon: Info },
    { id: "credits" as Page, label: "Credits", icon: Award },
    { id: "contact" as Page, label: "Contact", icon: Mail },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "credits":
        return <Credits />;
      case "contact":
        return <Contact />;
      case "expenses":
        return <ExpenseLogging />;
      case "reports":
        return <ExpenseReport />;
      case "admin":
        return <AdminWindow />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Wallet className="w-8 h-8 text-blue-600" />
              <h1 className="text-slate-900">Expense Tracker</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    onClick={() => setCurrentPage(item.id)}
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

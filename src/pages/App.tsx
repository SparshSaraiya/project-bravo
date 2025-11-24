import { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import {
  Menu,
  Home as HomeIcon,
  Info,
  Award,
  Mail,
  Wallet,
  BarChart3,
  Shield,
} from "lucide-react";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Credits } from "../pages/Credits";
import { Contact } from "../pages/Contact";
import { ExpenseLogging } from "../pages/ExpenseLogging";
import { ExpenseReport } from "../pages/ExpenseReport";
import { AdminWindow } from "../pages/AdminWindow";
import NotFound from "../pages/NotFound";
import { Button } from "../components/ui/button";

export default function App() {
  // const navigate = useNavigate(); // navigation function
  const location = useLocation(); // gives url
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { path: "/", label: "Home", icon: HomeIcon },
    { path: "/expenses", label: "Expense Logging", icon: Wallet },
    { path: "/reports", label: "Expense Report", icon: BarChart3 },
    { path: "/admin", label: "Admin", icon: Shield },
    { path: "/about", label: "About", icon: Info },
    { path: "/credits", label: "Credits", icon: Award },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

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
                // determine if the current url path matches the item's path for styling
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    variant={isActive ? "default" : "ghost"}
                    asChild // use asChild to wrap Link component so we can keep button styles from Button component. Link for accessibility and SPA navigation vs. a button
                    className="gap-2"
                  >
                    <Link to={item.path}>
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
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
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => {
                      // navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                    asChild // use asChild to wrap Link component so we can keep button styles from Button component
                    className="w-full justify-start gap-2"
                  >
                    <Link to={item.path}>
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* define routes */}
        <Routes>
          {/* root route "/" */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expenses" element={<ExpenseLogging />} />
          <Route path="/reports" element={<ExpenseReport />} />
          <Route path="/admin" element={<AdminWindow />} />
          {/* error route: "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

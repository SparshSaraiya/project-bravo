import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="/credits"
            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            Credits
          </Link>
          <Link
            to="/contact"
            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-1 text-sm text-slate-400">
          Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by
          the team
        </div>
      </div>
    </footer>
  );
}

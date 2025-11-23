import { Card } from "./ui/card";
import { TrendingUp, DollarSign, PieChart, Users } from "lucide-react";

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <h1 className="text-slate-900">Welcome to Expense Tracker</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A comprehensive financial management solution to track your income and expenses,
          generate detailed reports, and maintain complete control over your finances.
        </p>
      </div>

      {/* Project Goals */}
      <div>
        <h2 className="text-slate-900 mb-6">Project Goals</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-slate-900">Track Finances</h3>
            <p className="text-slate-600">
              Log income and expenses with flexible time periods (daily, weekly, monthly, yearly).
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-slate-900">Generate Reports</h3>
            <p className="text-slate-600">
              View comprehensive summaries of income vs expenses and remaining balance.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <PieChart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-slate-900">Visual Analytics</h3>
            <p className="text-slate-600">
              Understand spending patterns with visual category breakdowns and charts.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-slate-900">User Management</h3>
            <p className="text-slate-600">
              Admin controls to manage users, edit entries, and generate system-wide reports.
            </p>
          </Card>
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-slate-900 mb-6">Key Features</h2>
        <Card className="p-6">
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-700">Add, edit, and delete income/expense entries</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-700">Flexible time period tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-700">Income vs expense comparisons</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-700">Category-based expense organization</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-700">Monthly summaries and balance tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-700">Admin dashboard for user management</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

import { Card } from "../components/ui/card";
import { CheckCircle2 } from "lucide-react";

const contributions = [
  {
    name: "John Smith",
    role: "Lead Developer",
    contributions: [
      "Designed and implemented the database schema",
      "Developed the expense logging functionality",
      "Created the admin dashboard and user management",
      "Integrated authentication and authorization",
    ],
    imageQuery: "professional developer portrait",
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    contributions: [
      "Created wireframes and mockups for all windows",
      "Designed the visual identity and color scheme",
      "Conducted user testing and feedback sessions",
      "Developed the responsive layout system",
    ],
    imageQuery: "professional designer portrait woman",
  },
  {
    name: "Michael Chen",
    role: "Backend Developer",
    contributions: [
      "Built RESTful API endpoints",
      "Implemented report generation algorithms",
      "Optimized database queries for performance",
      "Set up cloud infrastructure and deployment",
    ],
    imageQuery: "professional developer portrait asian",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    contributions: [
      "Coordinated team meetings and sprint planning",
      "Managed project timeline and deliverables",
      "Documented requirements and specifications",
      "Ensured quality assurance and testing",
    ],
    imageQuery: "professional manager portrait woman",
  },
];

export function Credits() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-slate-900">Project Credits</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Recognizing the individual contributions that made this project
          possible. Each team member played a crucial role in bringing Expense
          Tracker to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {contributions.map((person, index) => (
          <Card key={index} className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-slate-200 rounded-full overflow-hidden flex-shrink-0">
                {/* placeholder for team images */}
              </div>
              <div>
                <h3 className="text-slate-900">{person.name}</h3>
                <p className="text-slate-600">{person.role}</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-slate-700">Contributions:</p>
              <ul className="space-y-2">
                {person.contributions.map((contribution, contribIndex) => (
                  <li key={contribIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

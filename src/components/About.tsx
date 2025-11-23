import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Briefcase, Code } from "lucide-react";

const teamMembers = [
  {
    name: "John Smith",
    role: "Lead Developer",
    education: "BSc Computer Science, State University (2020)",
    skills: ["React", "TypeScript", "Node.js", "Database Design"],
    experience: "3 years of full-stack development experience, specializing in financial applications",
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    education: "BA Design & Media, Design Institute (2019)",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
    experience: "4 years designing user-centered applications for fintech and e-commerce",
  },
  {
    name: "Michael Chen",
    role: "Backend Developer",
    education: "MSc Software Engineering, Tech University (2021)",
    skills: ["Python", "SQL", "API Development", "Cloud Services"],
    experience: "5 years building scalable backend systems and RESTful APIs",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    education: "MBA Technology Management, Business School (2018)",
    skills: ["Agile", "Scrum", "Project Planning", "Team Leadership"],
    experience: "6 years managing cross-functional teams in software development projects",
  },
];

export function About() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-slate-900">About Our Team</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Meet the talented individuals behind Expense Tracker. Our diverse team brings together
          expertise in development, design, and project management.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="p-6 space-y-4">
            <div className="space-y-1">
              <h3 className="text-slate-900">{member.name}</h3>
              <p className="text-slate-600">{member.role}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-700">Education</p>
                  <p className="text-slate-600">{member.education}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-700 mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-700">Experience</p>
                  <p className="text-slate-600">{member.experience}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

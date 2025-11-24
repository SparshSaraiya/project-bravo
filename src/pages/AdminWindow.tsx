import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Users,
  FileText,
  BarChart3,
  Search,
  UserPlus,
  Download,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive";
  joinDate: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    status: "active",
    joinDate: "2025-01-01",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    status: "active",
    joinDate: "2025-03-15",
  },
  {
    id: "3",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    status: "active",
    joinDate: "2025-05-20",
  },
  {
    id: "4",
    name: "Bob Wilson",
    email: "bob@example.com",
    role: "user",
    status: "inactive",
    joinDate: "2025-02-10",
  },
];

export function AdminWindow() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleStatus = (userId: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "active" ? "inactive" : "active",
            }
          : user
      )
    );
    toast.success("User status updated");
  };

  const handleExportReport = (reportType: string) => {
    toast.success(`${reportType} report exported successfully`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-600">
          Manage users, entries, and generate reports
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-slate-600">Total Users</p>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-slate-900">{users.length}</p>
          <p className="text-slate-600">
            {users.filter((u) => u.status === "active").length} active
          </p>
        </Card>

        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-slate-600">Total Entries</p>
            <FileText className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-slate-900">247</p>
          <p className="text-slate-600">This month: 42</p>
        </Card>

        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-slate-600">System Health</p>
            <BarChart3 className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-slate-900">Excellent</p>
          <p className="text-slate-600">All systems operational</p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="users" className="space-y-6">
        <TabsList>
          <TabsTrigger value="users" className="gap-2">
            <Users className="w-4 h-4" />
            User Management
          </TabsTrigger>
          <TabsTrigger value="entries" className="gap-2">
            <FileText className="w-4 h-4" />
            All Entries
          </TabsTrigger>
          <TabsTrigger value="reports" className="gap-2">
            <BarChart3 className="w-4 h-4" />
            Reports
          </TabsTrigger>
        </TabsList>

        {/* User Management Tab */}
        <TabsContent value="users" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <UserPlus className="w-4 h-4" />
                  Add User
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                </DialogHeader>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("User added successfully");
                    setIsAddUserOpen(false);
                  }}
                >
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input placeholder="Full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Select defaultValue="user">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">
                    Add User
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === "admin" ? "default" : "secondary"
                        }
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.status === "active" ? "default" : "secondary"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleToggleStatus(user.id)}
                      >
                        Toggle Status
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* All Entries Tab */}
        <TabsContent value="entries" className="space-y-4">
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-slate-900">All User Entries</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>2025-10-25</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Income</Badge>
                    </TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell className="text-right">$5,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>2025-10-24</TableCell>
                    <TableCell>
                      <Badge>Expense</Badge>
                    </TableCell>
                    <TableCell>Groceries</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>2025-10-23</TableCell>
                    <TableCell>
                      <Badge>Expense</Badge>
                    </TableCell>
                    <TableCell>Rent</TableCell>
                    <TableCell className="text-right">$1,200.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <h3 className="text-slate-900">User Activity Report</h3>
              <p className="text-slate-600">
                Generate comprehensive reports on user activity and engagement.
              </p>
              <Button
                className="gap-2 w-full"
                onClick={() => handleExportReport("User Activity")}
              >
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-slate-900">Financial Summary</h3>
              <p className="text-slate-600">
                System-wide financial summaries including all users' income and
                expenses.
              </p>
              <Button
                className="gap-2 w-full"
                onClick={() => handleExportReport("Financial Summary")}
              >
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-slate-900">Category Analysis</h3>
              <p className="text-slate-600">
                Detailed breakdown of spending patterns across all categories.
              </p>
              <Button
                className="gap-2 w-full"
                onClick={() => handleExportReport("Category Analysis")}
              >
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-slate-900">Monthly Trends</h3>
              <p className="text-slate-600">
                Track monthly trends in income, expenses, and savings rates.
              </p>
              <Button
                className="gap-2 w-full"
                onClick={() => handleExportReport("Monthly Trends")}
              >
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

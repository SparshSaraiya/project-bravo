import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Building2, Users } from "lucide-react";
import { toast } from "sonner";

export function Onboarding() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [joinCode, setJoinCode] = useState("");

  // OPTION A: Create New Organization
  const handleCreateOrg = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      // 1. Create the Organization
      const { data: org, error: orgError } = await supabase
        .from("organizations")
        .insert({ name: orgName })
        .select()
        .single();

      if (orgError) throw orgError;

      // 2. Update Profile to link to this Org (as Admin)
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          organization_id: org.id,
          role: "admin",
        })
        .eq("id", user.id);

      if (profileError) throw profileError;

      toast.success("Organization created!");
      // Force a reload so the AuthContext picks up the new organization_id
      window.location.href = "/expenses";
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {/* Card 1: Create Organization */}
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Create Workspace</CardTitle>
            <CardDescription>
              Start a new organization for your company or family. You will be
              the admin.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateOrg} className="space-y-4">
              <div className="space-y-2">
                <Label>Organization Name</Label>
                <Input
                  placeholder="Acme Corp"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating..." : "Create & Continue"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Card 2: Join Existing */}
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle>Join Team</CardTitle>
            <CardDescription>
              Have an invite code? Enter it here to join an existing workspace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Join Code</Label>
                <Input
                  placeholder="e.g. 8f3a2b1c"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                />
              </div>
              <Button variant="outline" className="w-full" disabled>
                Join Organization (Coming Soon)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

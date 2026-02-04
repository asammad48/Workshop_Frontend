import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { confirm } from "../components/ui/ConfirmDialog";
import { toast } from "../components/ui/Toast";
import { useAuthStore } from "../state/authStore";

export function DashboardPage() {
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);

  async function doLogout() {
    const ok = await confirm({
      title: "Logout?",
      message: "You will need to login again.",
      confirmText: "Logout",
      cancelText: "Cancel"
    });
    if (!ok) return;
    logout();
    toast.info("Logged out");
  }

  return (
    <div className="page">
      <Card title="Dashboard">
        <p className="muted">Welcome {user?.email ?? "User"}.</p>
        <div className="row">
          <Button onClick={() => toast.success("Toast works")}>Toast test</Button>
          <Button variant="danger" onClick={doLogout}>Logout</Button>
        </div>
      </Card>
    </div>
  );
}

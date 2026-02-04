import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";
import { toast } from "../../components/ui/Toast";
import { useAuthStore } from "../../state/authStore";
import { authRepo } from "../../api/repositories/authRepo";

export function LoginPage() {
  const nav = useNavigate();
  const loc = useLocation() as any;
  const setAuth = useAuthStore(s => s.setAuth);

  const [email, setEmail] = useState("admin@demo.com");
  const [password, setPassword] = useState("Admin@123");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authRepo.login({ email, password });
      setAuth(res.accessToken, res.user);
      toast.success("Logged in");
      const to = loc.state?.from || "/";
      nav(to);
    } catch (err: any) {
      toast.error(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pageCenter">
      <Card title="Login">
        <form onSubmit={submit} className="stack">
          <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" disabled={loading}>{loading ? "Please wait..." : "Login"}</Button>
        </form>
      </Card>
    </div>
  );
}

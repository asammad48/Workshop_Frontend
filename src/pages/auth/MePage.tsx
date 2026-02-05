import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../state/authStore";
import { authRepo } from "../../api/repositories/authRepo";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { toast } from "../../components/ui/Toast";
import { useUiStore } from "../../state/uiStore";

export function MePage() {
  const { user } = useAuthStore();
  const [meData, setMeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authRepo.me()
      .then(res => {
        if (res.data) setMeData(res.data);
      })
      .catch(() => toast.error("Failed to load user info"))
      .finally(() => setLoading(false));
  }, []);

  const handleChangePasswordClick = () => {
    useUiStore.getState().openModal({
      title: "Change Password",
      content: <ChangePasswordModal />
    });
  };

  if (loading) return <div className="page">Loading...</div>;

  return (
    <div className="page">
      <Card title="My Profile">
        <div className="stack">
          <div>
            <strong>Email:</strong> {meData?.email || user?.email}
          </div>
          <div>
            <strong>Role:</strong> {meData?.role || user?.role}
          </div>
          <div>
            <strong>Branch ID:</strong> {meData?.branchId || user?.branchId || "N/A"}
          </div>
          <div style={{ marginTop: "12px" }}>
            <Button onClick={handleChangePasswordClick}>Change Password</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ChangePasswordModal() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await authRepo.changePassword({ currentPassword, newPassword });
      toast.success("Password changed successfully");
      useUiStore.getState().closeModal();
    } catch (err: any) {
      toast.error(err.message || "Failed to change password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stack">
      <Input 
        label="Current Password" 
        type="password" 
        value={currentPassword} 
        onChange={e => setCurrentPassword(e.target.value)} 
        required 
      />
      <Input 
        label="New Password" 
        type="password" 
        value={newPassword} 
        onChange={e => setNewPassword(e.target.value)} 
        required 
      />
      <div className="row" style={{ justifyContent: "flex-end", marginTop: "12px" }}>
        <Button type="submit" disabled={submitting}>
          {submitting ? "Changing..." : "Change Password"}
        </Button>
      </div>
    </form>
  );
}

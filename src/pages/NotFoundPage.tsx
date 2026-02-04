import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";

export function NotFoundPage() {
  return (
    <div className="pageCenter">
      <Card title="404">
        <p className="muted">Page not found.</p>
        <Link to="/">Go home</Link>
      </Card>
    </div>
  );
}

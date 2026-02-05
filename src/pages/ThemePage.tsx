import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import styles from "../components/ui/ui.module.css";

export const ThemePage = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Theme Showcase</h1>
      
      <section style={{ marginBottom: "2rem" }}>
        <h2>Cards</h2>
        <Card title="Simple Card">
          <p>This is a simple card component used throughout the application.</p>
        </Card>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Buttons</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button>Default Button</Button>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Inputs</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Input label="Default Input" placeholder="Type something..." />
          <Input label="Disabled Input" placeholder="I am disabled" disabled />
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Typography</h2>
        <h1 className={styles.h1}>Heading 1</h1>
        <h2 className={styles.h2}>Heading 2</h2>
        <h3 className={styles.h3}>Heading 3</h3>
        <p className={styles.p}>Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </div>
  );
};

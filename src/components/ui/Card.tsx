import cls from "./ui.module.css";

export function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className={cls.card}>
      {title ? <h2 className={cls.cardTitle}>{title}</h2> : null}
      {children}
    </section>
  );
}

import type { ButtonHTMLAttributes } from "react";
import cls from "./ui.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export function Button({ variant = "primary", className = "", ...rest }: Props) {
  const v = variant === "primary" ? cls.btnPrimary : variant === "danger" ? cls.btnDanger : cls.btnSecondary;
  return <button {...rest} className={[cls.btn, v, className].join(" ")} />;
}

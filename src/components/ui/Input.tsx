import type { InputHTMLAttributes } from "react";
import cls from "./ui.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string; };

export function Input({ label, className = "", ...rest }: Props) {
  return (
    <label className={cls.field}>
      {label ? <span className={cls.label}>{label}</span> : null}
      <input {...rest} className={[cls.input, className].join(" ")} />
    </label>
  );
}

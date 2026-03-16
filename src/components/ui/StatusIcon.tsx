import type { ReactNode } from "react";
import clsx from "clsx";

type Variant = "error" | "success";

interface Props {
  icon: ReactNode;
  variant: Variant;
}

/**
 * Ícone visual utilizado em telas de feedback
 * como sucesso ou erro.
 */
export default function StatusIcon({ icon, variant }: Props) {
  const variants = {
    error: {
      outer: "bg-[#FF6467]/40",
      inner: "bg-error border-[#FFB3B5]",
      icon: "text-[#FFB3B5]",
    },
    success: {
      outer: "bg-success/20",
      inner: "bg-success border-green-200",
      icon: "text-green-200",
    },
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full",
        "h-[136px] w-[136px]",
        variants[variant].outer,
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-center rounded-full",
          "h-[130px] w-[130px]",
          "border-[2px]",
          variants[variant].inner,
        )}
      >
        <div className={variants[variant].icon}>{icon}</div>
      </div>
    </div>
  );
}

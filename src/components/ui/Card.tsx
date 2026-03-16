import type { ReactNode } from "react";
import clsx from "clsx";

/**
 * Props do componente Card.
 */
interface CardProps {
  /**
   * Conteúdo interno do card.
   */
  children: ReactNode;

  /**
   * Classes adicionais para customização.
   */
  className?: string;
}

/**
 * Componente de container reutilizável.
 * Utilizado para agrupar conteúdos da interface.
 */
export default function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("rounded-card bg-surface p-4 shadow-sm", className)}>
      {children}
    </div>
  );
}

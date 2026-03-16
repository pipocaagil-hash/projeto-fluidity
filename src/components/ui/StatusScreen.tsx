import type { ReactNode } from "react";
import AppLayout from "../layout/AppLayout";

interface StatusScreenProps {
  icon: ReactNode;
  title: string;
  descriptionPrimary?: ReactNode;
  descriptionSecondary?: ReactNode;
  errorCard?: ReactNode;
  action?: ReactNode;
  footer?: string;
}

/**
 * Layout reutilizável para telas de status
 * como sucesso, erro ou estados vazios.
 */
export default function StatusScreen({
  icon,
  title,
  descriptionPrimary,
  descriptionSecondary,
  errorCard,
  action,
  footer,
}: StatusScreenProps) {
  return (
    <AppLayout>
      <div className="flex h-full flex-col items-center px-6 text-center">
        <div className="flex w-full max-w-sm flex-1 flex-col items-center justify-center">
          <div className="mb-8">{icon}</div>

          <h1 className="text-[30px] font-semibold leading-[36px] text-[#1E2939]">
            {title}
          </h1>

          {descriptionPrimary && (
            <p className="mt-3 text-base leading-6 text-[#4A5565]">
              {descriptionPrimary}
            </p>
          )}

          {descriptionSecondary && (
            <p className="mt-1 text-sm leading-5 text-[#6A7282]">
              {descriptionSecondary}
            </p>
          )}

          {errorCard && <div className="mt-6 w-full">{errorCard}</div>}

          {action && <div className="mt-8 w-full">{action}</div>}

          {footer && <p className="mt-8 text-xs text-[#9AA1AC]">{footer}</p>}
        </div>
      </div>
    </AppLayout>
  );
}

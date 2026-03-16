import { AlertCircle, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

import StatusScreen from "../components/ui/StatusScreen";
import StatusIcon from "../components/ui/StatusIcon";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

/**
 * Tela exibida quando ocorre erro
 * ao registrar o humor do usuário.
 */
export default function MoodError() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#FFE2E2] to-[#FEF2F2]">
      <StatusScreen
        icon={<StatusIcon variant="error" icon={<AlertCircle size={52} />} />}
        title="Ops! Algo deu errado"
        descriptionPrimary="Não conseguimos registrar seu humor"
        descriptionSecondary="Verifique sua conexão com a internet e tente novamente"
        errorCard={
          <Card className="w-full border border-red-200">
            <p className="text-sm font-medium text-error">
              Código do erro: #500
            </p>

            <p className="text-xs text-[#6A7282]">
              Falha ao conectar com o servidor
            </p>
          </Card>
        }
        action={
          <Button
            variant="error"
            fullWidth
            icon={<RefreshCw size={16} />}
            onClick={() => navigate("/")}
          >
            Tentar novamente
          </Button>
        }
        footer="Se o problema persistir, entre em contato com o suporte"
      />
    </div>
  );
}

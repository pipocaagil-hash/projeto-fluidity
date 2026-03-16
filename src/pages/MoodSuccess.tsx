import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

import StatusScreen from "../components/ui/StatusScreen";
import StatusIcon from "../components/ui/StatusIcon";
import Button from "../components/ui/Button";

export default function MoodSuccess() {
  const navigate = useNavigate();

  return (
    <StatusScreen
      icon={<StatusIcon variant="success" icon={<Check size={48} />} />}
      title="Humor registrado!"
      descriptionPrimary="Que bom que você registrou seu humor"
      action={
        <Button variant="success" fullWidth onClick={() => navigate("/")}>
          Ir para Home
        </Button>
      }
    />
  );
}

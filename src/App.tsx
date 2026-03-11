import { Routes, Route } from "react-router-dom";
import Emotion from "./pages/Emotion";
import MoodSuccess from "./pages/MoodSuccess";
import MoodError from "./pages/MoodError";
import History from "./pages/History";

/**
 * Componente raiz da aplicação.
 *
 * Responsável por configurar o roteamento principal
 * utilizando React Router.
 *
 * Cada rota representa uma tela do fluxo principal
 * de registro e acompanhamento de humor do usuário.
 *
 * Rotas atuais:
 * /          → Tela de emoção (registro de humor)
 * /success   → Tela de confirmação de registro
 * /error     → Tela de erro no registro
 * /history   → Tela de histórico de humor
 *
 * @returns Estrutura de rotas da aplicação
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Emotion />} />
      <Route path="/success" element={<MoodSuccess />} />
      <Route path="/error" element={<MoodError />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;

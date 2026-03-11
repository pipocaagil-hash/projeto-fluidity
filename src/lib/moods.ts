import type { MoodType } from "../types/mood";

/**
 * Lista de humores disponíveis na aplicação.
 *
 * Cada item representa um estado emocional
 * que o usuário pode selecionar durante o
 * registro diário de humor.
 *
 * Estrutura:
 * - value: valor persistido no banco de dados
 * - emoji: representação visual exibida na interface
 * - label: descrição textual exibida ao usuário
 */
export const moods: {
  value: MoodType;
  emoji: string;
  label: string;
}[] = [
  {
    value: "happy",
    emoji: "🙂",
    label: "Feliz",
  },
  {
    value: "sad",
    emoji: "😢",
    label: "Triste",
  },
  {
    value: "tired",
    emoji: "😴",
    label: "Cansado",
  },
  {
    value: "excited",
    emoji: "😄",
    label: "Entusiasmado",
  },
  {
    value: "angry",
    emoji: "😡",
    label: "Irritado",
  },
  {
    value: "anxious",
    emoji: "😟",
    label: "Ansioso",
  },
];
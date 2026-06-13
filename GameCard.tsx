import { Card } from "@/lib/gameData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  card: Card;
  onAccept: (cardId: number) => void;
  onReject: (cardId: number) => void;
  disabled?: boolean;
}

export function GameCard({
  card,
  onAccept,
  onReject,
  disabled = false,
}: GameCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const themeColors = {
    physical: "bg-red-100 border-red-300",
    social: "bg-blue-100 border-blue-300",
    cyber: "bg-purple-100 border-purple-300",
    emotional: "bg-yellow-100 border-yellow-300",
  };

  const themeBadgeColors = {
    physical: "bg-red-500",
    social: "bg-blue-500",
    cyber: "bg-purple-500",
    emotional: "bg-yellow-500",
  };

  const themeLabels = {
    physical: "Agressão Física",
    social: "Exclusão Social",
    cyber: "Cyberbullying",
    emotional: "Emocional",
  };

  return (
    <div className="w-full h-full perspective">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isFlipped ? "scale-x-[-1]" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full rounded-2xl p-6 border-2 flex flex-col justify-between cursor-pointer transition-all hover:shadow-lg ${themeColors[card.theme]} ${
            !isFlipped ? "block" : "hidden"
          }`}
          onClick={() => !disabled && setIsFlipped(true)}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <Badge className={`${themeBadgeColors[card.theme]} text-white mb-4`}>
              {themeLabels[card.theme]}
            </Badge>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {card.title}
            </h3>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 font-semibold">
              Clique para ver o desafio
            </p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full rounded-2xl p-6 border-2 bg-gradient-to-br from-orange-50 to-blue-50 border-orange-300 flex flex-col justify-between overflow-y-auto ${
            isFlipped ? "block" : "hidden"
          }`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Situação de Alana
            </h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              {card.situation}
            </p>

            <h4 className="text-md font-bold text-orange-600 mb-2">
              Seu Desafio:
            </h4>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              {card.challenge}
            </p>

            {card.law && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-xs font-semibold text-red-700">
                  ⚖️ {card.law}
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-300">
            <Button
              onClick={() => {
                onAccept(card.id);
                setIsFlipped(false);
              }}
              disabled={disabled}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
            >
              Aceitar Desafio
            </Button>
            <Button
              onClick={() => {
                onReject(card.id);
                setIsFlipped(false);
              }}
              disabled={disabled}
              variant="outline"
              className="flex-1"
            >
              Rejeitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

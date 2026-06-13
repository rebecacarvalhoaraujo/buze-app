import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CARDS, BULLYING_STATISTICS, TIPS_AND_RESOURCES, EMERGENCY_CONTACTS } from "@/lib/gameData";
import { GameCard } from "@/components/GameCard";
import { Heart, Trophy, AlertCircle, BookOpen } from "lucide-react";

/**
 * BuZe App - Jogo Educativo Contra Bullying
 * Design: Playful Empowerment
 * Colors: Orange (#FF6B35), Blue (#4A90E2), Green (#2ECC71)
 * Typography: Fredoka One (headlines), Poppins (body)
 */

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [cardsCompleted, setCardsCompleted] = useState<number[]>([]);
  const [alanaHealth, setAlanaHealth] = useState(100);
  const [badges, setBadges] = useState<string[]>([]);

  const currentCard = CARDS[currentCardIndex];
  const remainingCards = CARDS.length - cardsCompleted.length;

  const handleAcceptChallenge = (cardId: number) => {
    setScore(score + 10);
    setCardsCompleted([...cardsCompleted, cardId]);
    setAlanaHealth(Math.min(alanaHealth + 5, 100));

    // Award badges
    if (cardsCompleted.length + 1 === 5) {
      setBadges([...badges, "Iniciante"]);
    }
    if (cardsCompleted.length + 1 === 10) {
      setBadges([...badges, "Protetor"]);
    }
    if (cardsCompleted.length + 1 === 20) {
      setBadges([...badges, "Herói da Empatia"]);
    }

    // Move to next card
    if (currentCardIndex < CARDS.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setGameStarted(false);
    }
  };

  const handleRejectChallenge = (cardId: number) => {
    setAlanaHealth(Math.max(alanaHealth - 10, 0));
    setCardsCompleted([...cardsCompleted, cardId]);

    // Move to next card
    if (currentCardIndex < CARDS.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setGameStarted(false);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentCardIndex(0);
    setScore(0);
    setCardsCompleted([]);
    setAlanaHealth(100);
    setBadges([]);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
        {/* Header */}
        <header className="bg-white border-b-2 border-orange-200 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663263576763/QjUk77nDk7TSFNKKq3DGYq/buze_logo-66HafMEtheuLQyvvr2hQJz.webp"
                alt="BuZe Logo"
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-bold text-orange-600">BuZe</h1>
            </div>
            <p className="text-sm text-gray-600">Jogo de Desafio Contra o Bullying</p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Você é o herói desta história
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ajude Alana a superar situações de bullying respondendo desafios educativos. Cada escolha que você faz importa e pode mudar vidas.
              </p>
              <div className="flex gap-4 mb-8">
                <Button
                  onClick={() => setGameStarted(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-xl"
                >
                  🎮 Começar o Jogo
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-600 text-lg px-8 py-6 rounded-xl"
                >
                  📚 Saiba Mais
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                  <p className="text-3xl font-bold text-orange-600">20</p>
                  <p className="text-sm text-gray-600">Cartas de Desafio</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                  <p className="text-3xl font-bold text-blue-600">∞</p>
                  <p className="text-sm text-gray-600">Vidas Impactadas</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <p className="text-3xl font-bold text-green-600">3</p>
                  <p className="text-sm text-gray-600">Badges a Ganhar</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663263576763/QjUk77nDk7TSFNKKq3DGYq/buze_hero_bg-acooj8GkAyoP69T4Tv9GX8.webp"
                alt="Crianças unidas contra bullying"
                className="rounded-2xl shadow-lg max-w-md w-full"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              📊 Bullying no Mundo
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {BULLYING_STATISTICS.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {stat.percentage}%
                  </div>
                  <p className="font-semibold text-gray-800 mb-2">
                    {stat.title}
                  </p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <Tabs defaultValue="tips" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 bg-white border-2 border-gray-200">
              <TabsTrigger value="tips">💡 Dicas</TabsTrigger>
              <TabsTrigger value="resources">📚 Recursos</TabsTrigger>
              <TabsTrigger value="emergency">🆘 Emergência</TabsTrigger>
            </TabsList>

            <TabsContent value="tips" className="space-y-4">
              {TIPS_AND_RESOURCES.map((section, idx) => (
                <Card key={idx} className="p-6 border-2 border-blue-200">
                  <h4 className="text-lg font-bold text-blue-600 mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex gap-3 text-gray-700">
                        <span className="text-blue-500 font-bold">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <Card className="p-6 border-2 border-green-200">
                <h4 className="text-lg font-bold text-green-600 mb-4">
                  Saiba Mais Sobre Bullying
                </h4>
                <p className="text-gray-700 mb-4">
                  Bullying é qualquer forma de agressão, humilhação ou exclusão
                  repetida e intencional. Pode ser físico, verbal, social ou
                  digital (cyberbullying).
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>É importante saber:</strong> Bullying é crime! Existem
                  leis que protegem vítimas e punem agressores.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Saiba Mais
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="emergency" className="space-y-4">
              {EMERGENCY_CONTACTS.map((contact, idx) => (
                <Card key={idx} className="p-6 border-2 border-red-200 bg-red-50">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-red-600 mb-1">
                        {contact.name}
                      </h4>
                      <p className="text-2xl font-bold text-red-700 mb-2">
                        {contact.number}
                      </p>
                      <p className="text-gray-700">{contact.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <p className="text-gray-800">
                  <strong>Lembre-se:</strong> Se você ou alguém que conhece está
                  em perigo, procure ajuda imediatamente. Você não está sozinho!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">
              BuZe - Jogo de Desafio Contra o Bullying
            </p>
            <p className="text-sm text-gray-400">
              Criado com ❤️ para promover empatia e conscientização
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // Game View
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-orange-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663263576763/QjUk77nDk7TSFNKKq3DGYq/buze_logo-66HafMEtheuLQyvvr2hQJz.webp"
                alt="BuZe Logo"
                className="w-8 h-8"
              />
              <h1 className="text-xl font-bold text-orange-600">BuZe</h1>
            </div>
            <Button
              onClick={resetGame}
              variant="outline"
              className="border-orange-300"
            >
              Voltar ao Menu
            </Button>
          </div>

          {/* Game Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-xs text-gray-600">Pontuação</p>
              <p className="text-2xl font-bold text-orange-600">{score}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-gray-600">Cartas Restantes</p>
              <p className="text-2xl font-bold text-blue-600">{remainingCards}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-xs text-gray-600">Saúde de Alana</p>
              <p className="text-2xl font-bold text-red-600">{alanaHealth}%</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-600">Badges</p>
              <p className="text-2xl font-bold text-green-600">{badges.length}/3</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {remainingCards > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Card */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl border-4 border-orange-300 p-8 shadow-lg">
                <div className="h-96 mb-6">
                  <GameCard
                    card={currentCard}
                    onAccept={handleAcceptChallenge}
                    onReject={handleRejectChallenge}
                  />
                </div>
                <div className="text-center text-sm text-gray-600">
                  Carta {cardsCompleted.length + 1} de {CARDS.length}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Alana Character */}
              <Card className="p-6 border-2 border-purple-200 bg-purple-50 text-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663263576763/QjUk77nDk7TSFNKKq3DGYq/alana_character-mRtzYGNhVFSsekkdXaymYu.webp"
                  alt="Alana"
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Alana</h3>
                <div className="w-full bg-gray-300 rounded-full h-4 mb-3">
                  <div
                    className="bg-green-500 h-4 rounded-full transition-all"
                    style={{ width: `${alanaHealth}%` }}
                  />
                </div>
                <p className="text-sm text-gray-700">
                  {alanaHealth === 100
                    ? "Alana está feliz! 😊"
                    : alanaHealth > 50
                    ? "Alana precisa de sua ajuda 😟"
                    : "Alana está muito triste 😢"}
                </p>
              </Card>

              {/* Badges */}
              {badges.length > 0 && (
                <Card className="p-6 border-2 border-yellow-200 bg-yellow-50">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Trophy className="text-yellow-600" />
                    Badges Conquistadas
                  </h4>
                  <div className="space-y-2">
                    {badges.map((badge, idx) => (
                      <Badge
                        key={idx}
                        className="bg-yellow-500 text-white block w-full text-center py-2"
                      >
                        🏆 {badge}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )}

              {/* Progress */}
              <Card className="p-6 border-2 border-blue-200">
                <h4 className="font-bold text-gray-800 mb-4">Progresso</h4>
                <div className="space-y-3">
                  {CARDS.map((card, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full ${
                        cardsCompleted.includes(card.id)
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  {cardsCompleted.length} de {CARDS.length} cartas completadas
                </p>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663263576763/QjUk77nDk7TSFNKKq3DGYq/buze_celebration-Z7PvLH2jbm8fUH7UUA9K2.webp"
              alt="Celebração"
              className="w-48 h-48 mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Parabéns! Você completou o jogo! 🎉
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Você conquistou <strong>{score} pontos</strong> e{" "}
              <strong>{badges.length} badges</strong>!
            </p>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Você ajudou Alana a superar suas dificuldades. Lembre-se: cada um
              de nós tem o poder de mudar a história. Continue sendo um herói da
              empatia!
            </p>
            <Button
              onClick={resetGame}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-xl"
            >
              🎮 Jogar Novamente
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

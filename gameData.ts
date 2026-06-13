export interface Card {
  id: number;
  title: string;
  situation: string;
  challenge: string;
  law?: string;
  theme: "physical" | "social" | "cyber" | "emotional";
}

export const CARDS: Card[] = [
  {
    id: 1,
    title: "Agressão Física",
    situation:
      "Alana com seus colegas de classe constantemente sofre: beliscões, socos, chutes, empurrões e afins... Não deixe sua colega triste.",
    challenge:
      'Poste em seu meio de comunicação digital e leia em voz alta essa informação: "Lesão corporal é crime e dependendo do grau leva de 3 meses a 12 anos de prisão".',
    law: "Art. 129 - Lesão Corporal",
    theme: "physical",
  },
  {
    id: 2,
    title: "Exclusão Social",
    situation:
      "Alana foi para uma festa e lá ela não foi muito bem recebida, ela foi deixada de lado e esqueceram chamá-la para comer e ela acabou ficando sem comida. Não deixe sua colega triste.",
    challenge:
      'Ofereça comida para alguém próximo e mande em seu stories: "não se demore onde não te recebem bem".',
    theme: "social",
  },
  {
    id: 3,
    title: "Apelido Depreciativo",
    situation:
      "Alana recebeu um apelido de seus colegas ao qual ela não gosta e a entristece. Não deixe sua colega triste.",
    challenge:
      "Conforme o Art.139 difamar alguém, imputando-lhe fato ofensivo à sua reputação: Pena-detenção, de três meses a um ano, e multa. Fique 3 jogadas sem rir.",
    law: "Art. 139 - Difamação",
    theme: "emotional",
  },
  {
    id: 4,
    title: "Zoação no Dia dos Namorados",
    situation:
      "Alana no dia dos namorados recebeu uma carta de seus colegas a zoando dizendo que ninguém a quer. Não deixe sua colega triste.",
    challenge:
      "Escolha um dos jogadores e escreva uma carta descrevendo suas 3 melhores qualidades.",
    theme: "emotional",
  },
  {
    id: 5,
    title: "Desenho Depreciativo",
    situation:
      "Alana recebeu da pessoa que gosta um desenho dela depreciativo ao qual a deixo muito triste e de coração partido. Não deixe a Alana triste.",
    challenge:
      "Comece um desenho de um animal e passe para os jogadores o continuarem, ao final tente descrever em mímica o que foi desenhado.",
    theme: "emotional",
  },
  {
    id: 6,
    title: "Roubo de Mochila",
    situation:
      "Alana voltou do banheiro e viu que esconderam sua mochila (bolsa) e ninguém quer dizer onde esconderam e nem quem foi, isso a deixou assustada e preocupada, pois precisa de um remédio que está em seus pertences. Não deixe sua colega triste.",
    challenge:
      'Furto seguido de omissão por grupo de pessoas, pois quem se calou também é participante da ação. Você foi pego e agora tem que ficar 3 rodadas dizendo sem parar: "Está ali".',
    law: "Art. 155 - Furto",
    theme: "physical",
  },
  {
    id: 7,
    title: "Roubo de Condução",
    situation:
      "Alana percebeu que mexeram em seus pertences e roubaram a sua condução para voltar para casa, Alana ficou desesperada e não sabe como vai voltar para casa. Não deixe sua colega triste.",
    challenge:
      'Roubo é crime, de 3 voltas ao redor de um objeto dizendo "me de uma carona".',
    law: "Art. 155 - Roubo",
    theme: "physical",
  },
  {
    id: 8,
    title: "Ameaça por E-mail",
    situation:
      "Alana recebeu por e-mail uma ameaça e ficou aterrorizada. Não deixe sua colega triste.",
    challenge:
      "Contra ameaças é sempre bom recorrer atrás de socorro antes que algo ocorra de fato. Jogue de costas para os demais jogadores por 2 jogadas.",
    law: "Art. 147 - Ameaça",
    theme: "cyber",
  },
  {
    id: 9,
    title: "Meme Ridicularizador",
    situation:
      "Alana foi filmada por seus colegas enquanto comia e fizeram um meme dela e espalharam pelos grupos da escola, Alana ficou muito triste e começou a pensar que era feia. Não deixe sua colega triste.",
    challenge:
      'Abrace o jogador do lado e diga: "está tudo bem em se importar, mas não se importe tanto".',
    theme: "cyber",
  },
  {
    id: 10,
    title: "Boato e Difamação",
    situation:
      "Alana percebeu que ao chegar tinham espalhado um boato a difamando ela se entristeceu e não sabia o que fazer para todos saberem que era mentira. Não deixe sua colega triste.",
    challenge:
      "Difamação é crime. Forme uma frase diga para o jogador do lado em seu ouvido e mande-o fazer o mesmo com o próximo jogador e assim por diante, ao final repita a frase em voz alta.",
    law: "Art. 139 - Difamação",
    theme: "cyber",
  },
  {
    id: 11,
    title: "Exclusão de Amigo Secreto (Familiar)",
    situation:
      "Alana em uma festa familiar seus primos a excluíram do amigo secreto, isso deixou Alana muito triste, pois queria participar. Não deixe sua colega triste.",
    challenge:
      "Sorteie o nome dos participantes do jogo ao tirar um nome, diga que ele tem um desejo para pedir, não pode ser nada impossível ou que afete a ética e moral.",
    theme: "social",
  },
  {
    id: 12,
    title: "Amigo Secreto Recusado",
    situation:
      "Alana finalmente foi chamada para participar do um amigo secreto, mas a pessoa que tirou ela se recusou a continuar participando e não levou seu presente, Alana ficou muito triste, pois gastou uma boa grana no presente para a pessoa que ela tirou que por sinal era a mesma que tirou ela. Não deixe sua colega triste.",
    challenge:
      'Levante e cante uma música em voz alta. Lembre-se: "Quem canta seus males espanta".',
    theme: "emotional",
  },
  {
    id: 13,
    title: "Insegurança sobre Bullying",
    situation:
      "Alana se sente insegura, pois percebeu que o que estão fazendo com ela é feito por maldade e se chama bullying. Não deixe sua colega triste.",
    challenge: "Oriente alguém dos perigos do bullying e suas causas.",
    theme: "emotional",
  },
  {
    id: 14,
    title: "Tropeço e Falta de Ajuda",
    situation:
      "Alana tropeçou enquanto andava e as pessoas em sua volta começaram a rir dela e ninguém a ajudou a se levantar. Não deixe sua colega triste.",
    challenge:
      "Sempre que alguém se machucar o socorra ao contrário de rir da pessoa, deixar de prestar socorro também é crime, faça 10 abdominais.",
    law: "Art. 135 - Omissão de Socorro",
    theme: "physical",
  },
  {
    id: 15,
    title: "Discriminação em Loja",
    situation:
      "Alana foi a uma loja de roupas e a vendedora disse para ela que não vendiam roupas do estilo e tamanho dela, Alana se sentiu um ET e desistiu das compras. Não deixe sua colega triste.",
    challenge:
      "Use a criatividade para fazer combinações de roupas conforme o seu estilo. Pergunta: a cor amarela misturada com a cor azul dá qual cor?",
    theme: "emotional",
  },
  {
    id: 16,
    title: "Críticas em Redes Sociais",
    situation:
      "Alana postou um vídeo em seu facebook mostrando o quanto está se esforçando para aprender a tocar, mas recebeu várias críticas e mensagens de desânimo, Alana pensou em desistir de continuar aprendendo a tocar. Não deixe sua colega triste.",
    challenge:
      "Não use as redes sociais para propagar o mal com mensagens pejorativas, ensine algo novo para os demais jogadores.",
    theme: "cyber",
  },
  {
    id: 17,
    title: "Ridicularização por Introversão",
    situation:
      "Alana por ser introvertida foi ridicularizada por uma colega dizendo que ela não sabe se vestir e é feia, Alana se sentiu muito mal com o comentário de sua colega, pois, tinha consideração pela mesma. Não deixe sua colega triste.",
    challenge:
      "Melhor segurar suas frases maldosas com a desculpa de ser sincero (a), cada um tem um ponto de vista que é somente da própria pessoa. Fique 1 jogada sem jogar.",
    theme: "emotional",
  },
  {
    id: 18,
    title: "Trolagem com Falsa Paquera",
    situation:
      "Alana recebeu uma mensagem onde a pessoa que ela gosta dizia que também gosta dela e que queria a encontrar, chegando lá Alana esperou e não apareceu ninguém, chegando em casa recebeu uma mensagem dizendo que ela foi trolada, Alana comentou da zoeira, mas foi dormir chorando, pois isso mexeu com seus sentimentos. Não deixe sua colega triste.",
    challenge:
      "Brincadeiras de mau gosto são erradas, procure uma foto de algum evento em que você esteve com seus amigos e descreva aquele dia para os demais jogadores.",
    theme: "cyber",
  },
  {
    id: 19,
    title: "Agressão Física por Ciúmes",
    situation:
      "Alana apanhou de uma menina que acreditava que Alana dava em cima de seu namorado, o que era mentira. Não deixe sua colega triste.",
    challenge:
      "Não se cale e não se envergonhe com o errado, para evitar uma briga um segurança jogou água gelada nos participantes da briga e segurou o principal agressor enquanto se assustaram ao receber a água gelada, e ninguém se machucou, pois é uma ótima técnica para separar brigas, vá pegar água para os jogadores.",
    law: "Art. 129 - Lesão Corporal",
    theme: "physical",
  },
  {
    id: 20,
    title: "Exclusão de Informações",
    situation:
      "Alana nunca é informada de nada e sempre é a última que fica sabendo de coisas importantes, isso a deixa triste e perdida, pois percebeu que seus colegas fazem isso de propósito para quando ela descobrir zoarem ela e rir de suas perguntas. Não deixe sua colega triste.",
    challenge:
      "Provocar a vergonha do próximo é plantar sua vergonha para o amanhã. Leia uma notícia de jornal em voz alta.",
    theme: "social",
  },
];

export interface BullyingStatistic {
  title: string;
  percentage: number;
  description: string;
  source: string;
}

export const BULLYING_STATISTICS: BullyingStatistic[] = [
  {
    title: "Adolescentes Brasileiros Afetados",
    percentage: 39.8,
    description:
      "39,8% dos adolescentes de 13 a 17 anos sofreram bullying na escola em 2026",
    source: "IBGE 2026",
  },
  {
    title: "Meninas Afetadas",
    percentage: 43.3,
    description: "43,3% das meninas sofrem bullying na escola",
    source: "IBGE 2026",
  },
  {
    title: "Prevalência Global",
    percentage: 25,
    description: "25% de prevalência global de bullying entre crianças",
    source: "Estudo Global 2025",
  },
  {
    title: "Cyberbullying em Meninas",
    percentage: 9,
    description:
      "Aumento de cyberbullying entre meninas de 7% (2018) para 9% (2022)",
    source: "WHO Europe 2024",
  },
  {
    title: "Cyberbullying em Meninos",
    percentage: 14,
    description:
      "Aumento de cyberbullying entre meninos de 11% (2018) para 14% (2022)",
    source: "WHO Europe 2024",
  },
];

export const TIPS_AND_RESOURCES = [
  {
    title: "Se você sofre bullying",
    tips: [
      "Converse com um adulto de confiança (pais, professor, orientador)",
      "Não responda com agressividade - isso pode piorar a situação",
      "Guarde evidências (prints, mensagens) se for cyberbullying",
      "Denuncie nas plataformas digitais",
      "Procure apoio emocional com psicólogo ou conselheiro",
    ],
  },
  {
    title: "Se você vê alguém sofrendo bullying",
    tips: [
      "Não fique em silêncio - seu apoio importa",
      "Ofereça amizade e apoio à vítima",
      "Denuncie aos adultos responsáveis",
      "Não participe nem compartilhe conteúdo ofensivo",
      "Seja um aliado - use sua voz para defender",
    ],
  },
  {
    title: "Se você pratica bullying",
    tips: [
      "Reconheça que suas ações causam dor real",
      "Peça desculpas sinceras à vítima",
      "Procure entender por que você faz isso",
      "Busque ajuda profissional",
      "Trabalhe para mudar seu comportamento",
    ],
  },
];

export const EMERGENCY_CONTACTS = [
  {
    name: "Disque Denúncia",
    number: "100",
    description: "Denúncias de violência contra crianças e adolescentes",
  },
  {
    name: "Disque Saúde",
    number: "136",
    description: "Orientações sobre saúde mental e emocional",
  },
  {
    name: "CVV - Centro de Valorização da Vida",
    number: "188",
    description: "Apoio emocional e prevenção do suicídio (24h)",
  },
];

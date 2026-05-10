import type { Hook, Question, FunnelType } from '@/types'

export const HOOKS: Hook[] = [
  {
    id: 'hook_abandon',
    text: 'Tu fais peut-être partie des gens qui se préparent mentalement à être abandonnés.',
    subtext: 'Même quand tout va bien.',
    funnel: 'abandon',
    intensity: 9,
  },
  {
    id: 'hook_cold',
    text: 'Les gens qui deviennent froids d\'un coup sont rarement vraiment détachés.',
    subtext: 'ARI sait ce qui se passe vraiment derrière.',
    funnel: 'evitement_emotionnel',
    intensity: 8,
  },
  {
    id: 'hook_attach_distance',
    text: 'Si tu t\'attaches très vite mais que tu prends ensuite tes distances, ARI sait pourquoi.',
    subtext: 'C\'est un mécanisme précis — pas une coïncidence.',
    funnel: 'attachement_anxieux',
    intensity: 9,
  },
  {
    id: 'hook_solitude',
    text: 'Ton besoin de solitude cache peut-être autre chose que de la fatigue.',
    subtext: 'Quelque chose que tu ne t\'avoues pas encore.',
    funnel: 'masque_social',
    intensity: 8,
  },
  {
    id: 'hook_message',
    text: 'Les personnes qui réfléchissent trop avant d\'envoyer un message ont souvent vécu quelque chose de précis.',
    subtext: 'Et elles le reproduisent sans s\'en rendre compte.',
    funnel: 'hypervigilance',
    intensity: 9,
  },
  {
    id: 'hook_independent',
    text: 'Tu sembles indépendant. Mais ton système émotionnel raconte peut-être autre chose.',
    subtext: 'ARI détecte la contradiction.',
    funnel: 'dependance_affective',
    intensity: 8,
  },
  {
    id: 'hook_senfou',
    text: 'Les gens qui disent souvent "je m\'en fous" ressentent parfois exactement l\'inverse.',
    subtext: 'C\'est une protection, pas une vérité.',
    funnel: 'masque_social',
    intensity: 7,
  },
  {
    id: 'hook_overthink',
    text: 'Si tu rejoues des conversations dans ta tête des heures après, ton cerveau cherche quelque chose de très précis.',
    subtext: 'ARI peut identifier quoi.',
    funnel: 'suranalyse_mentale',
    intensity: 9,
  },
  {
    id: 'hook_tired',
    text: 'Certaines personnes sont épuisées non pas par leur vie, mais par leurs propres émotions.',
    subtext: 'ARI peut identifier l\'origine exacte.',
    funnel: 'fatigue_mentale',
    intensity: 8,
  },
  {
    id: 'hook_trauma',
    text: 'Quand une relation finit, est-ce que tu perds quelque chose de plus que la personne ?',
    subtext: 'La réponse révèle un schéma profond.',
    funnel: 'trauma_amoureux',
    intensity: 9,
  },
]

export const FUNNEL_LABELS: Record<FunnelType, string> = {
  abandon: 'Schéma d\'abandon',
  hypervigilance: 'Hypervigilance émotionnelle',
  trauma_amoureux: 'Trauma relationnel',
  dependance_affective: 'Dépendance affective',
  fatigue_mentale: 'Surcharge émotionnelle',
  masque_social: 'Masque social',
  attachement_anxieux: 'Attachement anxieux',
  evitement_emotionnel: 'Évitement émotionnel',
  suranalyse_mentale: 'Hyperanalyse cognitive',
}

// Archetypes humains, directs, reconnaissables
export const FUNNEL_ARCHETYPES: Record<FunnelType, string[]> = {
  abandon: [
    'Celui qui part avant d\'être quitté',
    'Celui qui attend toujours la fin',
    'Celui qui aime mais garde une sortie',
  ],
  hypervigilance: [
    'Celui qui capte tout',
    'Celui qui voit les signaux avant tout le monde',
    'Celui qui analyse avant de ressentir',
  ],
  trauma_amoureux: [
    'Celui qui a appris à ne pas trop y croire',
    'Celui qui aime mais ne fait pas confiance',
    'Celui qui sabote ce qui va bien',
  ],
  dependance_affective: [
    'Celui qui a besoin de l\'autre pour aller bien',
    'Celui qui donne tout et en souffre',
    'Celui qui s\'oublie dans l\'autre',
  ],
  fatigue_mentale: [
    'Celui qui porte les autres sans se plaindre',
    'Celui qui est toujours là, mais jamais pour lui',
    'Celui qui s\'efface pour ne pas peser',
  ],
  masque_social: [
    'Celui qui joue un rôle en permanence',
    'Celui qui paraît bien mais vit autre chose',
    'Celui qui rit et rentre chez lui épuisé',
  ],
  attachement_anxieux: [
    'Celui qui veut rester mais a peur de rester',
    'Celui qui repousse ce dont il a besoin',
    'Celui qui brûle fort et s\'éteint',
  ],
  evitement_emotionnel: [
    'Celui qui ne montre rien',
    'Celui qui disparaît quand ça devient sérieux',
    'Celui qui préfère la distance à la douleur',
  ],
  suranalyse_mentale: [
    'Celui qui pense trop pour ressentir',
    'Celui qui rejoue tout dans sa tête',
    'Celui qui analyse à la place de vivre',
  ],
}

type QuestionBank = Record<FunnelType, Question[]>

export const QUESTIONS: QuestionBank = {
  abandon: [
    {
      id: 'ab_1',
      type: 'choice',
      text: 'Quand quelqu\'un devient soudainement plus distant, ton cerveau :',
      options: [
        { id: 'a', text: 'tourne en boucle à chercher ce que tu as dit ou fait de travers', weight: { suranalyse_mentale: 3, abandon: 2 } },
        { id: 'b', text: 'commence à se préparer à la fin — avant même de savoir ce qui se passe', weight: { abandon: 5, hypervigilance: 2 } },
        { id: 'c', text: 'relit les derniers messages pour trouver l\'instant exact où quelque chose a changé', weight: { suranalyse_mentale: 3, hypervigilance: 2 } },
        { id: 'd', text: 'prend de la distance aussi — pour prendre les devants', weight: { evitement_emotionnel: 3, abandon: 2 } },
      ],
    },
    {
      id: 'ab_2',
      type: 'binary',
      text: 'Il t\'est déjà arrivé de saboter quelque chose qui allait bien — sans vraiment comprendre pourquoi, sur le moment.',
      options: [
        { id: 'oui', text: 'Oui — et je l\'ai compris trop tard', weight: { abandon: 5, trauma_amoureux: 2 } },
        { id: 'non', text: 'Non, pas que je me souvienne', weight: { dependance_affective: 1 } },
      ],
    },
    {
      id: 'ab_3',
      type: 'choice',
      text: 'Dans une relation qui compte, quelque chose en toi :',
      options: [
        { id: 'a', text: 'garde toujours une sortie — au cas où', weight: { abandon: 5, evitement_emotionnel: 2 } },
        { id: 'b', text: 'teste si l\'autre va rester même quand tu es difficile à aimer', weight: { abandon: 4, hypervigilance: 2 } },
        { id: 'c', text: 's\'investit à fond dès le début — et le regrette après', weight: { dependance_affective: 4, abandon: 2 } },
        { id: 'd', text: 'maintient une distance pour ne jamais être trop exposé', weight: { evitement_emotionnel: 4, abandon: 1 } },
      ],
    },
    {
      id: 'ab_4',
      type: 'image_choice',
      text: 'Laquelle de ces images te fait quelque chose dans le ventre ?',
      imageOptions: [
        { id: 'a', emoji: '💬', text: 'Un message "lu" depuis 3 heures, sans réponse', weight: { hypervigilance: 4, abandon: 3 } },
        { id: 'b', emoji: '🚪', text: 'Une porte qui se ferme doucement — sans un mot', weight: { abandon: 5, trauma_amoureux: 2 } },
        { id: 'c', emoji: '🌃', text: 'Un appartement vide un soir où tu n\'avais pas prévu d\'être seul', weight: { abandon: 4, fatigue_mentale: 2 } },
        { id: 'd', emoji: '📵', text: 'Un téléphone silencieux que tu regardes toutes les 10 minutes', weight: { abandon: 3, hypervigilance: 3 } },
      ],
    },
    {
      id: 'ab_5',
      type: 'choice',
      text: 'La phrase qui t\'atteint le plus profondément :',
      options: [
        { id: 'a', text: '"J\'ai besoin d\'espace"', weight: { abandon: 5, hypervigilance: 2 } },
        { id: 'b', text: '"Je ne te mérite pas"', weight: { abandon: 4, trauma_amoureux: 3 } },
        { id: 'c', text: '"On se reparle bientôt" — sans date', weight: { abandon: 4, hypervigilance: 2 } },
        { id: 'd', text: '"Comme tu veux" — dit avec une certaine froideur', weight: { abandon: 3, suranalyse_mentale: 3 } },
      ],
    },
    {
      id: 'ab_6',
      type: 'slider',
      text: 'Même quand tout va bien, tu anticipes la fin. C\'est présent à quel point ?',
      sliderMin: 'Presque jamais',
      sliderMax: 'En permanence',
    },
    {
      id: 'ab_7',
      type: 'binary',
      text: 'Tu t\'es déjà dit "ça va finir de toute façon" — alors que rien ne laissait penser que c\'était vrai.',
      options: [
        { id: 'oui', text: 'Oui — c\'est presque automatique', weight: { abandon: 5, hypervigilance: 2 } },
        { id: 'non', text: 'Non, je n\'anticipe pas comme ça', weight: { dependance_affective: 1 } },
      ],
    },
  ],

  hypervigilance: [
    {
      id: 'hv_1',
      type: 'choice',
      text: 'Quand quelqu\'un répond plus froidement que d\'habitude, ton cerveau :',
      options: [
        { id: 'a', text: 'cherche immédiatement ce que tu as fait de mal', weight: { hypervigilance: 5, abandon: 2 } },
        { id: 'b', text: 'surveille les messages suivants pour confirmer ou infirmer', weight: { hypervigilance: 5, suranalyse_mentale: 2 } },
        { id: 'c', text: 'se ferme aussi — par réflexe de protection', weight: { evitement_emotionnel: 3, hypervigilance: 2 } },
        { id: 'd', text: 'construit plusieurs scénarios en parallèle pour anticiper', weight: { hypervigilance: 4, suranalyse_mentale: 3 } },
      ],
    },
    {
      id: 'hv_2',
      type: 'binary',
      text: 'Tu as su qu\'une relation se dégradait bien avant que l\'autre ne s\'en rende compte.',
      options: [
        { id: 'oui', text: 'Oui — je capte toujours les signaux en premier', weight: { hypervigilance: 5, trauma_amoureux: 2 } },
        { id: 'non', text: 'Non, ça m\'a souvent pris par surprise', weight: { abandon: 2 } },
      ],
    },
    {
      id: 'hv_3',
      type: 'choice',
      text: 'Avant d\'envoyer un message qui compte, quelque chose en toi :',
      options: [
        { id: 'a', text: 'le relit et le réécrit plusieurs fois jusqu\'à ce que chaque mot soit juste', weight: { hypervigilance: 5, suranalyse_mentale: 3 } },
        { id: 'b', text: 'l\'écrit, hésite — et le supprime sans l\'envoyer', weight: { hypervigilance: 4, evitement_emotionnel: 2 } },
        { id: 'c', text: 'attend le "bon moment" pour ne pas avoir l\'air trop présent', weight: { hypervigilance: 3, attachement_anxieux: 2 } },
        { id: 'd', text: 'calcule combien de temps attendre avant de répondre', weight: { hypervigilance: 4, masque_social: 2 } },
      ],
    },
    {
      id: 'hv_4',
      type: 'image_choice',
      text: 'Ce qui t\'épuise le plus en silence :',
      imageOptions: [
        { id: 'a', emoji: '👁️', text: 'Être dans une pièce sans savoir ce que les gens pensent de toi', weight: { hypervigilance: 5, masque_social: 2 } },
        { id: 'b', emoji: '🔄', text: 'Rejouer une conversation des heures après pour trouver ce qui a cloché', weight: { suranalyse_mentale: 4, hypervigilance: 3 } },
        { id: 'c', emoji: '📱', text: 'Voir que quelqu\'un est actif en ligne mais ne répond pas à ton message', weight: { hypervigilance: 5, abandon: 2 } },
        { id: 'd', emoji: '😐', text: 'Recevoir une réponse courte là où tu attendais quelque chose de plus', weight: { hypervigilance: 4, abandon: 2 } },
      ],
    },
    {
      id: 'hv_5',
      type: 'choice',
      text: 'Ton cerveau fait ça sans que tu le lui demandes :',
      options: [
        { id: 'a', text: 'il analyse le ton de chaque message pour détecter un changement d\'ambiance', weight: { hypervigilance: 5 } },
        { id: 'b', text: 'il cherche ce que l\'autre a "vraiment" voulu dire derrière ce qu\'il a dit', weight: { suranalyse_mentale: 4, hypervigilance: 3 } },
        { id: 'c', text: 'il se rappelle les fois où tu as eu tort de faire confiance', weight: { trauma_amoureux: 4, hypervigilance: 2 } },
        { id: 'd', text: 'il construit des scénarios de comment ça pourrait tourner mal', weight: { hypervigilance: 4, abandon: 2 } },
      ],
    },
    {
      id: 'hv_6',
      type: 'slider',
      text: 'Tu captes les micro-changements dans l\'attitude des gens autour de toi. À quel point c\'est précis ?',
      sliderMin: 'Je remarque peu',
      sliderMax: 'Je vois tout',
    },
    {
      id: 'hv_7',
      type: 'binary',
      text: 'Tu testes parfois des personnes — sans qu\'elles sachent qu\'elles sont en train d\'être testées.',
      options: [
        { id: 'oui', text: 'Oui — et je retiens les résultats', weight: { hypervigilance: 5, abandon: 2 } },
        { id: 'non', text: 'Non, je fais confiance sans tester', weight: { dependance_affective: 2 } },
      ],
    },
  ],

  trauma_amoureux: [
    {
      id: 'ta_1',
      type: 'choice',
      text: 'Quand quelqu\'un te plaît vraiment — pas juste un peu, vraiment — quelque chose en toi :',
      options: [
        { id: 'a', text: 'cherche la faille, souvent sans t\'en rendre compte', weight: { trauma_amoureux: 4, hypervigilance: 2 } },
        { id: 'b', text: 'prend de la distance — comme si s\'exposer était dangereux', weight: { evitement_emotionnel: 4, trauma_amoureux: 2 } },
        { id: 'c', text: 'fait semblant que ça ne compte pas autant que ça compte', weight: { trauma_amoureux: 4, masque_social: 2 } },
        { id: 'd', text: 's\'emballe très vite — et le regrette après', weight: { dependance_affective: 3, attachement_anxieux: 2 } },
      ],
    },
    {
      id: 'ta_2',
      type: 'binary',
      text: 'Tu as déjà saboté une relation qui se passait bien — pas par accident, mais comme si une partie de toi décidait que ça devait s\'arrêter.',
      options: [
        { id: 'oui', text: 'Oui — et je l\'ai réalisé trop tard', weight: { trauma_amoureux: 5, evitement_emotionnel: 2 } },
        { id: 'non', text: 'Non, pas que je me souvienne', weight: { abandon: 1 } },
      ],
    },
    {
      id: 'ta_3',
      type: 'choice',
      text: 'Ce qui revient dans tes relations, que tu le veuilles ou non :',
      options: [
        { id: 'a', text: 'tu choisis des gens qui ne sont pas vraiment disponibles — émotionnellement ou autrement', weight: { trauma_amoureux: 5 } },
        { id: 'b', text: 'tu donnes bien plus que tu ne reçois, et tu l\'acceptes beaucoup trop longtemps', weight: { dependance_affective: 3, trauma_amoureux: 3 } },
        { id: 'c', text: 'tu pars avant que l\'autre parte — même quand il n\'y a aucun signe qu\'il allait partir', weight: { evitement_emotionnel: 4, abandon: 2 } },
        { id: 'd', text: 'tu te perds dans la relation — tes goûts, tes priorités, qui tu es', weight: { dependance_affective: 4 } },
      ],
    },
    {
      id: 'ta_4',
      type: 'slider',
      text: 'Croire que quelqu\'un peut t\'aimer tel que tu es vraiment — sans que tu aies à te corriger — c\'est difficile à quel point ?',
      sliderMin: 'J\'y crois facilement',
      sliderMax: 'Presque impossible',
    },
    {
      id: 'ta_5',
      type: 'image_choice',
      text: 'Ton rapport à l\'amour ressemble à :',
      imageOptions: [
        { id: 'a', emoji: '🔥', text: 'Une flamme intense — brûle fort, brûle les deux', weight: { trauma_amoureux: 4, attachement_anxieux: 2 } },
        { id: 'b', emoji: '🧊', text: 'De la glace — protège, mais isole aussi', weight: { evitement_emotionnel: 4 } },
        { id: 'c', emoji: '🌊', text: 'Une vague — puissante, imprévisible, ingérable', weight: { dependance_affective: 3, attachement_anxieux: 3 } },
        { id: 'd', emoji: '🏔️', text: 'Une montagne — solide en apparence, mais personne n\'arrive vraiment au sommet', weight: { evitement_emotionnel: 3, masque_social: 2 } },
      ],
    },
    {
      id: 'ta_6',
      type: 'choice',
      text: 'Ce que tu penses souvent — mais que tu ne dis à personne :',
      options: [
        { id: 'a', text: '"Je veux être aimé mais l\'amour me fait peur dès qu\'il devient réel"', weight: { trauma_amoureux: 5, attachement_anxieux: 3 } },
        { id: 'b', text: '"Je mérite mieux que ce que j\'accepte — mais je continue à l\'accepter"', weight: { trauma_amoureux: 4, dependance_affective: 2 } },
        { id: 'c', text: '"J\'ai besoin qu\'on me prouve que je compte — encore et encore"', weight: { abandon: 4, dependance_affective: 3 } },
        { id: 'd', text: '"Je donne tout — mais je garde toujours une sortie secrète"', weight: { abandon: 3, trauma_amoureux: 3 } },
      ],
    },
    {
      id: 'ta_7',
      type: 'binary',
      text: 'Tu as l\'impression de recréer les mêmes dynamiques relationnelles, malgré toi — comme si tu t\'attirais les mêmes types de situations.',
      options: [
        { id: 'oui', text: 'Oui — et je ne comprends pas tout à fait pourquoi', weight: { trauma_amoureux: 5, hypervigilance: 2 } },
        { id: 'non', text: 'Non, mes relations sont vraiment très différentes', weight: { masque_social: 1 } },
      ],
    },
  ],

  dependance_affective: [
    {
      id: 'da_1',
      type: 'choice',
      text: 'Quand quelqu\'un que tu aimes est distant — même sans raison claire — ton cerveau :',
      options: [
        { id: 'a', text: 'perd le fil de tout le reste jusqu\'à ce que ça aille mieux', weight: { dependance_affective: 5, fatigue_mentale: 2 } },
        { id: 'b', text: 'relit vos échanges récents pour trouver ce qui a changé', weight: { suranalyse_mentale: 4, hypervigilance: 2 } },
        { id: 'c', text: 'fait comme si ça n\'existait pas — mais ça reste là', weight: { evitement_emotionnel: 4, masque_social: 2 } },
        { id: 'd', text: 'cherche un prétexte pour envoyer un message — juste pour tester la température', weight: { dependance_affective: 4, abandon: 2 } },
      ],
    },
    {
      id: 'da_2',
      type: 'binary',
      text: 'Tu t\'es déjà perdu dans une relation — tes goûts, tes priorités, qui tu étais avant — sans t\'en rendre compte sur le moment.',
      options: [
        { id: 'oui', text: 'Oui — je l\'ai réalisé après coup, avec une certaine horreur', weight: { dependance_affective: 5, trauma_amoureux: 2 } },
        { id: 'non', text: 'Non, j\'ai gardé le fil de qui j\'étais', weight: { evitement_emotionnel: 2 } },
      ],
    },
    {
      id: 'da_3',
      type: 'slider',
      text: 'Ton humeur dépend de l\'humeur des personnes qui comptent pour toi. À quel point ?',
      sliderMin: 'Très peu',
      sliderMax: 'Complètement',
    },
    {
      id: 'da_4',
      type: 'choice',
      text: 'Quand tu aimes quelqu\'un, quelque chose en toi :',
      options: [
        { id: 'a', text: 'donne même quand il n\'y a plus rien à donner', weight: { dependance_affective: 5 } },
        { id: 'b', text: 'adapte qui tu es pour lui plaire — parfois sans t\'en rendre compte', weight: { dependance_affective: 4, masque_social: 2 } },
        { id: 'c', text: 'a du mal à exister en dehors de cette relation', weight: { dependance_affective: 5 } },
        { id: 'd', text: 'maintient toujours une petite distance — par précaution', weight: { evitement_emotionnel: 3 } },
      ],
    },
    {
      id: 'da_5',
      type: 'image_choice',
      text: 'Dans une relation, tu ressembles plutôt à :',
      imageOptions: [
        { id: 'a', emoji: '🧲', text: 'Un aimant — tu attires fort et tu es attiré fort', weight: { dependance_affective: 4 } },
        { id: 'b', emoji: '🌿', text: 'Du lierre — tu as besoin d\'un support pour tenir', weight: { dependance_affective: 5 } },
        { id: 'c', emoji: '🌊', text: 'Un océan — tu donnes sans compter, jusqu\'à épuisement', weight: { dependance_affective: 3, fatigue_mentale: 2 } },
        { id: 'd', emoji: '🕳️', text: 'Un puits — tu absorbes tout mais rien ne te remplit vraiment', weight: { dependance_affective: 4, trauma_amoureux: 2 } },
      ],
    },
    {
      id: 'da_6',
      type: 'choice',
      text: 'Ce que tu n\'arrives pas à dire à voix haute, même à toi-même :',
      options: [
        { id: 'a', text: '"J\'ai besoin de toi bien plus que je ne le montre"', weight: { dependance_affective: 5 } },
        { id: 'b', text: '"Quand tu n\'es pas là, je ne sais plus vraiment qui je suis"', weight: { dependance_affective: 5, abandon: 2 } },
        { id: 'c', text: '"Tu me manques même quand tu es là — et ça me fait peur"', weight: { dependance_affective: 4, trauma_amoureux: 2 } },
        { id: 'd', text: '"Je fais semblant que ça va — mais j\'attends juste que tu reviennes"', weight: { masque_social: 4, dependance_affective: 2 } },
      ],
    },
  ],

  fatigue_mentale: [
    {
      id: 'fm_1',
      type: 'choice',
      text: 'Quand quelqu\'un te demande "et toi, ça va vraiment ?" — quelque chose en toi :',
      options: [
        { id: 'a', text: 'répond "oui" en automatique — même quand c\'est faux', weight: { masque_social: 4, fatigue_mentale: 3 } },
        { id: 'b', text: 'minimise pour ne pas devenir un poids pour l\'autre', weight: { fatigue_mentale: 5 } },
        { id: 'c', text: 'retourne la question vers eux — pour ne pas avoir à répondre', weight: { evitement_emotionnel: 3, fatigue_mentale: 3 } },
        { id: 'd', text: 'répond honnêtement, mais ça te coûte quelque chose', weight: { fatigue_mentale: 2 } },
      ],
    },
    {
      id: 'fm_2',
      type: 'binary',
      text: 'Les gens autour de toi ne réalisent pas à quel point tu portes de choses — en silence.',
      options: [
        { id: 'oui', text: 'Oui — et c\'est épuisant de continuer à faire comme si non', weight: { fatigue_mentale: 5, masque_social: 3 } },
        { id: 'non', text: 'Non, je pense qu\'ils le voient', weight: { masque_social: 1 } },
      ],
    },
    {
      id: 'fm_3',
      type: 'slider',
      text: 'Tu absorbes les émotions des gens autour de toi comme si c\'étaient les tiennes. À quel point ?',
      sliderMin: 'Presque pas',
      sliderMax: 'Complètement',
    },
    {
      id: 'fm_4',
      type: 'choice',
      text: 'Le soir, ce qui t\'empêche de vraiment te poser :',
      options: [
        { id: 'a', text: 'le sentiment de ne jamais avoir assez fait — pour les autres', weight: { fatigue_mentale: 5 } },
        { id: 'b', text: 'des échanges de la journée que tu aurais dû gérer autrement', weight: { suranalyse_mentale: 4, fatigue_mentale: 3 } },
        { id: 'c', text: 'l\'impression que si tu t\'arrêtes, quelque chose s\'effondre', weight: { fatigue_mentale: 5 } },
        { id: 'd', text: 'rien de précis — juste une agitation que tu ne peux pas nommer', weight: { fatigue_mentale: 3, hypervigilance: 2 } },
      ],
    },
    {
      id: 'fm_5',
      type: 'image_choice',
      text: 'Laquelle de ces images décrit honnêtement ton état ?',
      imageOptions: [
        { id: 'a', emoji: '🔋', text: 'Une batterie coincée entre 5 et 15% — jamais vraiment rechargée', weight: { fatigue_mentale: 5 } },
        { id: 'b', emoji: '🌊', text: 'La tête sous l\'eau — mais tu continues à nager', weight: { fatigue_mentale: 4, masque_social: 2 } },
        { id: 'c', emoji: '🕯️', text: 'Une bougie qui éclaire les autres jusqu\'à s\'éteindre toute seule', weight: { fatigue_mentale: 5 } },
        { id: 'd', emoji: '🪞', text: 'Un miroir qui absorbe tout — et ne renvoie plus grand chose', weight: { fatigue_mentale: 3, dependance_affective: 3 } },
      ],
    },
    {
      id: 'fm_6',
      type: 'binary',
      text: 'Tu rends service et tu es là pour les autres — même les soirs où tu n\'as plus rien à donner.',
      options: [
        { id: 'oui', text: 'Oui — et après je m\'en veux d\'être épuisé', weight: { fatigue_mentale: 5 } },
        { id: 'non', text: 'Non, je sais m\'arrêter quand je suis à vide', weight: { evitement_emotionnel: 2 } },
      ],
    },
  ],

  masque_social: [
    {
      id: 'ms_1',
      type: 'choice',
      text: 'En groupe, tu joues souvent un rôle — celui que les autres attendent de toi :',
      options: [
        { id: 'a', text: 'le solide — celui qui gère, qui rassure, qui ne s\'effondre jamais', weight: { masque_social: 5 } },
        { id: 'b', text: 'le fun — présent, vivant, mais jamais vraiment là', weight: { masque_social: 4, evitement_emotionnel: 2 } },
        { id: 'c', text: 'l\'invisible — tu es là, mais jamais trop', weight: { masque_social: 3, evitement_emotionnel: 3 } },
        { id: 'd', text: 'tu changes de version selon qui est en face', weight: { masque_social: 4, hypervigilance: 2 } },
      ],
    },
    {
      id: 'ms_2',
      type: 'binary',
      text: 'Tu as déjà pleuré seul pour quelque chose que tu minimisais — ou niait — devant tout le monde.',
      options: [
        { id: 'oui', text: 'Oui — et les deux choses coexistaient en même temps', weight: { masque_social: 5, fatigue_mentale: 2 } },
        { id: 'non', text: 'Non, ce que je montre reflète ce que je vis', weight: { evitement_emotionnel: 2 } },
      ],
    },
    {
      id: 'ms_3',
      type: 'choice',
      text: 'Ce que les gens croient de toi — et ce que tu vis réellement :',
      options: [
        { id: 'a', text: '"Fort(e)" — mais souvent épuisé(e) d\'avoir à l\'être', weight: { masque_social: 5 } },
        { id: 'b', text: '"Sociable" — mais soulagé(e) de rentrer seul(e) et de tout enlever', weight: { masque_social: 4, fatigue_mentale: 2 } },
        { id: 'c', text: '"Indépendant(e)" — mais avec un besoin des autres que tu ne montres jamais', weight: { dependance_affective: 4, masque_social: 3 } },
        { id: 'd', text: '"Calme" — mais avec un bruit intérieur que personne n\'entend', weight: { masque_social: 3, suranalyse_mentale: 2 } },
      ],
    },
    {
      id: 'ms_4',
      type: 'slider',
      text: 'Combien de personnes te voient vraiment — sans la version que tu présentes ?',
      sliderMin: 'Personne',
      sliderMax: 'Plusieurs',
    },
    {
      id: 'ms_5',
      type: 'choice',
      text: 'La phrase que tu prononces souvent — sans la penser une seule seconde :',
      options: [
        { id: 'a', text: '"Ça va, je gère"', weight: { masque_social: 5, fatigue_mentale: 2 } },
        { id: 'b', text: '"Je m\'en fous"', weight: { masque_social: 4, evitement_emotionnel: 2 } },
        { id: 'c', text: '"J\'ai pas besoin d\'aide"', weight: { masque_social: 4 } },
        { id: 'd', text: '"Je suis bien tout seul"', weight: { evitement_emotionnel: 3, masque_social: 3 } },
      ],
    },
    {
      id: 'ms_6',
      type: 'binary',
      text: 'Tu peux être la personne la plus présente, la plus vivante d\'une soirée — et rentrer chez toi complètement vide, comme si tu avais joué un rôle pendant 4 heures.',
      options: [
        { id: 'oui', text: 'Oui — c\'est exactement comme ça', weight: { masque_social: 5, fatigue_mentale: 2 } },
        { id: 'non', text: 'Non, les gens me donnent de l\'énergie pour de vrai', weight: { dependance_affective: 2 } },
      ],
    },
  ],

  attachement_anxieux: [
    {
      id: 'aa_1',
      type: 'choice',
      text: 'Dans une relation, ton cycle ressemble à :',
      options: [
        { id: 'a', text: 'proche → trop proche → peur → distance → regret → proche', weight: { attachement_anxieux: 5 } },
        { id: 'b', text: 'tout donner → se sentir étouffé → disparaître — puis recommencer', weight: { attachement_anxieux: 4, evitement_emotionnel: 2 } },
        { id: 'c', text: 'tout ou rien — avec peu de terrain entre les deux', weight: { dependance_affective: 3, attachement_anxieux: 3 } },
        { id: 'd', text: 's\'investir à fond → être déçu → aller chercher ailleurs', weight: { trauma_amoureux: 4 } },
      ],
    },
    {
      id: 'aa_2',
      type: 'binary',
      text: 'Tu as déjà voulu quelqu\'un encore plus intensément — au moment exact où il prenait ses distances.',
      options: [
        { id: 'oui', text: 'Oui — la distance déclenche quelque chose en moi', weight: { attachement_anxieux: 5, abandon: 2 } },
        { id: 'non', text: 'Non, la distance me soulage généralement', weight: { evitement_emotionnel: 4 } },
      ],
    },
    {
      id: 'aa_3',
      type: 'slider',
      text: 'Tu alternes entre "j\'ai besoin de toi" et "j\'ai besoin qu\'on me laisse de l\'espace". À quelle fréquence ?',
      sliderMin: 'Je suis stable',
      sliderMax: 'C\'est mon quotidien',
    },
    {
      id: 'aa_4',
      type: 'choice',
      text: 'Quand quelqu\'un se rapproche vraiment — pas juste en surface — quelque chose en toi :',
      options: [
        { id: 'a', text: 'crée de la distance sans vraiment décider de le faire', weight: { attachement_anxieux: 5, evitement_emotionnel: 2 } },
        { id: 'b', text: 'teste si c\'est réel ou temporaire — avant de s\'y fier', weight: { abandon: 4, hypervigilance: 2 } },
        { id: 'c', text: 's\'investit encore plus fort, peut-être trop', weight: { dependance_affective: 4 } },
        { id: 'd', text: 'se sent bien — mais avec une inquiétude diffuse qui ne part pas', weight: { attachement_anxieux: 3, hypervigilance: 2 } },
      ],
    },
    {
      id: 'aa_5',
      type: 'choice',
      text: 'La vérité sur ce que tu vis avec l\'intimité :',
      options: [
        { id: 'a', text: 'tu la veux — mais elle te fait peur exactement au moment où elle devient réelle', weight: { attachement_anxieux: 5, trauma_amoureux: 2 } },
        { id: 'b', text: 'tu la cherches — mais tu ne sais pas comment la tenir sans la briser', weight: { attachement_anxieux: 4, dependance_affective: 2 } },
        { id: 'c', text: 'elle te dévore — tu te perds dedans sans t\'en rendre compte', weight: { dependance_affective: 4 } },
        { id: 'd', text: 'tu la fuis — et tu souffres de l\'avoir fui', weight: { evitement_emotionnel: 4, attachement_anxieux: 2 } },
      ],
    },
    {
      id: 'aa_6',
      type: 'binary',
      text: 'Tu sabotes parfois des choses qui se passent bien — pas consciemment, mais comme si quelque chose en toi décidait avant toi que ça devait finir.',
      options: [
        { id: 'oui', text: 'Oui — et je ne comprends pas toujours ce qui se passe', weight: { attachement_anxieux: 5, trauma_amoureux: 2 } },
        { id: 'non', text: 'Non, je protège ce qui fonctionne', weight: { dependance_affective: 1 } },
      ],
    },
  ],

  evitement_emotionnel: [
    {
      id: 'ee_1',
      type: 'choice',
      text: 'Face à une conversation émotionnelle que tu n\'as pas choisie, quelque chose en toi :',
      options: [
        { id: 'a', text: 'change de sujet — naturellement, sans décider de le faire', weight: { evitement_emotionnel: 5 } },
        { id: 'b', text: 'analyse la situation au lieu de la ressentir — c\'est plus gérable', weight: { evitement_emotionnel: 4, suranalyse_mentale: 2 } },
        { id: 'c', text: 'disparaît — physiquement ou dans ta tête', weight: { evitement_emotionnel: 5, masque_social: 2 } },
        { id: 'd', text: 'affronte — mais ça te coûte quelque chose que tu ne montres pas', weight: { fatigue_mentale: 3 } },
      ],
    },
    {
      id: 'ee_2',
      type: 'binary',
      text: 'Tu te sens parfois plus à l\'aise avec des inconnus qu\'avec tes proches — parce qu\'il n\'y a pas de vrai enjeu émotionnel.',
      options: [
        { id: 'oui', text: 'Oui — aucun risque, aucune attente', weight: { evitement_emotionnel: 5, masque_social: 2 } },
        { id: 'non', text: 'Non, je préfère ceux qui me connaissent', weight: { dependance_affective: 2 } },
      ],
    },
    {
      id: 'ee_3',
      type: 'slider',
      text: 'Dire ce que tu ressens vraiment à quelqu\'un qui compte — combien c\'est difficile ?',
      sliderMin: 'Pas difficile',
      sliderMax: 'Presque impossible',
    },
    {
      id: 'ee_4',
      type: 'choice',
      text: 'Ce que les autres appellent "distance", toi tu le vis comme :',
      options: [
        { id: 'a', text: 'une protection nécessaire — pas négociable', weight: { evitement_emotionnel: 5 } },
        { id: 'b', text: 'de l\'indépendance, à laquelle tu tiens vraiment', weight: { evitement_emotionnel: 4 } },
        { id: 'c', text: 'une façon de contrôler ce qui peut te blesser', weight: { evitement_emotionnel: 3, hypervigilance: 2 } },
        { id: 'd', text: 'quelque chose que tu ne réalises pas faire — jusqu\'à ce qu\'on te le dise', weight: { evitement_emotionnel: 4, masque_social: 2 } },
      ],
    },
    {
      id: 'ee_5',
      type: 'image_choice',
      text: 'Ta relation à tes propres émotions ressemble à :',
      imageOptions: [
        { id: 'a', emoji: '🧊', text: 'Un iceberg — peu visible en surface, immense en dessous', weight: { evitement_emotionnel: 5 } },
        { id: 'b', emoji: '🏰', text: 'Une forteresse — tu es protégé, mais de plus en plus seul à l\'intérieur', weight: { evitement_emotionnel: 4, masque_social: 2 } },
        { id: 'c', emoji: '🌑', text: 'Une éclipse — tu disparais exactement au moment où on a besoin de toi', weight: { evitement_emotionnel: 4 } },
        { id: 'd', emoji: '🔒', text: 'Un coffre-fort — il y a quelque chose dedans, mais personne n\'a le code', weight: { evitement_emotionnel: 3, masque_social: 3 } },
      ],
    },
    {
      id: 'ee_6',
      type: 'binary',
      text: 'Quand une relation devient vraiment sérieuse, quelque chose en toi trouve — sans l\'avoir planifié — une raison de créer de la distance.',
      options: [
        { id: 'oui', text: 'Oui — c\'est comme un réflexe automatique', weight: { evitement_emotionnel: 5, attachement_anxieux: 2 } },
        { id: 'non', text: 'Non, je reste quand quelque chose est important', weight: { dependance_affective: 2 } },
      ],
    },
  ],

  suranalyse_mentale: [
    {
      id: 'sa_1',
      type: 'slider',
      text: 'Tu rejoues des conversations dans ta tête — parfois des heures, parfois des jours après. C\'est fréquent à quel point ?',
      sliderMin: 'Rarement',
      sliderMax: 'Presque toujours',
    },
    {
      id: 'sa_2',
      type: 'choice',
      text: 'La nuit, quand tu n\'arrives pas à dormir, ton cerveau :',
      options: [
        { id: 'a', text: 'rejoue une conversation pour trouver ce que tu aurais dû dire à la place', weight: { suranalyse_mentale: 5, hypervigilance: 2 } },
        { id: 'b', text: 'anticipe des problèmes qui n\'existent pas encore — mais pourraient exister', weight: { suranalyse_mentale: 4, hypervigilance: 3 } },
        { id: 'c', text: 'remet en question des décisions déjà prises et irréversibles', weight: { suranalyse_mentale: 5 } },
        { id: 'd', text: 'construit des scénarios précis de comment quelque chose pourrait mal finir', weight: { suranalyse_mentale: 4, abandon: 2 } },
      ],
    },
    {
      id: 'sa_3',
      type: 'binary',
      text: 'Tu écris des messages — parfois très longs — que tu n\'envoies jamais.',
      options: [
        { id: 'oui', text: 'Oui — assez souvent', weight: { suranalyse_mentale: 5, hypervigilance: 2 } },
        { id: 'non', text: 'Non, j\'envoie ce que j\'écris', weight: { masque_social: 1 } },
      ],
    },
    {
      id: 'sa_4',
      type: 'choice',
      text: 'Ton cerveau fait ça tout seul — sans que tu lui aies demandé :',
      options: [
        { id: 'a', text: 'il cherche le sens caché derrière ce qu\'on t\'a dit — le vrai sens', weight: { suranalyse_mentale: 5, hypervigilance: 2 } },
        { id: 'b', text: 'il fabrique des problèmes dans des situations qui n\'en avaient pas', weight: { suranalyse_mentale: 5 } },
        { id: 'c', text: 'il remet en question tes propres réactions — t\'as-tu sur-réagi ? pas assez réagi ?', weight: { suranalyse_mentale: 4 } },
        { id: 'd', text: 'il trouve des raisons logiques pour lesquelles quelque chose va finir mal', weight: { suranalyse_mentale: 4, abandon: 2 } },
      ],
    },
    {
      id: 'sa_5',
      type: 'image_choice',
      text: 'Ton cerveau le soir ressemble à :',
      imageOptions: [
        { id: 'a', emoji: '🌀', text: 'Un tourbillon de pensées qui s\'enchaînent sans s\'arrêter', weight: { suranalyse_mentale: 5 } },
        { id: 'b', emoji: '🖥️', text: '47 onglets ouverts — dont 30 tournent en arrière-plan depuis des jours', weight: { suranalyse_mentale: 5, fatigue_mentale: 2 } },
        { id: 'c', emoji: '🎬', text: 'Un cinéma qui rejoue en boucle des scènes passées avec de légères variantes', weight: { suranalyse_mentale: 4, hypervigilance: 2 } },
        { id: 'd', emoji: '🔬', text: 'Un microscope — chaque micro-détail agrandi jusqu\'à l\'obsession', weight: { suranalyse_mentale: 4 } },
      ],
    },
    {
      id: 'sa_6',
      type: 'binary',
      text: 'Tu as du mal à profiter d\'un moment qui se passe bien — parce que ton cerveau se prépare déjà à ce qui vient après.',
      options: [
        { id: 'oui', text: 'Oui — même dans les bons moments, je ne suis jamais vraiment là', weight: { suranalyse_mentale: 5, hypervigilance: 2 } },
        { id: 'non', text: 'Non, je sais être présent', weight: { masque_social: 1 } },
      ],
    },
  ],
}

export function getQuestionsForFunnel(funnel: FunnelType): Question[] {
  const base = QUESTIONS[funnel] || []
  const universal: Question[] = [
    {
      id: 'u_1',
      type: 'choice',
      text: 'La phrase qui résonne le plus en ce moment :',
      options: [
        { id: 'a', text: '"Je fais semblant d\'aller bien la plupart du temps"', weight: { masque_social: 4, fatigue_mentale: 3 } },
        { id: 'b', text: '"J\'ai peur de ce que les gens penseraient s\'ils me connaissaient vraiment"', weight: { abandon: 3, masque_social: 3 } },
        { id: 'c', text: '"Je suis épuisé de ressentir autant"', weight: { fatigue_mentale: 4, hypervigilance: 2 } },
        { id: 'd', text: '"Je voudrais me détacher mais je n\'y arrive pas"', weight: { dependance_affective: 4, attachement_anxieux: 2 } },
      ],
    },
    {
      id: 'u_2',
      type: 'slider',
      text: 'Tu te sens vraiment compris par les gens qui t\'entourent ?',
      sliderMin: 'Jamais vraiment',
      sliderMax: 'Totalement',
    },
  ]
  return [...base, ...universal].slice(0, 12)
}

export function computeAnalysis(funnel: FunnelType, answers: Array<{ weights: Record<string, number> }>) {
  const scores: Record<string, number> = {}
  for (const answer of answers) {
    for (const [trait, weight] of Object.entries(answer.weights)) {
      scores[trait] = (scores[trait] || 0) + weight
    }
  }
  const archetypes = FUNNEL_ARCHETYPES[funnel]
  const archetype = archetypes[Math.floor(Math.random() * archetypes.length)]
  const emotionalScore = Math.min(97, Math.max(62, 70 + (scores[funnel] || 0) * 2))
  const vulnerabilityScore = Math.min(94, Math.max(55, 60 + (scores['abandon'] || 0) * 3))
  const connectionScore = Math.min(88, Math.max(38, 82 - (scores['evitement_emotionnel'] || 0) * 4))
  return { archetype, emotionalScore, vulnerabilityScore, connectionScore, dominantTrait: FUNNEL_LABELS[funnel] }
}

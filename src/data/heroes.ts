export type HeroComplexity = 1 | 2 | 3;
export type HeroPosition = 1 | 2 | 3 | 4 | 5;
export type AttackType = 'Melee' | 'Ranged';
export type PrimaryAttribute = 'Strength' | 'Agility' | 'Intelligence' | 'Universal';

export interface Ability {
  name: string;
  description: string;
  type: 'Active' | 'Passive' | 'Ultimate';
}

export interface Hero {
  id: string;
  name: string;
  nameRu: string;
  primaryAttribute: PrimaryAttribute;
  attackType: AttackType;
  positions: HeroPosition[];
  complexity: HeroComplexity;
  abilities: Ability[];
  lore: string;
}

export const heroes: Hero[] = [
  {
    id: 'anti-mage',
    name: 'Anti-Mage',
    nameRu: 'Анти-Маг',
    primaryAttribute: 'Agility',
    attackType: 'Melee',
    positions: [1],
    complexity: 1,
    lore: 'Монах-воин, истребляющий магию и её носителей.',
    abilities: [
      {
        name: 'Mana Break',
        description: 'Сжигает ману при каждой атаке',
        type: 'Passive'
      },
      {
        name: 'Blink',
        description: 'Мгновенно телепортируется на короткое расстояние',
        type: 'Active'
      },
      {
        name: 'Counterspell',
        description: 'Отражает заклинания обратно в противника',
        type: 'Active'
      },
      {
        name: 'Mana Void',
        description: 'Наносит урон в зависимости от потерянной маны цели',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'axe',
    name: 'Axe',
    nameRu: 'Акс',
    primaryAttribute: 'Strength',
    attackType: 'Melee',
    positions: [3, 4],
    complexity: 1,
    lore: 'Берсерк, провоцирующий врагов и разрубающий слабых.',
    abilities: [
      {
        name: 'Berserkers Call',
        description: 'Заставляет врагов атаковать Акса',
        type: 'Active'
      },
      {
        name: 'Battle Hunger',
        description: 'Проклинает врага, наносящее урон со временем',
        type: 'Active'
      },
      {
        name: 'Counter Helix',
        description: 'Наносит урон вокруг себя при получении атак',
        type: 'Passive'
      },
      {
        name: 'Culling Blade',
        description: 'Мгновенно убивает врага с малым здоровьем',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'crystal-maiden',
    name: 'Crystal Maiden',
    nameRu: 'Ледяная Дева',
    primaryAttribute: 'Intelligence',
    attackType: 'Ranged',
    positions: [5],
    complexity: 1,
    lore: 'Ледяная волшебница, поддерживающая команду и замораживающая врагов.',
    abilities: [
      {
        name: 'Crystal Nova',
        description: 'Взрыв льда, замедляющий и наносящий урон',
        type: 'Active'
      },
      {
        name: 'Frostbite',
        description: 'Замораживает врага на месте',
        type: 'Active'
      },
      {
        name: 'Arcane Aura',
        description: 'Увеличивает регенерацию маны команды',
        type: 'Passive'
      },
      {
        name: 'Freezing Field',
        description: 'Создаёт ледяную бурю вокруг себя',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'invoker',
    name: 'Invoker',
    nameRu: 'Инвокер',
    primaryAttribute: 'Intelligence',
    attackType: 'Ranged',
    positions: [2],
    complexity: 3,
    lore: 'Мастер элементальной магии, комбинирующий 10 различных заклинаний.',
    abilities: [
      {
        name: 'Quas',
        description: 'Сфера льда - усиливает регенерацию',
        type: 'Active'
      },
      {
        name: 'Wex',
        description: 'Сфера шторма - увеличивает скорость атаки',
        type: 'Active'
      },
      {
        name: 'Exort',
        description: 'Сфера огня - усиливает урон',
        type: 'Active'
      },
      {
        name: 'Invoke',
        description: 'Создаёт заклинание из комбинации сфер',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'pudge',
    name: 'Pudge',
    nameRu: 'Пудж',
    primaryAttribute: 'Strength',
    attackType: 'Melee',
    positions: [4, 5],
    complexity: 2,
    lore: 'Мясник, затягивающий врагов крюком и пожирающий их.',
    abilities: [
      {
        name: 'Meat Hook',
        description: 'Бросает крюк, затягивая врага к себе',
        type: 'Active'
      },
      {
        name: 'Rot',
        description: 'Излучает яд, наносящий урон вокруг',
        type: 'Active'
      },
      {
        name: 'Flesh Heap',
        description: 'Увеличивает силу за каждое убийство',
        type: 'Passive'
      },
      {
        name: 'Dismember',
        description: 'Обездвиживает и пожирает врага',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'drow-ranger',
    name: 'Drow Ranger',
    nameRu: 'Дроу Рейнджер',
    primaryAttribute: 'Agility',
    attackType: 'Ranged',
    positions: [1, 2],
    complexity: 1,
    lore: 'Меткая лучница, замораживающая врагов ледяными стрелами.',
    abilities: [
      {
        name: 'Frost Arrows',
        description: 'Стрелы замедляют врагов',
        type: 'Active'
      },
      {
        name: 'Gust',
        description: 'Отталкивает и замалчивает врагов',
        type: 'Active'
      },
      {
        name: 'Multishot',
        description: 'Стреляет залпом стрел по всем врагам',
        type: 'Active'
      },
      {
        name: 'Marksmanship',
        description: 'Увеличивает ловкость и точность',
        type: 'Passive'
      }
    ]
  },
  {
    id: 'juggernaut',
    name: 'Juggernaut',
    nameRu: 'Джаггернаут',
    primaryAttribute: 'Agility',
    attackType: 'Melee',
    positions: [1],
    complexity: 1,
    lore: 'Мастер клинка, неуязвимый во время Blade Fury.',
    abilities: [
      {
        name: 'Blade Fury',
        description: 'Вращается с мечом, становясь неуязвимым',
        type: 'Active'
      },
      {
        name: 'Healing Ward',
        description: 'Создаёт тотем, лечащий союзников',
        type: 'Active'
      },
      {
        name: 'Blade Dance',
        description: 'Шанс нанести критический удар',
        type: 'Passive'
      },
      {
        name: 'Omnislash',
        description: 'Прыгает между врагами, нанося урон',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'mirana',
    name: 'Mirana',
    nameRu: 'Мирана',
    primaryAttribute: 'Agility',
    attackType: 'Ranged',
    positions: [3, 4],
    complexity: 2,
    lore: 'Принцесса Луны, прыгающая на тигре и стреляющая священными стрелами.',
    abilities: [
      {
        name: 'Starstorm',
        description: 'Призывает метеоритный дождь',
        type: 'Active'
      },
      {
        name: 'Sacred Arrow',
        description: 'Стреляет магической стрелой, оглушающей врага',
        type: 'Active'
      },
      {
        name: 'Leap',
        description: 'Прыгает вперёд, увеличивая скорость',
        type: 'Active'
      },
      {
        name: 'Moonlight Shadow',
        description: 'Делает команду невидимой',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'phantom-assassin',
    name: 'Phantom Assassin',
    nameRu: 'Призрачная Убийца',
    primaryAttribute: 'Agility',
    attackType: 'Melee',
    positions: [1],
    complexity: 1,
    lore: 'Убийца из тени, наносящая смертельные критические удары.',
    abilities: [
      {
        name: 'Stifling Dagger',
        description: 'Бросает кинжал, замедляющий врага',
        type: 'Active'
      },
      {
        name: 'Phantom Strike',
        description: 'Телепортируется к цели для атаки',
        type: 'Active'
      },
      {
        name: 'Blur',
        description: 'Шанс уклониться от атак',
        type: 'Passive'
      },
      {
        name: 'Coup de Grace',
        description: 'Шанс нанести мощный критический удар',
        type: 'Passive'
      }
    ]
  },
  {
    id: 'sniper',
    name: 'Sniper',
    nameRu: 'Снайпер',
    primaryAttribute: 'Agility',
    attackType: 'Ranged',
    positions: [2],
    complexity: 1,
    lore: 'Дальнобойный стрелок, атакующий с огромного расстояния.',
    abilities: [
      {
        name: 'Shrapnel',
        description: 'Обстреливает зону осколками',
        type: 'Active'
      },
      {
        name: 'Headshot',
        description: 'Шанс оглушить при атаке',
        type: 'Passive'
      },
      {
        name: 'Take Aim',
        description: 'Увеличивает дальность атаки',
        type: 'Passive'
      },
      {
        name: 'Assassinate',
        description: 'Точный выстрел по одной цели',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'lion',
    name: 'Lion',
    nameRu: 'Лайон',
    primaryAttribute: 'Intelligence',
    attackType: 'Ranged',
    positions: [5],
    complexity: 1,
    lore: 'Демонический маг, превращающий врагов в овец и высасывающий ману.',
    abilities: [
      {
        name: 'Earth Spike',
        description: 'Поднимает шипы из земли',
        type: 'Active'
      },
      {
        name: 'Hex',
        description: 'Превращает врага в безобидное существо',
        type: 'Active'
      },
      {
        name: 'Mana Drain',
        description: 'Высасывает ману врага',
        type: 'Active'
      },
      {
        name: 'Finger of Death',
        description: 'Испепеляет врага молнией',
        type: 'Ultimate'
      }
    ]
  },
  {
    id: 'shadow-fiend',
    name: 'Shadow Fiend',
    nameRu: 'Шадоу Фиенд',
    primaryAttribute: 'Agility',
    attackType: 'Ranged',
    positions: [2],
    complexity: 2,
    lore: 'Демон теней, собирающий души убитых врагов.',
    abilities: [
      {
        name: 'Shadowraze',
        description: 'Вызывает тени на трёх дистанциях',
        type: 'Active'
      },
      {
        name: 'Necromastery',
        description: 'Собирает души за убийства',
        type: 'Passive'
      },
      {
        name: 'Presence of the Dark Lord',
        description: 'Снижает броню врагов вокруг',
        type: 'Passive'
      },
      {
        name: 'Requiem of Souls',
        description: 'Высвобождает все собранные души',
        type: 'Ultimate'
      }
    ]
  }
];

export const positionNames: Record<HeroPosition, string> = {
  1: 'Carry (Pos 1)',
  2: 'Midlaner (Pos 2)',
  3: 'Offlaner (Pos 3)',
  4: 'Support (Pos 4)',
  5: 'Hard Support (Pos 5)'
};

export const complexityNames: Record<HeroComplexity, string> = {
  1: 'Простой',
  2: 'Средний',
  3: 'Сложный'
};

export const attributeColors: Record<PrimaryAttribute, string> = {
  'Strength': 'text-red-400',
  'Agility': 'text-green-400',
  'Intelligence': 'text-blue-400',
  'Universal': 'text-purple-400'
};

import { useState, useMemo } from 'react';
import { heroes, Hero, HeroPosition, HeroComplexity, AttackType } from '@/data/heroes';
import { HeroCard } from '@/components/HeroCard';
import { HeroFilters } from '@/components/HeroFilters';
import { HeroDetailModal } from '@/components/HeroDetailModal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPositions, setSelectedPositions] = useState<HeroPosition[]>([]);
  const [selectedComplexities, setSelectedComplexities] = useState<HeroComplexity[]>([]);
  const [selectedAttackTypes, setSelectedAttackTypes] = useState<AttackType[]>([]);
  const [activeTab, setActiveTab] = useState<'heroes' | 'positions' | 'abilities' | 'items'>('heroes');

  const filteredHeroes = useMemo(() => {
    return heroes.filter(hero => {
      const matchesSearch = 
        hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.nameRu.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPosition = 
        selectedPositions.length === 0 || 
        hero.positions.some(pos => selectedPositions.includes(pos));
      
      const matchesComplexity = 
        selectedComplexities.length === 0 || 
        selectedComplexities.includes(hero.complexity);
      
      const matchesAttackType = 
        selectedAttackTypes.length === 0 || 
        selectedAttackTypes.includes(hero.attackType);

      return matchesSearch && matchesPosition && matchesComplexity && matchesAttackType;
    });
  }, [searchQuery, selectedPositions, selectedComplexities, selectedAttackTypes]);

  const handlePositionToggle = (position: HeroPosition) => {
    setSelectedPositions(prev =>
      prev.includes(position)
        ? prev.filter(p => p !== position)
        : [...prev, position]
    );
  };

  const handleComplexityToggle = (complexity: HeroComplexity) => {
    setSelectedComplexities(prev =>
      prev.includes(complexity)
        ? prev.filter(c => c !== complexity)
        : [...prev, complexity]
    );
  };

  const handleAttackTypeToggle = (attackType: AttackType) => {
    setSelectedAttackTypes(prev =>
      prev.includes(attackType)
        ? prev.filter(t => t !== attackType)
        : [...prev, attackType]
    );
  };

  const handleResetFilters = () => {
    setSelectedPositions([]);
    setSelectedComplexities([]);
    setSelectedAttackTypes([]);
    setSearchQuery('');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'heroes':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <HeroFilters
                selectedPositions={selectedPositions}
                selectedComplexities={selectedComplexities}
                selectedAttackTypes={selectedAttackTypes}
                onPositionToggle={handlePositionToggle}
                onComplexityToggle={handleComplexityToggle}
                onAttackTypeToggle={handleAttackTypeToggle}
                onReset={handleResetFilters}
              />
            </div>
            
            <div className="lg:col-span-3">
              <div className="mb-6">
                <div className="relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Поиск героев..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {filteredHeroes.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="Search" size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Герои не найдены</p>
                  <Button variant="outline" onClick={handleResetFilters} className="mt-4">
                    Сбросить фильтры
                  </Button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mb-4">
                    Найдено героев: {filteredHeroes.length}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredHeroes.map(hero => (
                      <HeroCard
                        key={hero.id}
                        hero={hero}
                        onClick={() => setSelectedHero(hero)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      
      case 'positions':
        return (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Позиции в Dota 2</h2>
              <p className="text-muted-foreground">
                В Dota 2 существует 5 основных позиций, каждая из которых имеет свою роль в команде
              </p>
            </div>
            
            {[1, 2, 3, 4, 5].map(pos => {
              const posHeroes = heroes.filter(h => h.positions.includes(pos as HeroPosition));
              const descriptions: Record<number, { title: string; desc: string; icon: string }> = {
                1: {
                  title: 'Carry (Позиция 1)',
                  desc: 'Главный герой команды, нуждающийся в большом количестве золота. В поздней игре наносит основной урон.',
                  icon: 'Sword'
                },
                2: {
                  title: 'Midlaner (Позиция 2)',
                  desc: 'Играет на центральной линии в одиночку. Получает быстрый опыт и золото для раннего доминирования.',
                  icon: 'Zap'
                },
                3: {
                  title: 'Offlaner (Позиция 3)',
                  desc: 'Стоит на сложной линии против вражеского керри. Обычно танки и инициаторы.',
                  icon: 'Shield'
                },
                4: {
                  title: 'Support (Позиция 4)',
                  desc: 'Роумящий саппорт, помогающий всем линиям. Инициирует драки и контролирует карту.',
                  icon: 'Users'
                },
                5: {
                  title: 'Hard Support (Позиция 5)',
                  desc: 'Полный саппорт, покупающий варды и помогающий керри. Наименьший приоритет на золото.',
                  icon: 'Heart'
                }
              };
              
              return (
                <div key={pos} className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name={descriptions[pos].icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{descriptions[pos].title}</h3>
                      <p className="text-sm text-muted-foreground">{posHeroes.length} героев</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{descriptions[pos].desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {posHeroes.slice(0, 8).map(hero => (
                      <Button
                        key={hero.id}
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedHero(hero)}
                      >
                        {hero.nameRu}
                      </Button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 'abilities':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Типы способностей</h2>
              <p className="text-muted-foreground">
                Способности героев делятся на активные, пассивные и ультимейты
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Zap" size={32} className="text-green-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Активные способности</h3>
                    <p className="text-sm text-muted-foreground">Требуют активации игроком</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Основной тип способностей в Dota 2. Требуют маны и имеют время восстановления. 
                  Используются для нанесения урона, контроля или поддержки команды.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Circle" size={32} className="text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Пассивные способности</h3>
                    <p className="text-sm text-muted-foreground">Работают постоянно</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Не требуют активации и работают автоматически. Обычно усиливают характеристики героя 
                  или дают специальные эффекты при атаке.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Crown" size={32} className="text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Ультимейты</h3>
                    <p className="text-sm text-muted-foreground">Самые мощные способности</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Самая сильная способность героя, открывается на 6 уровне. Обычно имеет большое время 
                  восстановления и может переломить ход боя.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'items':
        return (
          <div className="max-w-4xl mx-auto text-center py-12">
            <Icon name="Package" size={64} className="mx-auto mb-6 text-muted-foreground opacity-50" />
            <h2 className="text-3xl font-bold mb-4">Предметы</h2>
            <p className="text-muted-foreground text-lg">
              Раздел с предметами появится в следующем обновлении энциклопедии
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Dota 2 Энциклопедия
              </h1>
              <p className="text-sm text-muted-foreground">Полный справочник по героям и способностям</p>
            </div>
            <Icon name="Gamepad2" size={40} className="text-primary" />
          </div>
          
          <nav className="flex gap-2">
            {[
              { id: 'heroes' as const, label: 'Герои', icon: 'Users' },
              { id: 'positions' as const, label: 'Позиции', icon: 'Target' },
              { id: 'abilities' as const, label: 'Способности', icon: 'Sparkles' },
              { id: 'items' as const, label: 'Предметы', icon: 'Package' }
            ].map(tab => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                onClick={() => setActiveTab(tab.id)}
                className="gap-2"
              >
                <Icon name={tab.icon as any} size={18} />
                {tab.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <HeroDetailModal
        hero={selectedHero}
        open={!!selectedHero}
        onClose={() => setSelectedHero(null)}
      />
    </div>
  );
};

export default Index;
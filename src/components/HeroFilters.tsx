import { HeroPosition, HeroComplexity, AttackType, positionNames, complexityNames } from '@/data/heroes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroFiltersProps {
  selectedPositions: HeroPosition[];
  selectedComplexities: HeroComplexity[];
  selectedAttackTypes: AttackType[];
  onPositionToggle: (position: HeroPosition) => void;
  onComplexityToggle: (complexity: HeroComplexity) => void;
  onAttackTypeToggle: (attackType: AttackType) => void;
  onReset: () => void;
}

export const HeroFilters = ({
  selectedPositions,
  selectedComplexities,
  selectedAttackTypes,
  onPositionToggle,
  onComplexityToggle,
  onAttackTypeToggle,
  onReset
}: HeroFiltersProps) => {
  const positions: HeroPosition[] = [1, 2, 3, 4, 5];
  const complexities: HeroComplexity[] = [1, 2, 3];
  const attackTypes: AttackType[] = ['Melee', 'Ranged'];

  const hasActiveFilters = 
    selectedPositions.length > 0 || 
    selectedComplexities.length > 0 || 
    selectedAttackTypes.length > 0;

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Icon name="Filter" size={20} />
          Фильтры
        </h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onReset}>
            <Icon name="X" size={16} className="mr-1" />
            Сбросить
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Позиция</h4>
          <div className="flex flex-wrap gap-2">
            {positions.map(pos => (
              <Badge
                key={pos}
                variant={selectedPositions.includes(pos) ? 'default' : 'outline'}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onPositionToggle(pos)}
              >
                {positionNames[pos]}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Сложность</h4>
          <div className="flex flex-wrap gap-2">
            {complexities.map(complexity => (
              <Badge
                key={complexity}
                variant={selectedComplexities.includes(complexity) ? 'default' : 'outline'}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onComplexityToggle(complexity)}
              >
                {complexityNames[complexity]}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Тип атаки</h4>
          <div className="flex flex-wrap gap-2">
            {attackTypes.map(type => (
              <Badge
                key={type}
                variant={selectedAttackTypes.includes(type) ? 'default' : 'outline'}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onAttackTypeToggle(type)}
              >
                <Icon 
                  name={type === 'Melee' ? 'Sword' : 'Target'} 
                  size={14} 
                  className="mr-1" 
                />
                {type === 'Melee' ? 'Ближний' : 'Дальний'}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

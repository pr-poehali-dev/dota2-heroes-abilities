import { Hero, attributeColors, positionNames } from '@/data/heroes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroCardProps {
  hero: Hero;
  onClick: () => void;
}

export const HeroCard = ({ hero, onClick }: HeroCardProps) => {
  return (
    <Card 
      className="cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/20 group"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {hero.nameRu}
          </CardTitle>
          <Badge variant="outline" className={attributeColors[hero.primaryAttribute]}>
            {hero.primaryAttribute}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{hero.name}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name={hero.attackType === 'Melee' ? 'Sword' : 'Target'} size={16} />
          <span>{hero.attackType === 'Melee' ? 'Ближний' : 'Дальний'} бой</span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {hero.positions.map(pos => (
            <Badge key={pos} variant="secondary" className="text-xs">
              {positionNames[pos]}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < hero.complexity ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">Сложность</span>
        </div>
      </CardContent>
    </Card>
  );
};

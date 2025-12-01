import { Hero, attributeColors, positionNames, complexityNames } from '@/data/heroes';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HeroDetailModalProps {
  hero: Hero | null;
  open: boolean;
  onClose: () => void;
}

export const HeroDetailModal = ({ hero, open, onClose }: HeroDetailModalProps) => {
  if (!hero) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            {hero.nameRu}
            <Badge variant="outline" className={attributeColors[hero.primaryAttribute]}>
              {hero.primaryAttribute}
            </Badge>
          </DialogTitle>
          <p className="text-muted-foreground">{hero.name}</p>
        </DialogHeader>
        
        <ScrollArea className="max-h-[calc(90vh-120px)]">
          <div className="space-y-6 pr-4">
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Icon name={hero.attackType === 'Melee' ? 'Sword' : 'Target'} size={18} />
                <span>{hero.attackType === 'Melee' ? 'Ближний' : 'Дальний'} бой</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Icon name="Target" size={18} />
                <div className="flex gap-1">
                  {hero.positions.map(pos => (
                    <Badge key={pos} variant="secondary" className="text-xs">
                      {positionNames[pos]}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Zap" size={18} />
                <span>{complexityNames[hero.complexity]}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="BookOpen" size={18} />
                Предыстория
              </h3>
              <p className="text-muted-foreground">{hero.lore}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Sparkles" size={18} />
                Способности
              </h3>
              <div className="space-y-3">
                {hero.abilities.map((ability, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-medium flex items-center gap-2">
                        {ability.type === 'Ultimate' && (
                          <Icon name="Crown" size={16} className="text-primary" />
                        )}
                        {ability.type === 'Passive' && (
                          <Icon name="Circle" size={16} className="text-blue-400" />
                        )}
                        {ability.type === 'Active' && (
                          <Icon name="Zap" size={16} className="text-green-400" />
                        )}
                        {ability.name}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={
                          ability.type === 'Ultimate' 
                            ? 'border-primary text-primary' 
                            : ability.type === 'Passive'
                            ? 'border-blue-400 text-blue-400'
                            : 'border-green-400 text-green-400'
                        }
                      >
                        {ability.type === 'Ultimate' ? 'Ульта' : ability.type === 'Passive' ? 'Пассивная' : 'Активная'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{ability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

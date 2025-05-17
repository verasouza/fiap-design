import React from 'react';
import { 
  StyledCard, 
  CardIconWrapper,
  CardHeader, 
  CardContent
} from './styles';

export type CardVariant = 'default' | 'secondary' | 'disabled';

export interface CardProps {
  variant?: CardVariant;
  title?: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  title, 
  content,
  icon,
  className
}) => {
  return (
    <StyledCard variant={variant} className={className}>
      {icon && <CardIconWrapper>{icon}</CardIconWrapper>}
      {title && <CardHeader>{title}</CardHeader>}
      {content && <CardContent>{content}</CardContent>}
    </StyledCard>
  );
};

interface CardGroupProps {
  cards: Array<CardProps>;
  className?: string;
}

export const CardGroup: React.FC<CardGroupProps> = ({ cards, className }) => {
  return (
    <div className={className}>
      {cards.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          content={card.content}
          icon={card.icon}
        />
      ))}
    </div>
  );
};
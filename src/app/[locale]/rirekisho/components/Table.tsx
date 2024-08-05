import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const grid = 'grid grid-flow-col';
const borders = 'border border-solid border-black';

export const Table: FC<Props> = ({ className = '', children }) => {
  return (
    <div role='table' className={cn(grid, borders, className)}>
      {children}
    </div>
  );
};

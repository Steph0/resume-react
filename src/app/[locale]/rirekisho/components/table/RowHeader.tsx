import { FC, PropsWithChildren } from 'react';
import { Cell } from './Cell';
import { cn } from '@/lib/utils';

interface RowHeaderProps extends PropsWithChildren {
  className?: string;
}

export const RowHeader: FC<RowHeaderProps> = ({ className = '', children }) => {
  return (
    <Cell role='rowheader' className={cn('text-center', className)}>
      {children}
    </Cell>
  );
};

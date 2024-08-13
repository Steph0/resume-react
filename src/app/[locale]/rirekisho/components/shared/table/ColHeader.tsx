import { FC, PropsWithChildren } from 'react';
import { Cell } from './Cell';
import { cn } from '@/lib/utils';

interface ColHeaderProps extends PropsWithChildren {
  className?: string;
}

export const ColHeader: FC<ColHeaderProps> = ({ className = '', children }) => {
  return (
    <Cell role='columnheader' className={cn('text-center', className)}>
      {children}
    </Cell>
  );
};

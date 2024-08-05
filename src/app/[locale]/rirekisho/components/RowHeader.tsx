import { FC, ReactNode } from 'react';
import { Cell } from './Cell';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: ReactNode;
}

export const RowHeader: FC<Props> = ({ className = '', children }) => {
  return (
    <Cell role='rowheader' className={cn('text-center', className)}>
      {children}
    </Cell>
  );
};

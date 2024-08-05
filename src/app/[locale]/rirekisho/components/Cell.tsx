import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface Props {
  role?: string;
  className?: string;
  children: ReactNode;
}

const borders = 'border border-solid border-black';
const padding = 'pt-2 pb-2 pl-2 pr-2';
const alignement = 'content-center';

export const Cell: FC<Props> = ({
  role = 'cell',
  className = '',
  children,
}) => {
  return (
    <p role={role} className={cn(borders, alignement, padding, className)}>
      {children}
    </p>
  );
};

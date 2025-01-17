import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';

interface CellProps extends PropsWithChildren {
  role?: string;
  className?: string;
  ariaHidden?: boolean;
}

const borders = 'border border-solid border-black';
const padding = 'pt-2 pb-2 pl-2 pr-2';
const alignement = 'content-center';

export const Cell: FC<CellProps> = ({
  role = 'cell',
  className = '',
  children,
  ariaHidden,
}) => {
  return (
    <p
      aria-hidden={ariaHidden}
      role={role}
      className={cn(borders, alignement, padding, className)}
    >
      {children}
    </p>
  );
};

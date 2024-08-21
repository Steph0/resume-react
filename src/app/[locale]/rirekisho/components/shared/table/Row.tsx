import { FC, PropsWithChildren } from 'react';

interface RowProps extends PropsWithChildren {
  ariaHidden?: boolean;
}

const grid = 'grid grid-cols-subgrid col-span-full';

export const Row: FC<RowProps> = ({ children, ariaHidden }) => {
  return (
    <div aria-hidden={ariaHidden} role='row' className={grid}>
      {children}
    </div>
  );
};

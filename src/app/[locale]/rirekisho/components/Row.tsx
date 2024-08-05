import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const grid = 'grid grid-cols-subgrid col-span-full';

export const Row: FC<Props> = ({ children }) => {
  return (
    <div role='row' className={grid}>
      {children}
    </div>
  );
};

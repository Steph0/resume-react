import { FC, PropsWithChildren } from 'react';

interface RowProps extends PropsWithChildren<any> {}

const grid = 'grid grid-cols-subgrid col-span-full';

export const Row: FC<RowProps> = (props: RowProps) => {
  return (
    <div role='row' className={grid}>
      {props.children}
    </div>
  );
};

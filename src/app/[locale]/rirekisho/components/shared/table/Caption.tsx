import { FC, PropsWithChildren } from 'react';
import { Cell } from './Cell';

interface CaptionProps extends PropsWithChildren {}

export const Caption: FC<CaptionProps> = ({ children }) => {
  return (
    <div role='caption' className='col-span-full grid grid-cols-subgrid'>
      <Cell className='col-span-2' ariaHidden></Cell>
      <Cell className='col-span-1' ariaHidden></Cell>
      <Cell className='col-span-full col-start-4 text-center font-bold'>
        {children}
      </Cell>
    </div>
  );
};

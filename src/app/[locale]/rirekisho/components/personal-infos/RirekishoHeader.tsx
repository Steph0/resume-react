import { FC } from 'react';

interface RirekishoHeaderProps {
  title: string;
  date: string;
  dateTime: string;
}

export const RirekishoHeader: FC<RirekishoHeaderProps> = (
  props: RirekishoHeaderProps,
) => {
  return (
    <div className='flex place-content-between'>
      <h1 className='p-4 text-2xl'>{props.title}</h1>
      <time dateTime={props.dateTime} className='place-self-end p-2 text-xl'>
        {props.date}
      </time>
    </div>
  );
};

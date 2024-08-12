import { cn } from '@/lib/utils';
import { FC } from 'react';

interface RirekishoHeaderProps {
  title: string;
  date: string;
  dateTime: string;
  className?: string;
}

export const RirekishoHeader: FC<RirekishoHeaderProps> = ({
  title,
  date,
  dateTime,
  className = '',
}) => {
  return (
    <div className={cn('flex place-content-between', className)}>
      <h1 className='p-4 text-2xl'>{title}</h1>
      <time dateTime={dateTime} className='place-self-end p-2 text-xl'>
        {date}
      </time>
    </div>
  );
};

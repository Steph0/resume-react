import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';
import { nanoid } from 'nanoid';

interface InfoItemProps {
  legend: string;
  value: string | ReactNode;
  ariaLabel?: string;
  className?: string;
}

const style = {
  commons: {
    borders: 'border border-solid border-black',
    padding: 'p-2',
  },
  wrapper: 'col-span-full grid grid-cols-subgrid grid-rows-subgrid',
  definition: {
    grid: 'col-span-1 row-span-1',
    text: 'text-center',
  },
  term: {
    grid: 'col-span-full col-start-2',
  },
};

export const InfoItem: FC<InfoItemProps> = ({
  legend,
  value,
  ariaLabel,
  className,
}) => {
  const id = nanoid();
  return (
    <div className={cn(style.wrapper, className)}>
      <dt
        aria-label={ariaLabel}
        className={cn(_flattenStyle(style.commons, style.definition))}
        id={id}
      >
        {legend}
      </dt>
      <dd
        className={cn(_flattenStyle(style.commons, style.term))}
        aria-labelledby={id}
      >
        {value}
      </dd>
    </div>
  );
};

const _flattenStyle = (...styles: Object[]) => {
  return styles.map(Object.values);
};

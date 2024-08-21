import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';
import { nanoid } from 'nanoid';

interface InfoItemStyleProp {
  definition?: string;
  term?: string;
}

interface InfoItemProps {
  legend: string;
  value: string | ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: InfoItemStyleProp;
}

const _defaultStyle = {
  commons: {
    borders: 'border border-solid border-black',
    padding: 'p-2',
  },
  wrapper: 'col-span-full grid grid-cols-subgrid grid-rows-subgrid',
  definition: {
    grid: 'col-span-2 row-span-1',
    text: 'text-center font-bold',
  },
  term: {
    grid: 'col-span-full col-start-3',
  },
};

export const InfoItem: FC<InfoItemProps> = ({
  legend,
  value,
  ariaLabel,
  className,
  style,
}) => {
  const id = nanoid();
  return (
    <div className={cn(_defaultStyle.wrapper, className)}>
      <dt
        aria-label={ariaLabel}
        className={cn(
          _flattenStyle(_defaultStyle.commons, _defaultStyle.definition),
          style?.definition,
        )}
        id={id}
      >
        {legend}
      </dt>
      <dd
        className={cn(
          _flattenStyle(_defaultStyle.commons, _defaultStyle.term),
          style?.term,
        )}
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

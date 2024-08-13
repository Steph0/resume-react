import { FC } from 'react';
import photo from '@/public/images/rirekisho_me.jpg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const Photo: FC = () => {
  const t = useTranslations();
  return (
    <div className='relative h-full w-full'>
      <Image
        alt={t('Rirekisho.PersonalInfos.photoAlt')}
        src={photo}
        priority
        fill
        sizes='(max-width: 768px) 100vw, 10vw'
        className='m-auto box-border object-contain p-4 print:max-h-[4cm]'
      />
    </div>
  );
};

import { useTranslations } from 'next-intl';
import { RirekishoHeader } from './RirekishoHeader';
import { InfoItem } from './InfoItem';
import { Photo } from './Photo';

export default function PersonalInfos() {
  const t = useTranslations();
  const now = new Date();

  return (
    <div>
      <div className='grid auto-cols-fr grid-cols-12'>
        <RirekishoHeader
          title={t('Rirekisho.PersonalInfos.title')}
          date={t('Rirekisho.PersonalInfos.date', { resumeDate: now })}
          dateTime={now.toISOString()}
          className='col-span-9 row-span-1'
        />
        <div className='col-span-full col-start-10 row-span-4'>
          <Photo />
        </div>

        <dl className='col-span-9 row-span-3 grid grid-cols-subgrid grid-rows-subgrid'>
          <InfoItem
            legend={t('Rirekisho.PersonalInfos.nameFurigana.legend')}
            value={t('Rirekisho.PersonalInfos.nameFurigana.value')}
            ariaLabel={t('Rirekisho.PersonalInfos.nameFurigana.ariaLabel')}
            className='col-span-7'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.name.legend')}
            value={t('Rirekisho.PersonalInfos.name.value')}
            className='col-span-7'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.gender.legend')}
            value={t.rich('Rirekisho.PersonalInfos.gender.value', {
              selected: (chunks) => (
                <span
                  aria-label={t('Rirekisho.PersonalInfos.gender.ariaLabel')}
                  role='img'
                  className='rounded-full border border-solid border-black pb-1 pe-3 ps-3 pt-1'
                >
                  {chunks}
                </span>
              ),
              unapplicable: (chunks) => (
                <span aria-hidden={true} role='img'>
                  {chunks}
                </span>
              ),
            })}
            className='col-start-8 row-span-2 row-start-1'
            style={{
              definition: 'hidden',
              term: 'col-start-1 row-span-2 text-center p-8',
            }}
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.nationality.legend')}
            value={t('Rirekisho.PersonalInfos.nationality.value')}
            className='col-span-4'
          />
          <InfoItem
            legend={t('Rirekisho.PersonalInfos.age.legend')}
            value={t('Rirekisho.PersonalInfos.age.value', {
              dateOfBirth: Date.UTC(1990, 1, 11),
            })}
            className='col-start-5'
            style={{ definition: 'col-span-2', term: 'col-start-3 text-end' }}
          />
        </dl>

        <dl className='col-span-full row-span-4 grid grid-cols-subgrid grid-rows-subgrid'>
          <InfoItem
            legend={t('Rirekisho.PersonalInfos.adressFurigana.legend')}
            value={t('Rirekisho.PersonalInfos.adressFurigana.value')}
            ariaLabel={t('Rirekisho.PersonalInfos.adressFurigana.ariaLabel')}
            className='col-span-9'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.phonePerso.legend')}
            value={t('Rirekisho.PersonalInfos.phonePerso.value')}
            className='col-start-10'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.address.legend')}
            value={t.rich('Rirekisho.PersonalInfos.address.value', {
              br: () => <br />,
            })}
            className='col-span-9'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.mailPerso.legend')}
            value={t('Rirekisho.PersonalInfos.mailPerso.value')}
            className='col-start-10'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.contactFurigana.legend')}
            value={t('Rirekisho.PersonalInfos.contactFurigana.value')}
            ariaLabel={t('Rirekisho.PersonalInfos.contactFurigana.ariaLabel')}
            className='col-span-9'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.phonePro.legend')}
            value={t('Rirekisho.PersonalInfos.phonePro.value')}
            className='col-start-10'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.contact.legend')}
            value={t.rich('Rirekisho.PersonalInfos.contact.value', {
              br: () => <br />,
            })}
            className='col-span-9'
          />

          <InfoItem
            legend={t('Rirekisho.PersonalInfos.mailPro.legend')}
            value={t('Rirekisho.PersonalInfos.mailPro.value')}
            className='col-start-10'
          />
        </dl>
      </div>
    </div>
  );
}

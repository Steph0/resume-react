import { useTranslations } from 'next-intl';

export default function Rirekisho() {
  const t = useTranslations('');
  return (
    <section className='flex flex-col gap-1 bg-slate-50 dark:bg-slate-900'>
      <div className='grid-cols-13 grid grid-flow-col'>
        <div className='col-start-1 col-end-10'>
          <div className='flex place-content-between'>
            <h1 className='p-4 text-2xl'>{t('Rirekisho.Contact.title')}</h1>
            <p className='place-self-end p-2 text-xl'>
              {t('Rirekisho.Contact.date', { resumeDate: Date.now() })}
            </p>
          </div>
          <div
            role='table'
            className='col-span-10 grid grid-cols-subgrid border border-solid border-black'
          >
            <div role='row' className='col-span-10 grid grid-cols-subgrid'>
              <p
                role='rowheader'
                className='col-span-1 border border-solid border-black p-2 text-center'
              >
                {t('Rirekisho.Contact.nameFurigana.legend')}
              </p>
              <p
                role='cell'
                className='col-span-9 col-start-2 border border-solid border-black p-2'
              >
                {t('Rirekisho.Contact.nameFurigana.value')}
              </p>
            </div>
            <div role='row' className='col-span-10 grid grid-cols-subgrid'>
              <p
                role='rowheader'
                className='col-span-1 border border-solid border-black p-2 text-center'
              >
                {t('Rirekisho.Contact.name.legend')}
              </p>
              <p
                role='cell'
                className='col-span-9 col-start-2 border border-solid border-black p-4 text-2xl '
              >
                {t('Rirekisho.Contact.name.value')}
              </p>
            </div>
          </div>
        </div>

        <div className='col-start-10 col-end-13 bg-blue-400'>
          <p>photo</p>
          <p>photo</p>
          <p>photo</p>
        </div>
      </div>

      <div className='bg-orange-400'>
        <p>education</p>
        <p>education</p>
        <p>education</p>
      </div>

      <div className='bg-violet-400'>
        <p>qualification</p>
        <p>qualification</p>
        <p>qualification</p>
      </div>

      <div className='bg-red-400'>
        <p>special skills</p>
        <p>special skills</p>
        <p>special skills</p>
      </div>

      <div className='bg-gray-400'>
        <p>personal preferences</p>
        <p>personal preferences</p>
        <p>personal preferences</p>
      </div>
    </section>
  );
}

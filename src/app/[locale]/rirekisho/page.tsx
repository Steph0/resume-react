import { useTranslations } from 'next-intl'

export default function Rirekisho() {
  const t = useTranslations('')
  return (
    <section className='flex flex-col gap-1 bg-slate-50 dark:bg-slate-900'>
      <div className='grid grid-flow-col grid-cols-13'>
        <div className='col-start-1 col-end-10'>
          <div className='flex place-content-between'>
            <h1 className='p-4 text-2xl'>{t('Rirekisho.Contact.title')}</h1>
            <p className='p-2 text-xl place-self-end'>
              {t('Rirekisho.Contact.date',  {resumeDate: Date.now()})}
            </p>
          </div>
          <div role="table" className='border border-solid border-black grid grid-cols-subgrid col-span-10'>
            <div role="row" className='grid grid-cols-subgrid col-span-10'>
              <p role="rowheader" className='col-span-1 p-2 border border-solid border-black text-center'>
                {t('Rirekisho.Contact.nameFurigana.legend')}
              </p>
              <p role="cell" className='col-start-2 col-span-9 p-2 border border-solid border-black'>
                {t('Rirekisho.Contact.nameFurigana.value')}
              </p>
            </div>
            <div role="row" className='grid grid-cols-subgrid col-span-10'>
              <p role="rowheader" className='col-span-1 p-2 border border-solid border-black text-center'>
                {t('Rirekisho.Contact.name.legend')}
              </p>
              <p role="cell" className='col-start-2 col-span-9 p-4 text-2xl border border-solid border-black '>
                {t('Rirekisho.Contact.name.value')}
              </p>
            </div>
          </div>
        </div>
          
        <div className='bg-blue-400 col-start-10 col-end-13'>
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
  )
}

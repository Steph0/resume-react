import { useTranslations } from 'next-intl';
import { Cell } from './components/Cell';
import { RowHeader } from './components/RowHeader';
import { Table } from './components/Table';
import { Row } from './components/Row';

export default function Rirekisho() {
  const t = useTranslations('');
  return (
    <section className='flex flex-col gap-1 bg-slate-50 dark:bg-slate-900'>
      <div className='grid grid-flow-row grid-cols-12'>
        <div className='col-start-1 col-end-10'>
          <div className='flex place-content-between'>
            <h1 className='p-4 text-2xl'>{t('Rirekisho.Contact.title')}</h1>
            <p className='place-self-end p-2 text-xl'>
              {t('Rirekisho.Contact.date', { resumeDate: Date.now() })}
            </p>
          </div>
          <Table className='grid-cols-9'>
            <Row>
              <RowHeader className='col-span-1'>
                {t('Rirekisho.Contact.nameFurigana.legend')}
              </RowHeader>
              <Cell className='col-span-full col-start-2'>
                {t('Rirekisho.Contact.nameFurigana.value')}
              </Cell>
            </Row>
            <Row>
              <RowHeader className='col-span-1'>
                {t('Rirekisho.Contact.name.legend')}
              </RowHeader>
              <Cell className='col-span-full col-start-2 pb-4 pt-4 text-2xl'>
                {t('Rirekisho.Contact.name.value')}
              </Cell>
            </Row>
            <Row>
              <RowHeader className='col-span-1'>
                {t('Rirekisho.Contact.nationality.legend')}
              </RowHeader>
              <Cell className='col-start-2 col-end-5'>
                {t('Rirekisho.Contact.nationality.value')}
              </Cell>
              <RowHeader className='col-start-5 col-end-7'>
                {t('Rirekisho.Contact.age.legend')}
              </RowHeader>
              <Cell className='col-span-full col-start-7'>
                {t('Rirekisho.Contact.age.value', {
                  dateOfBirth: new Date('11-02-1990'),
                })}
              </Cell>
            </Row>
          </Table>
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

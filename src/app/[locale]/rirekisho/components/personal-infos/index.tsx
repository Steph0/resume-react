import { useTranslations } from 'next-intl';
import { Cell, Row, RowHeader, Table } from '../table/';
import { RirekishoHeader } from './RirekishoHeader';

export default function PersonalInfos() {
  const t = useTranslations('');
  return (
    <div className='grid grid-flow-row grid-cols-12'>
      <div className='col-start-1 col-end-10'>
        <RirekishoHeader
          title={t('Rirekisho.Contact.title')}
          date={t('Rirekisho.Contact.date', { resumeDate: Date.now() })}
        />
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
  );
}

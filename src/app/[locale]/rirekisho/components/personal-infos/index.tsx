import { useTranslations } from 'next-intl';
import { Cell, Row, RowHeader, Table } from '../table/';
import { RirekishoHeader } from './RirekishoHeader';

export default function PersonalInfos() {
  const t = useTranslations('');
  return (
    <div className='grid grid-flow-row grid-cols-12'>
      <div className='col-start-1 col-end-10'>
        <RirekishoHeader
          title={t('Rirekisho.PersonalInfos.title')}
          date={t('Rirekisho.PersonalInfos.date', { resumeDate: Date.now() })}
        />
        <Table className='grid-cols-9'>
          <Row>
            <RowHeader className='col-span-1'>
              {t('Rirekisho.PersonalInfos.nameFurigana.legend')}
            </RowHeader>
            <Cell className='col-span-full col-start-2'>
              {t('Rirekisho.PersonalInfos.nameFurigana.value')}
            </Cell>
          </Row>
          <Row>
            <RowHeader className='col-span-1'>
              {t('Rirekisho.PersonalInfos.name.legend')}
            </RowHeader>
            <Cell className='col-span-full col-start-2 pb-4 pt-4 text-2xl'>
              {t('Rirekisho.PersonalInfos.name.value')}
            </Cell>
          </Row>
          <Row>
            <RowHeader className='col-span-1'>
              {t('Rirekisho.PersonalInfos.nationality.legend')}
            </RowHeader>
            <Cell className='col-start-2 col-end-5'>
              {t('Rirekisho.PersonalInfos.nationality.value')}
            </Cell>
            <RowHeader className='col-start-5 col-end-7'>
              {t('Rirekisho.PersonalInfos.age.legend')}
            </RowHeader>
            <Cell className='col-span-full col-start-7'>
              {t('Rirekisho.PersonalInfos.age.value', {
                dateOfBirth: Date.UTC(1990, 1, 11),
              })}
            </Cell>
          </Row>
          <Row>
            <RowHeader className='col-span-1'>
              {t('Rirekisho.PersonalInfos.adressFurigana.legend')}
            </RowHeader>
            <Cell className='col-span-full col-start-2'>
              {t('Rirekisho.PersonalInfos.adressFurigana.value')}
            </Cell>
          </Row>
          <Row>
            <RowHeader className='col-span-1'>
              {t('Rirekisho.PersonalInfos.address.legend')}
            </RowHeader>
            <Cell className='col-span-full col-start-2'>
              {t.rich('Rirekisho.PersonalInfos.address.value', {
                br: () => <br />,
              })}
            </Cell>
          </Row>
          <Row>
            <RowHeader className='col-span-1'>
              {t('Rirekisho.PersonalInfos.contactFurigana.legend')}
            </RowHeader>
            <Cell className='col-span-full col-start-2'>
              {t('Rirekisho.PersonalInfos.contactFurigana.value')}
            </Cell>
          </Row>
          <Row>
            <RowHeader className='col-span-1'>
              {t('Rirekisho.PersonalInfos.contact.legend')}
            </RowHeader>
            <Cell className='col-span-full col-start-2'>
              {t.rich('Rirekisho.PersonalInfos.contact.value', {
                br: () => <br />,
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

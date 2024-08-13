import { useTranslations } from 'next-intl';
import { Table } from '../shared/table/Table';
import { Row } from '../shared/table/Row';
import { ColHeader } from '../shared/table/ColHeader';

export default function Education() {
  const t = useTranslations();
  return (
    <Table className='auto-cols-fr grid-cols-12'>
      <Row>
        <ColHeader className='col-span-2'>
          {t('Rirekisho.Education.headers.year')}
        </ColHeader>
        <ColHeader className='col-span-1'>
          {t('Rirekisho.Education.headers.month')}
        </ColHeader>
        <ColHeader className='col-span-full col-start-4'>
          {t('Rirekisho.Education.headers.history')}
        </ColHeader>
      </Row>
    </Table>
  );
}

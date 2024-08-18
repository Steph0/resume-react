import { useTranslations } from 'next-intl';
import { Table } from '../shared/table/Table';
import { Row } from '../shared/table/Row';
import { ColHeader } from '../shared/table/ColHeader';
import { Cell } from '../shared/table/Cell';

const ROWS_KEYS = [
  'baccalaureateStart',
  'baccalaureateEnd',
  'engineerStart',
  'engineerEnd',
] as const;

export default function Education() {
  const t = useTranslations();
  return (
    <Table className='auto-cols-fr grid-cols-12'>
      <div role='rowgroup' className='col-span-full grid grid-cols-subgrid'>
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
      </div>
      <div role='rowgroup' className='col-span-full grid grid-cols-subgrid'>
        {ROWS_KEYS.map((row) => (
          <Row key={row}>
            <Cell className='col-span-2 text-center'>
              {t(`Rirekisho.Education.rows.${row}.year`)}
            </Cell>
            <Cell className='col-span-1 text-center'>
              {t(`Rirekisho.Education.rows.${row}.month`)}
            </Cell>
            <Cell className='col-span-full col-start-4'>
              {t.rich(`Rirekisho.Education.rows.${row}.text`, {
                br: () => <br />,
              })}
            </Cell>
          </Row>
        ))}
      </div>
    </Table>
  );
}

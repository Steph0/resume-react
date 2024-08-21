import { useTranslations } from 'next-intl';
import { Table, Row, ColHeader, Cell, Caption } from '../shared/table';

const EDUCATION_ROWS_KEYS = [
  'baccalaureateStart',
  'baccalaureateEnd',
  'engineerStart',
  'engineerEnd',
] as const;

const WORK_ROWS_KEYS = ['worldlineStart'] as const;

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
      <Caption>{t('Rirekisho.Education.caption')}</Caption>
      <div role='rowgroup' className='col-span-full grid grid-cols-subgrid'>
        {EDUCATION_ROWS_KEYS.map((row) => (
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
        <Row ariaHidden>
          {/* Empty Rirekisho separation line */}
          <Cell ariaHidden className='col-span-2'></Cell>
          <Cell ariaHidden className='col-span-1'></Cell>
          <Cell ariaHidden className='col-span-full col-start-4'></Cell>
        </Row>
      </div>
      <Caption>{t('Rirekisho.Work.caption')}</Caption>
      <div role='rowgroup' className='col-span-full grid grid-cols-subgrid'>
        {WORK_ROWS_KEYS.map((row) => (
          <Row key={row}>
            <Cell className='col-span-2 text-center'>
              {t(`Rirekisho.Work.rows.${row}.year`)}
            </Cell>
            <Cell className='col-span-1 text-center'>
              {t(`Rirekisho.Work.rows.${row}.month`)}
            </Cell>
            <Cell className='col-span-full col-start-4'>
              {t.rich(`Rirekisho.Work.rows.${row}.text`, {
                br: () => <br />,
              })}
            </Cell>
          </Row>
        ))}
      </div>
    </Table>
  );
}

import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import PersonalInfos from '@/src/app/[locale]/rirekisho/components/personal-infos/index';

describe('PersonalInfos', () => {
  describe('Header', () => {
    test('it should render a header with global title and current date', async () => {
      // given
      // when
      render(<PersonalInfos />);

      // then
      expect(
        screen.getByRole('heading', { level: 1, name: 'Resume' }),
      ).toBeDefined();

      const time = screen.getByRole('time');
      expect(time).toBeDefined();
      expect(time.textContent).toBeDefined();
    });
  });

  describe('Basic identity infos', () => {
    const _getRow = (rowNumber: number) => {
      const basicIdentityTable = screen.getByRole('table');
      return within(basicIdentityTable).getAllByRole('row')[rowNumber];
    };

    test('it should render the furigana version of my name', async () => {
      // given
      const rowNumber = 0;
      const targetHeader = 'Furigana';
      const targetValue = '/';
      // when
      render(<PersonalInfos />);

      // then
      const row = _getRow(rowNumber);
      const header = within(row).getByRole('rowheader', { name: targetHeader });
      expect(header).toBeDefined();

      const value = within(row).getByRole('cell', { name: targetValue });
      expect(value).toBeDefined();
    });

    test('it should render my name', async () => {
      // given
      const rowNumber = 1;
      const targetHeader = 'Name';
      const targetValue = 'MEHAUT STEPHEN';
      // when
      render(<PersonalInfos />);

      // then
      const row = _getRow(rowNumber);
      const header = within(row).getByRole('rowheader', { name: targetHeader });
      expect(header).toBeDefined();

      const value = within(row).getByRole('cell', { name: targetValue });
      expect(value).toBeDefined();
    });

    test('it should render my nationality', async () => {
      // given
      const rowNumber = 2;
      const targetHeader = 'Nationality';
      const targetValue = 'French';
      // when
      render(<PersonalInfos />);

      // then
      const row = _getRow(rowNumber);
      const header = within(row).getByRole('rowheader', { name: targetHeader });
      expect(header).toBeDefined();

      const value = within(row).getByRole('cell', { name: targetValue });
      expect(value).toBeDefined();
    });

    test('it should render my date of birth', async () => {
      // given
      const rowNumber = 2;
      const targetHeader = 'Date of birth';
      const targetValue = 'February 11, 1990';
      // when
      render(<PersonalInfos />);

      // then
      const row = _getRow(rowNumber);
      const header = within(row).getByRole('rowheader', { name: targetHeader });
      expect(header).toBeDefined();

      const value = within(row).getByRole('cell', { name: targetValue });
      expect(value).toBeDefined();
    });

    test('it should render my address in furigana', async () => {
      // given
      const rowNumber = 3;
      const targetHeader = 'Furigana';
      const targetValue = '/';
      // when
      render(<PersonalInfos />);

      // then
      const row = _getRow(rowNumber);
      const header = within(row).getByRole('rowheader', { name: targetHeader });
      expect(header).toBeDefined();

      const value = within(row).getByRole('cell', { name: targetValue });
      expect(value).toBeDefined();
    });

    test('it should render my address', async () => {
      // given
      const rowNumber = 4;
      const targetHeader = 'Address';
      const targetValue = 'Please email me for this information';
      // when
      render(<PersonalInfos />);

      // then
      const row = _getRow(rowNumber);
      const header = within(row).getByRole('rowheader', { name: targetHeader });
      expect(header).toBeDefined();

      const value = within(row).getByRole('cell', { name: targetValue });
      expect(value).toBeDefined();
    });

    test('it should render my alternate address in furigana', async () => {
      // given
      const rowNumber = 5;
      const targetHeader = 'Furigana';
      const targetValue = 'Same as above';
      // when
      render(<PersonalInfos />);

      // then
      const row = _getRow(rowNumber);
      const header = within(row).getByRole('rowheader', { name: targetHeader });
      expect(header).toBeDefined();

      const value = within(row).getByRole('cell', { name: targetValue });
      expect(value).toBeDefined();
    });

    test('it should render my alternate address', async () => {
      // given
      const rowNumber = 6;
      const targetHeader = 'Contact';
      const targetValue = 'Same as above';
      // when
      render(<PersonalInfos />);

      // then
      const row = _getRow(rowNumber);
      const header = within(row).getByRole('rowheader', { name: targetHeader });
      expect(header).toBeDefined();

      const value = within(row).getByRole('cell', { name: targetValue });
      expect(value).toBeDefined();
    });
  });
});

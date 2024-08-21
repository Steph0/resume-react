import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Education from '@/src/app/[locale]/rirekisho/components/academic-and-work-history/index';

describe('Education and Work history', () => {
  describe('Headers', () => {
    test('it should render a table with expected headers in correct order', async () => {
      // given
      // when
      render(<Education />);

      // then
      const table = screen.getByRole('table');
      const headers = within(table).getAllByRole('rowgroup')[0];
      const columns = within(headers).getAllByRole('columnheader');
      expect(columns[0]).toBeDefined();
      expect(columns[0]).toHaveAccessibleName('Year');

      expect(columns[1]).toBeDefined();
      expect(columns[1]).toHaveAccessibleName('Month');

      expect(columns[2]).toBeDefined();
      expect(columns[2]).toHaveAccessibleName('Academic and work history');
    });
  });

  describe('Academic history', () => {
    test('it should contain an academic history caption', async () => {
      // given
      // when
      render(<Education />);

      // then
      const table = screen.getByRole('table');
      const caption = within(table).getAllByRole('caption')[0];
      expect(caption).toBeDefined();
      expect(caption).toHaveTextContent('Academic history');
    });

    describe('Rows', () => {
      test('it should contains rows with three columns', async () => {
        // given
        // when
        render(<Education />);

        // then
        const table = screen.getByRole('table');
        const headers = within(table).getAllByRole('rowgroup')[1];
        const rows = within(headers).getAllByRole('row');
        expect(rows).to.have.lengthOf(4);
        rows.forEach((row) => {
          const cells = within(row).getAllByRole('cell');
          expect(cells).to.have.lengthOf(3);
        });
      });
    });
  });

  describe('Work history', () => {
    test('it should contain a work history caption', async () => {
      // given
      // when
      render(<Education />);

      // then
      const table = screen.getByRole('table');
      const caption = within(table).getAllByRole('caption')[1];
      expect(caption).toBeDefined();
      expect(caption).toHaveTextContent('Work history');
    });

    describe('Rows', () => {
      test('it should contains rows with three columns', async () => {
        // given
        // when
        render(<Education />);

        // then
        const table = screen.getByRole('table');
        const headers = within(table).getAllByRole('rowgroup')[2];
        const rows = within(headers).getAllByRole('row');
        expect(rows).to.have.lengthOf(1);
        rows.forEach((row) => {
          const cells = within(row).getAllByRole('cell');
          expect(cells).to.have.lengthOf(3);
        });
      });
    });
  });
});

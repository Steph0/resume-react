import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Education from '@/src/app/[locale]/rirekisho/components/education/index';

describe('Education', () => {
  describe('Colum headers', () => {
    test('it should render a table with expected headers in correct order', async () => {
      // given
      // when
      render(<Education />);

      // then
      const table = screen.getByRole('table');
      const columns = within(table).getAllByRole('columnheader');
      expect(columns[0]).toBeDefined();
      expect(columns[0]).toHaveAccessibleName('Year');

      expect(columns[1]).toBeDefined();
      expect(columns[1]).toHaveAccessibleName('Month');

      expect(columns[2]).toBeDefined();
      expect(columns[2]).toHaveAccessibleName('Educational and work history');
    });
  });
});

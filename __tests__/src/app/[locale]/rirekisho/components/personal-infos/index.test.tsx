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
    test('it should render the furigana version of my name', async () => {
      // given
      const targetLegend = 'Furigana';
      const targetAriaLabel = 'Name in Furigana';
      const targetValue = '/';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('term', { name: targetAriaLabel });
      expect(legend).toHaveTextContent(targetLegend);

      const value = screen.getByRole('definition', { name: targetAriaLabel });
      expect(value).toHaveTextContent(targetValue);
    });

    test('it should render my name', async () => {
      // given
      const targetLegend = 'Name';
      const targetValue = 'MEHAUT STEPHEN';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my gender', async () => {
      // given
      const targetLegend = 'Gender';
      const targetValue = 'H・F';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should indicate my applicable gender', async () => {
      // given
      const targetLegend = 'My gender is:';
      const targetValue = 'H';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('img', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my nationality', async () => {
      // given
      const targetLegend = 'Nationality';
      const targetValue = 'French';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my date of birth', async () => {
      // given
      const targetLegend = 'Date of birth';
      const targetValue = 'February 11, 1990';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my address in furigana', async () => {
      // given
      const targetLegend = 'Furigana';
      const targetAriaLabel = 'Address in Furigana';
      const targetValue = '/';

      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('term', { name: targetAriaLabel });
      expect(legend).toHaveTextContent(targetLegend);

      const value = screen.getByRole('definition', { name: targetAriaLabel });
      expect(value).toHaveTextContent(targetValue);
    });

    test('it should render my address', async () => {
      // given
      const targetLegend = 'Address';
      const targetValue = 'Please email me for this information';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my alternate address in furigana', async () => {
      // given
      const targetLegend = 'Furigana';
      const targetAriaLabel = 'Contact in Furigana';
      const targetValue = 'Same as above';

      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('term', { name: targetAriaLabel });
      expect(legend).toHaveTextContent(targetLegend);

      const value = screen.getByRole('definition', { name: targetAriaLabel });
      expect(value).toHaveTextContent(targetValue);
    });

    test('it should render my alternate address', async () => {
      // given
      const targetLegend = 'Contact';
      const targetValue = 'Same as above';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my personal phone', async () => {
      // given
      const targetLegend = 'Phone';
      const targetValue = 'Please email me for this information';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my personal enail', async () => {
      // given
      const targetLegend = 'Email';
      const targetValue = 'stephen.mehaut@gmail.com';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my professional phone', async () => {
      // given
      const targetLegend = 'Phone pro';
      const targetValue = '/';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });

    test('it should render my professional enail', async () => {
      // given
      const targetLegend = 'Email pro';
      const targetValue = '/';
      // when
      render(<PersonalInfos />);

      // then
      const legend = screen.getByRole('definition', { name: targetLegend });
      expect(legend).toBeDefined();
      expect(legend).toHaveTextContent(targetValue);
    });
  });
});

import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RirekishoHeader } from '@/src/app/[locale]/rirekisho/components/personal-infos/RirekishoHeader';

describe('RirekishoHeader', () => {
  test('it should render a header title and current date', async () => {
    // given
    const title = 'hello';
    const date = '11-02-1990';
    const dateTime = '11-02-1990';

    // when
    render(<RirekishoHeader title={title} date={date} dateTime={dateTime} />);

    // then
    expect(
      screen.getByRole('heading', { level: 1, name: title }),
    ).toBeDefined();
    const time = screen.getByRole('time');
    expect(time).toBeDefined();
    expect(time.textContent).toStrictEqual(date);
    expect(time.dateTime).toStrictEqual(dateTime);
  });
});

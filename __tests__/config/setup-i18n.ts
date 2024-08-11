import { beforeAll, Mock, vi } from 'vitest';
import { createTranslator, useTranslations } from 'next-intl';

vi.mock('next-intl', async () => {
  const actual = (await vi.importActual('next-intl')) as any;

  return {
    ...actual,
    useTranslations: vi.fn(),
  };
});

beforeAll(async () => {
  const translate = createTranslator({
    locale: 'en',
    messages: (await import('@/messages/en.json')).default,
  });

  (useTranslations as Mock).mockImplementation(() => translate);
});

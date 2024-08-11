'use client';
import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import GithubIcon from '../../icons/github';
import LangSwitcher from './LangSwitcher';
import ThemeSwitch from './ThemeSwitch';
interface Props {
  locale: string;
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations();
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <nav className='mr-10 inline-flex gap-5 text-button'>
        <Link lang={locale} href={`/`}>
          &lt;back_to_roots /&gt;
        </Link>
      </nav>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={'/rirekisho'}>
            {t('Header.rirekisho')}
          </Link>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href='https://github.com/Steph0/'
          target='_blank'
          aria-label={t('Header.github_portfolio_btn')}
          title={t('Header.github_portfolio_btn')}
        >
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

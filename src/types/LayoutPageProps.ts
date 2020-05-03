import { i18n } from 'i18next';
import { NextRouter } from 'next/router';
import { HeadProps } from '../components/Head';

import UniversalCookiesManager from '../utils/UniversalCookiesManager';
import { Theme } from './data/Theme';
import { StaticProps } from './StaticProps';
import { UserSemiPersistentSession } from './UserSemiPersistentSession';

/**
 * Page props provided to pages using the PageLayout component
 *
 * @ts Extends StaticProps by default
 */
export declare type LayoutPageProps<E extends StaticProps = StaticProps> = {
  cookiesManager: UniversalCookiesManager;
  i18nextInstance: i18n;
  iframeReferrer?: string; // Only available on the browser side
  isInIframe?: boolean; // Only available on the browser side
  headProps?: HeadProps;
  router: NextRouter;
  theme: Theme;
  pageName: string;
  userSession?: UserSemiPersistentSession; // Only available on the browser side
} & E;

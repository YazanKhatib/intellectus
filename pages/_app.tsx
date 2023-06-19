import type { AppProps } from 'next/app';
import '../src/components/card/card.css';
import '../src/containers/Process/process.css';

import '../src/assets/css/main.css';
import '../src/assets/css/system.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;

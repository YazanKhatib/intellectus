import * as React from 'react';
import NextHead from 'next/head';

const Head: React.FC = () => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Intellectus</title>
            <meta property="og:site_name" content="intellectus" />
            {/* <meta property="og:title" content={t('site_title')} />
      <meta property="og:description" content={t('site_description')} /> */}
            <meta property="og:image" itemProp="image" content="/images/logo.png" />
            <meta property="og:type" content="website" />
            {/* <meta name="keywords" content={t('site_keywords')} />
      <meta name="description" content={t('site_description')} /> */}
            {/* <!-- <meta name="url" content="https://www.intellectus.com"> --> */}
            <meta name="app-name" content="intellectus" />
            <link rel="icon" href="/favicon.png" />
        </NextHead>
    );
};
export default Head;

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
          <br />
          <a href="#duc-truong-hoang" className={styles.linkCustom}>
            Duc-Truong Hoang
          </a>,&nbsp;
          <a href="#minh-le" className={styles.linkCustom}>
            Minh Le
          </a>,&nbsp;
          <a href="#trong-nghia-ha-le" className={styles.linkCustom}>
            Trong-Nghia Ha Le
          </a>,&nbsp;
          <a href="#tung-lam-pham" className={styles.linkCustom}>
            Tung-Lam Pham
          </a>,&nbsp;
          <a href="#huu-phuoc-le" className={styles.linkCustom}>
            Huu-Phuoc Le
          </a>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

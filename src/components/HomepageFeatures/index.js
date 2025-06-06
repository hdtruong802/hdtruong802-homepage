import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FaFacebook, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const FeatureList = [
  {
    title: 'Duc-Truong Hoang',
    Img: '/img/HDT.jpg',
    description: (
      <>
        <p> AI Intern @ {' '}
            <a href="https://fptsoftware.com/" target="_blank" rel="noopener noreferrer">
              FPT Software
            </a>
          <br />
          Student @ {' '}
          <a href="https://hcmute.edu.vn/" target="_blank" rel="noopener noreferrer">
          HCMUTE
          </a>
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: 12 }}>
          <a href="https://www.facebook.com/dtruong802/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#4267B2" />
          </a>
          <a href="https://github.com/hdtruong802" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hdt802/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0A66C2" />
          </a>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            <FaGlobe size={24} />
          </a>
        </div>
      </>
    ),
  },

  {
    title: 'Minh Le',
    Img: '/img/temp.jpg',
    description: (
      <>
        {/* <p> AI Intern @ {' '}
            <a href="https://fptsoftware.com/" target="_blank" rel="noopener noreferrer">
              FPT Software
            </a>
          <br />
          Student @ {' '}
          <a href="https://hcmute.edu.vn/" target="_blank" rel="noopener noreferrer">
          HCMUTE
          </a>
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: 12 }}>
          <a href="https://www.facebook.com/dtruong802/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#4267B2" />
          </a>
          <a href="https://github.com/hdtruong802" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hdt802/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0A66C2" />
          </a>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            <FaGlobe size={24} />
          </a>
        </div> */}
      </>
    ),
  },
  {
    title: 'Trong-Nghia Ha Le',
    Img: '/img/temp.jpg',
    description: (
      <>
        <p> Student @ {' '}
          <a href="https://hust.edu.vn/" target="_blank" rel="noopener noreferrer">
          HUST
          </a>
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: 12 }}>
          <a href="https://www.facebook.com/trongnghia.hale.3" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#4267B2" />
          </a>
        </div>
        
      </>
    ),
  },
  {
    title: 'Tung-Lam Pham',
    Img: '/img/PTL.jpg',
    description: (
      <>
        <p> Student @ {' '}
          <a href="https://hust.edu.vn/" target="_blank" rel="noopener noreferrer">
          HUST
          </a>
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: 12 }}>
          <a href="https://www.facebook.com/uJi8t.k20vc" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#4267B2" />
          </a>
          <a href="https://github.com/lampt224321" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </>
    ),
  },
  {
    title: 'Huu-Phuoc Le',
    Img: '/img/temp.jpg',
    description: (
      <>
        <p> Student @ {' '}
          <a href="https://hcmut.edu.vn/en/" target="_blank" rel="noopener noreferrer">
          HCMUT
          </a>
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: 12 }}>
          <a href="https://www.facebook.com/plethegenuine1908/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#4267B2" />
          </a>
          <a href="https://github.com/cherryboi1908" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/phuoclehuu1908/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0A66C2" />
          </a>
        </div>
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  const id = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={clsx('col col--4')} id={id}>
      <div className="text--center">
        {Img && (
          <img
            src={useBaseUrl(Img)}
            alt={title}
            className={styles.featureSvg}
            style={{
              width: 250,
              height: 250,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #ccc',
              marginBottom: 12,
            }}
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.slice(0, 3).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row" style={{ marginTop: '2rem', justifyContent: 'center' }}>
          {FeatureList.slice(3).map((props, idx) => (
            <Feature key={idx + 3} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

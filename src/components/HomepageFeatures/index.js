import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  const profile = {
    name: 'Duc-Truong Hoang',
    avatar: '/img/HDT.jpg',
    about: "I am deeply passionate about Artificial Intelligence (AI) and Deep Learning, with a strong interest in developing intelligent systems that can understand and interpret complex data. My goal is to pursue a research-oriented career focused on advancing machine learning methods and their real-world applications. Through this work, I aspire to contribute to innovative AI solutions, address fundamental challenges in data-driven modeling, and create technologies that deliver meaningful impact.",
    education: [
      {
        degree: 'Bachelor of Engineering, Electronics and Communications Engineering Technology',
        year: '2020 - 2025',
        school: 'Ho Chi Minh City University of Technology and Engineering (HCMUTE)',
        schoolLink: 'https://hcmute.edu.vn',
        descriptions: [
          <span key="1">Reasearch Assistant at UTE-AI Lab</span>,
          <span key="2">
            Key Member of {' '}
            <a href="https://www.facebook.com/hcmute.iac" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Innovation and Application Club
            </a>
          </span>
        ]
      }
    ],
    workExperience: [
      {
        position: 'AI Engineer Intern',
        company: 'FPT Software',
        companyLink: 'https://fptsoftware.com/',
        year: 'April 2025 - July 2025',
        description: 'Worked as part of a cross-functional engineering team, contributing to the design and development ofseveral Proof-of-Concept (POC) solutions for real-world enterprise projects, particularly focused on in-store computer vision applications.'
      },
      {
        position: 'Football Analyst - Data Annotation',
        company: 'BEPRO',
        companyLink: 'https://www.bepro.ai/',
        year: 'September 2024 - March 2025',
        description: 'Analyzed match situations from football video footage, identifying key events such as passes, shots, goals, fouls, and tactical movements. Annotated and structured large-scale datasets to enable AI models to accurately extract and evaluate player and team performance metrics.',
      }
    ],
    licenses: [
      {
        title: 'Samsung Innovation Campus - Artificial Intelligence',
        issue: 'Samsung Electronics, August 2024.',
        image: 'img/licenses/samsung.jpg'
      }
    ],
    awards: [
      {
        title: <>1<sup>st</sup> Place - Programming Competition on Autonomous Vehicle with Image Processing and Artificial Intelligence</>,
        issue: 'Ho Chi Minh City University of Technology and Education, February 2022.',
        image: 'img/awards/xe-tu-hanh-2022.jpg'
      },
      {
        title: 'Finalist - AI Challenge Ho Chi Minh City, theme: "Event Retrieval from Visual Data"',
        issue: 'The Center of Science and Technology Development for Youth, October 2023.',
        image: 'img/awards/ai-challenge-2023.jpg'
      }
    ],
    // projects: [
    //   {
    //     title: 'Gaze2Poster',
    //     link: 'https://github.com/hdtruong802/Gaze2Poster',
    //     description: 'A system to estimate human gaze direction and predict the target poster.'
    //   },
    //   {
    //     title: 'Face Recognition Attendance System',
    //     link: 'https://github.com/hdtruong802/FaceRec-Attendance',
    //     description: 'A smart attendance system based on face recognition using OpenCV and Python.'
    //   }
    // ],
    contacts: {
      facebook: 'https://www.facebook.com/dtruong802/',
      github: 'https://github.com/hdtruong802',
      linkedin: 'https://www.linkedin.com/in/hdt802/',
      email: 'mailto:ductruong802@gmail.com'
    }
  };

  return (
    <section className={styles.features}>
      <div className="container">
      <div className="text--center">
        <img src={useBaseUrl(profile.avatar)} alt={profile.name} className={styles.avatar} />
        <Heading as="h2">{profile.name}</Heading>
        <p>
          AI Engineer 
          | AI Researcher 
          {/* @{' '}
          <a href="https://www.linkedin.com/company/aima-research/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.link}>
            AIMA Research Lab 
          </a>{' '} */}
        </p>
        <div className={styles.iconLinks}>
          {Object.entries(profile.contacts).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer">
              {key === 'facebook' && <FaFacebook size={28} />}
              {key === 'github' && <FaGithub size={28} />}
              {key === 'linkedin' && <FaLinkedin size={28} />}
              {key === 'email' && <FaEnvelope size={28} />}
            </a>
          ))}
        </div>
      </div>

        <div className={styles.section}>
          <Heading as="h2">About Me</Heading>
          <p>{profile.about}</p>
        </div>

        <div className={styles.section}>
          <Heading as="h2">Education</Heading>
          <ul>
            {profile.education.map((edu, idx) => (
              <li key={idx}>
                <strong>{edu.degree} <span className={styles.year}>({edu.year})</span></strong><br />
                <a href={edu.schoolLink} target="_blank" rel="noopener noreferrer" className={styles.link}>{edu.school}</a>
                <ul>
                  {edu.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <Heading as="h2">Work Experience</Heading>
          <ul>
            {profile.workExperience.map((work, idx) => (
              <li key={idx}>
                <strong>
                  {work.position} @{' '}
                  <a href={work.companyLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {work.company}
                  </a>{' '}
                  <span className={styles.year}>({work.year})</span>
                </strong>
                <ul>
                  <li>{work.description}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <Heading as="h2">Licenses & Certifications</Heading>
          <ul>
            {profile.licenses.map((license, idx) => (
              <li key={idx}>
                <strong>{license.title}</strong><br />
                Issued by {license.issue}
                <div className={styles.licenseImage}>
                <img
                  src={useBaseUrl(license.image)}
                  alt={`${license.title} certificate`}
                  className={styles.certificate}
                />
                </div>
              </li>
            ))}
          </ul>
        </div>


        <div className={styles.section}>
          <Heading as="h2">Honors & Awards</Heading>
          <ul>
            {profile.awards.map((award, idx) => (
              <li key={idx}>
                <strong>{award.title}</strong><br />
                Issued by {award.issue}
                <div className={styles.awardImage}>
                <img
                  src={useBaseUrl(award.image)}
                  alt={`${award.title} certificate`}
                  className={styles.certificate}
                />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className={styles.section}>
          <Heading as="h3">Projects</Heading>
          <ul>
            {profile.projects.map((project, idx) => (
              <li key={idx}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>{project.title}</a>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </div> */}

      </div>
    </section>
  );
}

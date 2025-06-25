import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  const profile = {
    name: 'Duc-Truong Hoang',
    avatar: '/img/HDT.jpg',
    about: "I'm passionate about Artificial Intelligence (AI), Computer Vision, and Deep Learning. With this passion, I aspire to pursue a research career in AI. My goal is to contribute to the development of cutting-edge technologies, solve complex challenges, and create meaningful AI applications for the future.",
    education: [
      {
        degree: 'Bachelor of Electronics and Telecommunications Engineering Technology',
        year: '2020 - 2025',
        school: 'Ho Chi Minh City University of Technology and Education (HCMUTE)',
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
        position: 'AI Intern',
        company: 'FPT Software',
        companyLink: 'https://fptsoftware.com/',
        year: 'April 2025 - Present',
        description: 'Participated in the development and implementation of AI models, focusing on Computer Vision, for real-world projects.'
      },
      {
        position: 'Football Analyst',
        company: 'BEPRO',
        companyLink: 'https://www.bepro.ai/',
        year: 'September 2024 - March 2025',
        description: 'Analyze football matches in detail and annotate specific events (such as passes, shots, tackles, etc.) to create datasets for AI processing to produce technical statistics for the match and individual players.'
      }
    ],
    awards: [
      {
        title: 'The first prize in the 2nd programming competition on "Autonomous Vehicle with Image Processing and Artificial Intelligence"',
        issue: 'Ho Chi Minh City University of Technology and Education, February 2022.',
      },
      {
        title: 'The final round of the 4th Artificial Intelligence (AI) Challenge Ho Chi Minh City 2023, theme: "Event Retrieval from Visual Data"',
        issue: 'The Center of Science and Technology Development for Youth, October 2023.',
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
          AI Intern @{' '}
          <a href="https://fpt.com.vn" target="_blank" rel="noopener noreferrer" className={styles.link}>
            FPT Software
          </a>{' '}
          | Student @{' '}
          <a href="https://hcmute.edu.vn" target="_blank" rel="noopener noreferrer" className={styles.link}>
            HCMUTE
          </a>
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
          <Heading as="h2">Awards</Heading>
          <ul>
            {profile.awards.map((award, idx) => (
              <li key={idx}>
                <strong>{award.title}</strong><br />
                Issued by {award.issue}
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

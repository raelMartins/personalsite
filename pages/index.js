import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import TypeIt from 'typeit-react';
import styles from './style.module.scss';

const Home = (props) => {
  const personalProjects = props.personalProjects.map((el) => {
    const projectTechnologies = el.technologies.map((tech) => (
      <span key={tech}>
        <Image src={`/svgs/${tech}.svg`} width={15} height={15} alt={tech} />
      </span>
    ));
    return (
      <div className={styles.projectCard} key={el.id}>
        <div className={styles.projectImage}>
          <Image
            src={`/images/${el.image}.PNG`}
            width={750}
            height={400}
            alt=""
            // placeholder="blur"
            // blurDataURL={el.blurImage}
          />
        </div>
        <div className={styles.projectInfo}>
          <h4>{el.name}</h4>
          <p>{el.description}</p>
          <div className={styles.lower}>
            <a href={el.url} target="_blank">
              <button>View</button>
            </a>
            <div>
              <h5>Technologies</h5>
              {projectTechnologies}
            </div>
          </div>
        </div>
      </div>
    );
  });

  const professionalProjects = props.professionalProjects.map((el) => {
    const projectTechnologies = el.technologies.map((tech) => (
      <span key={tech}>
        <Image src={`/svgs/${tech}.svg`} width={15} height={15} alt={tech} />
      </span>
    ));
    return (
      <div className={styles.projectCard} key={el.id}>
        <div className={styles.projectImage}>
          <Image
            src={`/images/${el.image}.PNG`}
            width={750}
            height={400}
            alt=""
            // placeholder="blur"
            // blurDataURL={el.blurImage}
          />
        </div>
        <div className={styles.projectInfo}>
          <h4>{el.name}</h4>
          <p>{el.description}</p>
          <div className={styles.lower}>
            <a href={el.url} target="_blank">
              <button>View</button>
            </a>
            <div>
              <h5>Technologies</h5>
              {projectTechnologies}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className={styles.top} id="top">
        <div className={styles.topText}>
          <TypeIt
            element={'h1'}
            options={{
              strings: [
                'Hey there...',
                'My name is Martins...',
                'and i build things on the internet! '
              ],
              speed: 35,
              nextStringDelay: 1600,
              waitUntilVisible: true
            }}
          />
        </div>
        <div className={styles.viewProjects}>
          <span className={styles.downArrow}>
            <Link href="/#bottom">
              <img src="/svgs/down-arrow.svg" alt="View Projects" />
            </Link>
          </span>
        </div>
      </div>
      <div className={styles.bottom} id="bottom">
        <h4>PROFESSIONAL</h4>
        <div className={styles.bottomContent}>{professionalProjects}</div>

        <h4>PERSONAL</h4>
        <div className={styles.bottomContent}>{personalProjects}</div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res1 = await fs.promises.readFile(
    `./project-data/personal-projects.json`,
    'utf-8'
  );
  const res2 = await fs.promises.readFile(
    `./project-data/professional-projects.json`,
    'utf-8'
  );
  const personalProjects = JSON.parse(res1);
  const professionalProjects = JSON.parse(res2);
  return {
    props: {
      personalProjects,
      professionalProjects
    }
  };
};

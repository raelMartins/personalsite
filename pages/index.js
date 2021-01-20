import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import TypeIt from 'typeit-react';
import styles from './style.module.scss';

const Home = (props) => {
  const projects = props.data.map((el) => {
    const projectTechnologies = el.technologies.map((tech) => (
      <span key={tech}>
        <Image src={`/svgs/${tech}.svg`} width={40} height={40} alt={tech} />
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
          />
        </div>
        <div className={styles.projectInfo}>
          <h4>{el.name}</h4>
          <p>{el.description}</p>
          <h5>Technologies</h5>
          {projectTechnologies}
          <div style={{ marginTop: 25, marginLeft: 0 }}>
            <a href={el.url} target="_blank">
              <button>View</button>
            </a>
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
        <Link href="/#bottom">
          <a className={styles.downArrow}>
            <Image
              src="/svgs/down-arrow.svg"
              width={30}
              height={30}
              alt="Check Projects"
            />
          </a>
        </Link>
      </div>
      <div className={styles.bottom} id="bottom">
        <div className={styles.bottomContent}>{projects}</div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fs.promises.readFile(`./project-data/data.json`, 'utf-8');
  const data = JSON.parse(res);
  return {
    props: {
      data
    }
  };
};

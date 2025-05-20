import Main from '../components/Main/Main';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Main />
      </Section>
      <Projects />
      <Technologies />
      <About />
    </Layout>
  );
};

export default Home;

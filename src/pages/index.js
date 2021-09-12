import Hero from '../components/Hero/Hero';
import Competitions from '../components/Competitions/Competitions';
import Contacts from '../components/Contacts/Contacts';
import Results from '../components/Results/Results';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Competitions />
      <Contacts />
      <Results />
    </Layout>
  );
};

export default Home;

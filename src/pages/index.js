import Hero from '../components/Hero/Hero';
import Competitions from '../components/Competitions/Competitions';
import Contacts from '../components/Contacts/Contacts';
import Results from '../components/Results/Results';
import { Layout } from '../layout/Layout';
import Users from '../components/Users/Users';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Competitions />
      <Users />
      <Contacts />
      <Results />
    </Layout>
  );
};

export default Home;

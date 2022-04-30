import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { useRef } from "react";


const Home = () => {
  const projectRef = useRef()

  const learnMoreHandler = () => {
    console.log("hi from index");
    projectRef.current.scrollIntoView()
  }

  return (
    <Layout>
      <Section grid>
        <Hero onLearnMore={learnMoreHandler}/>
        <BgAnimation />
      </Section>
      <Projects refProp={projectRef}/>
      <Technologies />
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;

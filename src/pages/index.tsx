import { Experience, Hero, Skills } from "@/components";
import { MainLayout } from "@/layouts";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Skills />
      <Experience />
    </MainLayout>
  );
};

export default Home;

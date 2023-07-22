import { Hero, Skills } from "@/components";
import { MainLayout } from "@/layouts";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Skills />
    </MainLayout>
  );
};

export default Home;

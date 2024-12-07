import Banner from "@/components/shared/banner";
import Services from "@/components/shared/services";
import Container from "@/components/ui/container";

const Home = () => {
  return (
    <Container className="max-w-screen py-10 px-0">
      <Banner />
      <Services />
    </Container>
  );
};

export default Home;

import GeneratorForm from "../../components/GeneratorForm";
import Password from "../../components/Password";
import { Container } from "./styles";

const Home = () => {

  return(
    <Container>
      <div className="generator">
        <h1>Password Generator</h1>
        <Password />
        <GeneratorForm />
      </div>
    </Container>
  );

}

export default Home;
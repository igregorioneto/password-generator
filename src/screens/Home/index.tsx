import GeneratorForm from "../../components/GeneratorForm";
import Password from "../../components/Password";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Container } from "./styles";

const Home = () => {
  const {randomPassword, strengthValue} = useAppSelector((state) => state.passwordGenerator);

  return(
    <Container>
      <div className="generator">
        <h1>Password Generator</h1>
        <Password 
          randomPassword={randomPassword}
        />
        <GeneratorForm 
          strengthValue={strengthValue}
        />
      </div>
    </Container>
  );

}

export default Home;
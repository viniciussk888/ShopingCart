import React,{useCallback} from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Input, HeaderContainer, Button } from "./styles";

const Login: React.FC = () => {
    const navigation = useNavigation();

  const navigateToHome = useCallback(()=>{
    navigation.reset({
        routes: [{
          name: 'Tabs'
        }]
      })
  },[navigation])

  return (
    <Container>
      <HeaderContainer>
        <Text>Login</Text>
      </HeaderContainer>

      <Input placeholder="Email" />
      <Input secureTextEntry={true} placeholder="Senha" />

      <Button onPress={navigateToHome}>
        <Text style={{ color: "#fff" }}>ENTRAR</Text>
      </Button>
    </Container>
  );
};

export default Login;

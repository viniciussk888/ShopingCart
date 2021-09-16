import React, { useState, useCallback } from "react";
import { Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Input, HeaderContainer, Button } from "./styles";
import LottieView from "lottie-react-native";
import fruit from "../../utils/fruit.json";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const navigateToHome = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    navigation.reset({
      routes: [
        {
          name: "Tabs",
        },
      ],
    });
  }, [navigation]);

  return (
    <Container>
      <HeaderContainer>
        <LottieView
          source={fruit}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
          autoPlay
          loop
        />
      </HeaderContainer>

      <Input placeholder="Email" />
      <Input secureTextEntry={true} placeholder="Senha" />

      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Button onPress={navigateToHome}>
          <Text style={{ color: "#fff" }}>ENTRAR</Text>
        </Button>
      )}
    </Container>
  );
};

export default Login;

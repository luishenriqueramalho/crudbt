import React from "react";

import Logo from "../../assets/logo.png";
import { Button, Text, View } from "react-native";
import { styled } from "styled-components";
import { useNavigation } from "@react-navigation/native";

const ImgLogo = styled.Image`
  margin-top: 100px;
  width: 210px;
  height: 173px;
`;

export default function SucessCadastro() {
  const navigation = useNavigation();

  const Title = styled.Text`
    color: #18bf69;
    font-size: 30px;
    font-weight: bold;
    margin-top: 70px;
  `;

  const SubTitle = styled.Text`
    color: black;
    font-size: 20px;
    margin-top: 30px;
  `;

  const Button = styled.TouchableOpacity`
    margin-top: 200px;
    margin-horizontal: 50px;
    background-color: #f57336;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    width: 300px;
    height: 50px;
  `;

  const TitleButton = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: white;
  `;

  return (
    <>
      <View style={{ alignItems: "center" }}>
        <ImgLogo source={Logo} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Title>Bem vindo!</Title>
        <SubTitle>Seu cadastro foi realizado com sucesso.</SubTitle>
        <Button onPress={() => navigation.navigate("Home")}>
          <TitleButton>Ok</TitleButton>
        </Button>
      </View>
    </>
  );
}

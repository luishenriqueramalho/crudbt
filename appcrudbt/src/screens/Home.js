import { SafeAreaView, Text, View } from "react-native";
import { styled } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import api from "../config/api";
import Logo from "../../assets/logo.png";

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const ClickOption = styled.TouchableOpacity`
  width: 70%;
  background-color: ${({ showBlue }) => (showBlue ? "#033D77" : "#F57336")};
  padding: 10px;
  margin-top: 50px;
`;

const Title = styled.Text`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const TitleButton = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const ImgLogo = styled.Image`
  margin-top: 100px;
  width: 210px;
  height: 173px;
`;

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView />
      <Container>
        <Title>Crud BT</Title>
        <ClickOption
          onPress={() => navigation.navigate("ListarAtletas")}
          activeOpacity={0.7}
        >
          <TitleButton>Listar Atletas</TitleButton>
        </ClickOption>
        <ClickOption
          onPress={() => navigation.navigate("ListarArenas")}
          activeOpacity={0.7}
        >
          <TitleButton>Listar Arenas</TitleButton>
        </ClickOption>
        <ClickOption
          onPress={() => navigation.navigate("CadastrarAtletas")}
          activeOpacity={0.7}
          showBlue
        >
          <TitleButton>Cadastrar Atletas</TitleButton>
        </ClickOption>
        <ClickOption
          onPress={() => navigation.navigate("CadastrarArenas")}
          activeOpacity={0.7}
          showBlue
        >
          <TitleButton>Cadastrar Arenas</TitleButton>
        </ClickOption>
        <View
          style={{
            alignItems: "center",

            width: "100%",
          }}
        >
          <ImgLogo source={Logo} />
        </View>
      </Container>
    </>
  );
}

import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styled } from "styled-components";
import BackButton from "../../assets/backButton.png";
import { useNavigation } from "@react-navigation/native";

const HeaderBar = styled.View`
  flex-direction: row;
  margin-horizontal: 24px;
`;
const Back = styled.Image`
  width: 20px;
  height: 20px;
`;

const Conteiner = styled.View`
  align-items: center;
`;
const Card = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-horizontal: 24px;
  background-color: red;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const SubTitle = styled.Text`
  font-size: 12px;
  color: white;
  margin-top: 10px;
`;

export default function ListarArenas() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView />
      <HeaderBar>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Back source={BackButton} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Lista de Arenas
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text></Text>
        </View>
      </HeaderBar>
      <Conteiner>
        <Card>
          <View
            style={{
              width: "20%",
              backgroundColor: "#033D77",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Title style={{ textAlign: "center" }}>2 anos</Title>
            <SubTitle style={{ textAlign: "center" }}>7 quadras</SubTitle>
            <SubTitle style={{ textAlign: "center" }}>Aberto</SubTitle>
          </View>
          <View
            style={{ width: "80%", backgroundColor: "#F57336", padding: 10 }}
          >
            <Title>Arena RedPlay</Title>
            <SubTitle>Número de Atletas: 120</SubTitle>
            <SubTitle>Validade: 17/09/2024</SubTitle>
            <SubTitle>Endereço: Rua das Alamedas, 120 </SubTitle>
            <SubTitle>Bairro: Jardins</SubTitle>
            <SubTitle>Cidade: São Gonçalo do Amarante</SubTitle>
          </View>
        </Card>
      </Conteiner>
    </>
  );
}

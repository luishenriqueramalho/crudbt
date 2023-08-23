import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styled } from "styled-components";

import BackButton from "../../assets/backButton.png";
import { useNavigation } from "@react-navigation/native";
import api from "../config/api";

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

const Card = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;
  margin-horizontal: 24px;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const SubTitle = styled.Text`
  font-size: 13px;
  color: white;
  margin-top: 20px;
  text-align: center;
`;

const TitleSub = styled.Text`
  font-size: 13px;
  color: white;
  margin-top: 20px;
`;
const ClickOption = styled.View`
  width: 20%;
  align-items: left;
  justify-content: center;
`;

export default function ListarAtletas() {
  const navigation = useNavigation();
  const [isAtletas, setIsAtletas] = useState([]);

  useEffect(() => {
    try {
      api
        .get("/api/atletas")
        .then((res) => setIsAtletas(res.data.data))
        .catch((error) => console.log("Erro ao consultar os atletas", error));
    } catch (error) {
      console.log("Erro ao consultar os atletas", error);
    }
  }, [setIsAtletas]);

  console.log(isAtletas);

  return (
    <>
      <SafeAreaView />
      <HeaderBar>
        <ClickOption>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Back source={BackButton} />
          </TouchableOpacity>
        </ClickOption>
        <View style={{ width: "60%" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Lista de Atletas
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text></Text>
        </View>
      </HeaderBar>
      <ScrollView>
        {isAtletas.length > 0 &&
          isAtletas.map((item, index) => (
            <Conteiner key={index}>
              <Card>
                <View
                  style={{
                    width: "25%",
                    backgroundColor: "#033D77",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <Title>29 anos</Title>
                  <SubTitle>{item.maoDominante}</SubTitle>
                  <SubTitle>{item.raquete}</SubTitle>
                </View>
                <View
                  style={{
                    width: "75%",
                    backgroundColor: "#F57336",
                    padding: 10,
                  }}
                >
                  <Title>{item.nome}</Title>
                  <TitleSub>Número de registro: 12345678</TitleSub>
                  <TitleSub style={{ marginBottom: 20 }}>
                    Validade: 17/10/2023
                  </TitleSub>
                  <Title>Arena: {item.arena}</Title>
                </View>
              </Card>
            </Conteiner>
          ))}
      </ScrollView>
    </>
  );
}

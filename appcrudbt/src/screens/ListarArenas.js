import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
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

const ClickOption = styled.View`
  width: 20%;
  align-items: left;
  justify-content: center;
`;

export default function ListarArenas() {
  const navigation = useNavigation();
  const [isArenas, setIsArenas] = useState([]);

  useEffect(() => {
    try {
      api
        .get("/api/arenas")
        .then((res) => setIsArenas(res.data.data))
        .catch((error) => console.log("Erro ao consultar as arenas", error));
    } catch (error) {
      console.log("Erro ao consultar as arenas", error);
    }
  }, [setIsArenas]);

  console.log(isArenas);
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
            Lista de Arenas
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text></Text>
        </View>
      </HeaderBar>
      <ScrollView>
        {isArenas.length > 0 &&
          isArenas.map((item, index) => (
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
                  <SubTitle style={{ textAlign: "center" }}>
                    {item.totalQuadras} quadras
                  </SubTitle>
                  <SubTitle style={{ textAlign: "center" }}>Aberto</SubTitle>
                </View>
                <View
                  style={{
                    width: "80%",
                    backgroundColor: "#F57336",
                    padding: 10,
                  }}
                >
                  <Title>{item.nome}</Title>
                  <SubTitle>Número de Atletas: 120</SubTitle>
                  <SubTitle>Validade: 17/09/2024</SubTitle>
                  <SubTitle>Endereço: {item.endereco}</SubTitle>
                  <SubTitle>Bairro: {item.bairro}</SubTitle>
                  <SubTitle>
                    Cidade: {item.cidade} - {item.estado}
                  </SubTitle>
                </View>
              </Card>
            </Conteiner>
          ))}
      </ScrollView>
    </>
  );
}

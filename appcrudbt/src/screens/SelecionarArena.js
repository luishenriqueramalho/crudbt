import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
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

const ClickOption = styled.View`
  width: 20%;
  align-items: left;
  justify-content: center;
`;

const ClickArena = styled.TouchableOpacity`
  margin-top: 50px;
  margin-horizontal: 24px;
  padding: 12px;
  background-color: #f57336;
`;

const TitleArena = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

function SelecionarArena() {
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
              color: "#F57336",
            }}
          >
            Selecione uma Arena
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text></Text>
        </View>
      </HeaderBar>
      {isArenas &&
        isArenas.map((item, index) => (
          <ClickArena key={index} activeOpacity={0.7} onPress={() => {}}>
            <TitleArena>{item.nome}</TitleArena>
          </ClickArena>
        ))}
    </>
  );
}

export default SelecionarArena;

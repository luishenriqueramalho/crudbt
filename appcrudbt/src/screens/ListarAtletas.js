import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styled } from "styled-components";

const HeaderBar = styled.View`
  background-color: yellow;
  flex-direction: row;
  margin-horizontal: 24px;
`;

export default function ListarAtletas() {
  return (
    <>
      <SafeAreaView />
      <HeaderBar>
        <View style={{ width: "50%", backgroundColor: "blue" }}>
          <Text>Voltar</Text>
        </View>
        <View style={{ width: "50%", backgroundColor: "pink" }}>
          <Text
            style={{ textAlign: "right", fontSize: "24px", fontWeight: "bold" }}
          >
            Listar Atletas
          </Text>
        </View>
      </HeaderBar>
      <Text>Listar Atletas</Text>
    </>
  );
}

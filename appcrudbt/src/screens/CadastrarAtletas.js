import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styled } from "styled-components";
import BackButton from "../../assets/backButton.png";

const HeaderBar = styled.View`
  flex-direction: row;
  margin-horizontal: 24px;
`;
const Back = styled.Image`
  width: 20px;
  height: 20px;
`;

const Container = styled.View`
  margin-top: 60 px;
  margin-horizontal: 24 px;
`;

const InputView = styled.View`
  margin-top: 30px;
`;

const LineInput = styled.View`
  width: 100%;
  border-width: 0.5px;
  border-color: #f57336;
  margin-top: 10px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 100px;
  margin-horizontal: 50px;
  background-color: #f57336;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
`;

const TitleButton = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const ClickOption = styled.View`
  width: 20%;
  align-items: left;
  justify-content: center;
`;

export default function CadastrarAtletas() {
  const navigation = useNavigation();
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
            Cadastrar Atleta
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text></Text>
        </View>
      </HeaderBar>
      <Container style={{ marginTop: 80, marginHorizontal: 24 }}>
        <InputView>
          <TextInput placeholder="Nome Completo" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Data de Nascimento" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Mão Dominante" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Raquete" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Arena" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Sexo" />
          <LineInput />
        </InputView>
        <Button onPress={() => navigation.navigate("SucessCadastro")}>
          <TitleButton>Cadastrar</TitleButton>
        </Button>
      </Container>
    </>
  );
}

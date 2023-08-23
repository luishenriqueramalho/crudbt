import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styled } from "styled-components";
import BackButton from "../../assets/backButton.png";
import api from "../config/api";

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

export default function CadastrarArenas() {
  const navigation = useNavigation();

  const saveArena = async () => {
    try {
      api
        .post("/api/arenas", {
          nome: "Teste 2",
          dataAbertura: "10/09/2022",
          qntQuadras: "7",
          endereco: "Rua das Alamandas",
          bairro: "Jardins",
          cidade: "São Gonçalo do Amarante",
          estado: "RN",
          status: true,
        })
        .then((res) => {
          navigation.navigate("SucessCadastro");
        })
        .catch((err) => {
          Alert.alert(
            "Ocorreu um erro!",
            "Parece que não foi possível salvar o atleta, tente novamente",
            [
              {
                text: "Ok",
                onPress: () => navigation.navigate("Home"),
              },
            ]
          );
        });
    } catch (error) {
      console.log("Deu erro, caiu no catch");
    }
  };

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
            Cadastrar Arena
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text></Text>
        </View>
      </HeaderBar>
      <Container style={{ marginTop: 80, marginHorizontal: 24 }}>
        <InputView>
          <TextInput placeholder="Nome da Arena" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Data de Início" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Total de Quadras" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Endereço" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Bairro" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Cidade" />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput placeholder="Estado" />
          <LineInput />
        </InputView>
        <Button onPress={saveArena}>
          <TitleButton>Cadastrar</TitleButton>
        </Button>
      </Container>
    </>
  );
}

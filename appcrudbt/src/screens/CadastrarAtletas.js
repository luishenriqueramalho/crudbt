import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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

export default function CadastrarAtletas({ route }) {
  const navigation = useNavigation();
  const atualizarAtleta = route?.params?.atualizarAtleta;
  const item = route?.params?.item;
  const [isNome, setIsNome] = useState(null);
  const [isDataNascimento, setIsDataNascimento] = useState(null);
  const [isMaoDominante, setIsMaoDominante] = useState(null);
  const [isRaquete, setIsRaquete] = useState(null);
  const [isArena, setIsArena] = useState(null);
  const [isSexo, setIsSexo] = useState(null);

  const saveAtleta = async () => {
    try {
      api
        .post("/api/atletas", {
          nome: isNome,
          dataNascimento: isDataNascimento,
          maoDominante: isMaoDominante,
          raquete: isRaquete,
          arenaPrimaria: isArena,
          sexo: isSexo,
        })
        .then((res) => {
          console.log(res);
          navigation.navigate("SucessCadastro");
        })
        .catch((err) => {
          Alert.alert(
            "Ocorreu um erro!",
            "Parece que não foi possível salvar o atleta, tente novamente." +
              err,
            [
              {
                text: "Ok",
                onPress: () => navigation.navigate("Home"),
              },
            ]
          );
        });
      console.log("caiu aqui");
    } catch (error) {
      console.log("Deu erro, caiu no catch");
    }
  };

  const attAtleta = async () => {};

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
            {atualizarAtleta ? "Atualizar Atleta" : "Cadastrar Atleta"}
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text></Text>
        </View>
      </HeaderBar>
      <Container style={{ marginTop: 80, marginHorizontal: 24 }}>
        <InputView>
          <TextInput
            placeholder="Nome Completo"
            onChangeText={(nome) => setIsNome(nome)}
            value={item?.nome}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Data de Nascimento"
            onChangeText={(dataNascimento) =>
              setIsDataNascimento(dataNascimento)
            }
            value={item?.dataNascimento}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Mão Dominante"
            onChangeText={(maoDominante) => setIsMaoDominante(maoDominante)}
            value={item?.maoDominante}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Raquete"
            onChangeText={(raquete) => setIsRaquete(raquete)}
            value={item?.raquete}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Arena"
            onChangeText={(arena) => setIsArena(arena)}
            value={item?.arenaPrimaria}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Sexo"
            onChangeText={(sexo) => setIsSexo(sexo)}
            value={item?.sexo}
          />
          <LineInput />
        </InputView>
        <Button onPress={attAtleta ? attAtleta : saveAtleta}>
          <TitleButton>
            {atualizarAtleta ? "Atualizar" : "Cadastrar"}
          </TitleButton>
        </Button>
      </Container>
    </>
  );
}

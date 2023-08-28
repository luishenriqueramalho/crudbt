import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
const ButtonDelete = styled.TouchableOpacity`
  align-items: center;
`;

const TitleDelete = styled.Text`
  margin-top: 100px;
  font-size: 20px;
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

export default function CadastrarArenas({ route }) {
  const navigation = useNavigation();
  const atualizarArena = route?.params?.atualizarArena;
  const item = route?.params?.item;
  const [isNome, setIsNome] = useState(null);
  const [isDataAbertura, setIsDataAbertura] = useState(null);
  const [isQntQuadras, setIsQntQuadras] = useState(null);
  const [isEndereco, setIsEndereco] = useState(null);
  const [isBairro, setIsBairro] = useState(null);
  const [isCidade, setIsCidade] = useState(null);
  const [isEstado, setIsEstado] = useState(null);

  const saveArena = async () => {
    try {
      api
        .post("/api/arenas", {
          nome: isNome,
          dataAbertura: isDataAbertura,
          qntQuadras: isQntQuadras,
          endereco: isEndereco,
          bairro: isBairro,
          cidade: isCidade,
          estado: isEstado,
          status: true,
        })
        .then((res) => {
          console.log(res);
          navigation.navigate("SucessCadastro");
        })
        .catch((err) => {
          Alert.alert(
            "Ocorreu um erro!",
            "Parece que não foi possível salvar a arena, tente novamente",
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

  const attArena = async () => {};
  const deleteArena = async () => {};

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
            {atualizarArena ? "Atualizar Arena" : "Cadastrar Arena"}
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text></Text>
        </View>
      </HeaderBar>
      <Container style={{ marginTop: 80, marginHorizontal: 24 }}>
        <InputView>
          <TextInput
            placeholder="Nome da Arena"
            onChangeText={(nome) => setIsNome(nome)}
            value={item?.nome}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Data de Abertura"
            onChangeText={(dataAbertura) => setIsDataAbertura(dataAbertura)}
            value={item?.dataAbertura}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Quantidade de Quadras"
            onChangeText={(qntQuadras) => setIsQntQuadras(qntQuadras)}
            value={item?.qntQuadras}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Endereço"
            onChangeText={(endereco) => setIsEndereco(endereco)}
            value={item?.endereco}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Bairro"
            onChangeText={(bairro) => setIsBairro(bairro)}
            value={item?.bairro}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Cidade"
            onChangeText={(cidade) => setIsCidade(cidade)}
            value={item?.cidade}
          />
          <LineInput />
        </InputView>
        <InputView>
          <TextInput
            placeholder="Estado"
            onChangeText={(estado) => setIsEstado(estado)}
            value={item?.estado}
          />
          <LineInput />
        </InputView>
        <Button onPress={attArena ? attArena : saveArena}>
          <TitleButton>
            {atualizarArena ? "Atualizar" : "Cadastrar"}
          </TitleButton>
        </Button>

        {atualizarArena ? (
          <ButtonDelete>
            <TitleDelete onPress={deleteArena ? deleteArena : null}>
              Excluir Arena
            </TitleDelete>
          </ButtonDelete>
        ) : null}
      </Container>
    </>
  );
}

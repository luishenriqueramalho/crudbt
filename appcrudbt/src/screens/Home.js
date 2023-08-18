import { SafeAreaView } from "react-native";
import { styled } from "styled-components";
import { useNavigation } from "@react-navigation/native";

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
      </Container>
    </>
  );
}

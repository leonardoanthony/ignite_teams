// import { Image, Text, View } from "react-native";

import { Header } from "@/src/componentes/Header";
import { Container, Title } from "./style";
import { Highlight } from "@/src/componentes/Highlight";
import { GroupCard } from "@/src/componentes/GroupCard";

export default function Groups() {
  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      <GroupCard title="TI" />
    </Container>
  );
}

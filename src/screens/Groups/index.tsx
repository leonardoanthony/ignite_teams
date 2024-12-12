// import { Image, Text, View } from "react-native";

import { Header } from "@/src/componentes/Header";
import { Container, Title } from "./style";
import { Highlight } from "@/src/componentes/Highlight";
import { GroupCard } from "@/src/componentes/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export default function Groups() {

  const [groups, setGroups] = useState(['TI', 'Faculdade', 'Casa']);

  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item}
          />
        )}
      />
    </Container>
  );
}

// import { Image, Text, View } from "react-native";

import { Header } from "@/src/componentes/Header";
import { Container, Title } from "./style";
import { Highlight } from "@/src/componentes/Highlight";
import { GroupCard } from "@/src/componentes/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@/src/componentes/ListEmpty";

export default function Groups() {

  const [groups, setGroups] = useState([]);

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
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty 
            message={"Que tal cadastrar a primeira turma?"} 
          />
        )}

      />
    </Container>
  );
}

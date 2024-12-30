import { Header } from "@/src/componentes/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/src/componentes/Highlight";

export default function NewGroup(){
    return (
        <Container>
            <Header showBackButton />

            <Content >
                <Icon />

                <Highlight 
                    title="Nova Turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />

            </Content>
        </Container>
    )
}
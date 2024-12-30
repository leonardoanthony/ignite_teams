import { Header } from "@/src/componentes/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/src/componentes/Highlight";
import { Button } from "@/src/componentes/Button";
import { Input } from "@/src/componentes/Input";

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

                <Input 
                    placeholder="Nome da turma"
                />

                <Button 
                    title="Criar"
                    style={{marginTop: 20}}
                />

            </Content>
        </Container>
    )
}
import Title from "../../components/Title"

export default function useTitle(){
    return (
        <div>
            <Title 
            title = "Página de Cadastro"
            description = "Incluir, alterar e excluir coisas!"
            />

            <Title 
            title = "Página de Login"
            description = "Informe seu email e senha"
            small = {true}
            />
        </div>



    )
}
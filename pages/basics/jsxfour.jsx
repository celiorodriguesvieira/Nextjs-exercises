export default function jsxfour(){
    const mensage = "Notas da Faculdade!"
    const love = "Você está aprovado?"

    return (
        <div>
            <h1>{mensage}</h1>
            <h2>{love}</h2> 
            <h3>{Media(10, 4)}</h3>
        </div>
        );  
}

let media = "";
function Media(notaOne, notaTwo){
    media = (notaOne + notaTwo ) / 2

    if(media >= 7){
        return "Sim!"
    }else
    return "Não!"
}
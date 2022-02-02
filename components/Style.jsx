export default function Style(props){
    return (
        <div>
            <h1 style={{backgroundColor: props.number >= 50 ? "#dff" : "#D252",
            color: props.color, textAlign: props.text, fontStyle: props.bold ? "bold" : "italic", fontSize: props.bigger ? 50 : 22 }}>
                CSS
            </h1>
        </div>
    )
}
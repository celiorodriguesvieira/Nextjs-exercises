function genaratorList(){
     let arrayList = [
        <span key={"one"}>1,</span>,
        <span key={"two"}>2,</span>,
        <span key={"three"}>3,</span>,
        <span key={"four"}>4,</span>,
        <span key={"five"}>5,</span>,
        <span key={"six"}>6,</span>,
        <span key={"seven"}>7,</span>,
        <span key={"eight"}>8,</span>,
        <span key={"nine"}>9,</span>,
        <span key={"ten"}>10,</span>
    ]
    return arrayList
}

export default function Lista(){
    return (<div>{genaratorList()}</div>)
    
}
function genaratorList(end = 10){
    for(let i = 0; i <= end; i++){
        arrayList.push(<span key={"one"}>{i},</span>,)
    }
    return arrayList
}

export default function Lista(){
    return (<div>{genaratorList()}</div>)
    
}
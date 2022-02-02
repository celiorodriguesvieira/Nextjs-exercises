import Style from "../../components/Style";

export default function usingStyle(){
    return (
        <div>
        <Style number={0}/>
        <Style number={100}/>
        <Style number={20}/>
        <Style number={20} color={"#fff"} text={"right"} bigger bold/>
        </div>
    )
}
import React from "react";
import './style.css'

interface BlockProps{
    value?:string | null;
    OnClick:()=>void;
}

const Block: React.FC<BlockProps> = function(props){
    return (
        <div className="block" onClick={props.OnClick} >{props.value}</div>
    )
};

export default Block;
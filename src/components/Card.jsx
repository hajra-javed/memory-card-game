import { useEffect, useState } from "react";
import './Card.css';

function Card(props){
    const [clicked, setClicked] = useState(false);

    useEffect(()=>{
        if (props.isGameOver === true){
            setClicked(false);
        };
    }, [props.isGameOver]);

    function handleClick(){
        setClicked(true);
        props.onClick(clicked);
    };

    return(
        <div className="card" onClick={handleClick}>
            <img src={props.img} alt="" />
            <div className="description">{props.children}</div>
        </div>
    );

};

export default Card;

import React  from "react";
import {useDrag} from "react-dnd";


//For every element we want to make draggable we call this hook

function Picture({id,url}){
    //returns true if draggign else false , drag is reference which element is dragabale

    const[{isDragging} , drag] = useDrag(()=>({
        // Type determines what we are dragging, wheteht irs an image, card , it sour own name
        type:"image",
        item:{id : id},
        // This collect is optional , but if you want dragging info like it it is dragging or not then its usefull
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging(),

        })

        

    }));
    // We give referenece to element we are dragiing using ref and specifying drag
    
        return <img ref={drag} 
        src={url} width="150px" style={{border: isDragging? "5px solid pink" : "0px"} }/> //if isdragging is true we give this a border

}

export default Picture;
import React,{useState} from "react";
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

const ColoredRect = () => {
    const [color, setColor] = useState('green');
  
    const handleClick = () => {
      setColor(Konva.Util.getRandomColor());
    };
  
    return (
      <Rect
        x={300}
        y={500}
        width={200}
        height={100}
        fill={color}
        shadowBlur={5}
        onClick={handleClick}
      />
    );
  };

const Board = ()=>{

    return(

        <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        
        <ColoredRect />
      </Layer>
    </Stage>
    )
}


export default Board;
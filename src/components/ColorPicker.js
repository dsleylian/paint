import React, { useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import { changeColor } from '../redux/ActionCreator';
import { changeTempColor } from '../redux/ActionCreator';
import { useDispatch } from 'react-redux';

const ColorPicker = () => {
  const [color, setColor] = useState("#BF40BF");
  const dispatch = useDispatch();
  
  let tempColor;
  if(color !== "#FFFFFF" ) {
    tempColor = color;
  }

  useEffect(() => {
    dispatch(changeColor(color)); 
    dispatch(changeTempColor(tempColor))
  })

  const handleClick = (e) => {
    dispatch(changeColor(tempColor));
  };

  return (
  <div className="color-picker-container control-child">
      <button type="submit" id="color-button" className="control-button color-display" style={{backgroundColor: color}} onClick={handleClick}></button>
      <HexColorPicker className="control-button" color={color} onChange={setColor} />
  </div>
  );
};

export default ColorPicker;
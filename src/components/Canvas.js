import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

function CanvasComponent({ setCanvas }){

  const currentColor = useSelector((state) => state.Reducer.Color.Color);
  const currentThickness = useSelector((state) => state.Reducer.Thickness.Thickness);
  const currentTrasparency = useSelector((state) => state.Reducer.Transparency.Transparency);
  
  const [Background, setBackground] = useState(false);
  

  useEffect(() => {

    let isDrawing = false;
    let x = 0;
    let y = 0;
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    setCanvas(canvas);

    //set background to white using closure so it only happens once
    let Backgroundfunction = (function() {
      return function() {
          if (!Background) {
            setBackground(true);
              let w = canvas.width;
              let h = canvas.height;
              context.fillStyle = "white";
              context.fillRect(0,0,w,h);
          }
        };
    })();

    Backgroundfunction();

    /* tracking mouse for free-drawing */

    canvas.addEventListener('mousedown', e => {
      context.lineWidth = currentThickness;
      context.strokeStyle = currentColor;
      context.globalAlpha = currentTrasparency;
      x = e.offsetX;
      y = e.offsetY;
      isDrawing = true;
    });

    canvas.addEventListener('mousemove', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
      }
    });

    window.addEventListener('mouseup', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
      }
    });

    function drawLine(context, x1, y1, x2, y2) {
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }

});

  
  return (
    <div>
      <canvas id="canvas" width="900" height="600">Alt text: this is the canvas</canvas>
    </div>
  )
}

export default CanvasComponent;
import React, { forwardRef } from 'react';
import Webcam from "react-webcam";

import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  webcamWrapper: {
    height: 200, // Set this to the desired height
    width: '100%',
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden', // Optional to clip the webcam feed to the border radius
  },
  webcam: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  canvas: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    width: '100%',
    height: '100%',
  }
}));

// Define props interface if needed for additional props
interface WebcamViewerProps {
  webcamRef: React.RefObject<Webcam>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const WebcamViewer = forwardRef<WebcamViewerProps, any>(({ webcamRef, canvasRef }, ref) => {
    const classes = useStyles();
  
    return (
      <Box className={classes.webcamWrapper}>
        <Webcam 
            ref={webcamRef}
            audio={false}
            className={classes.webcam}
        />
        <canvas 
            ref={canvasRef}
            className={classes.canvas}
        />
      </Box>
    );
  });
  
  export default WebcamViewer;

import React, { useState } from 'react';
import IEFeedBack from './IEFeedback.jsx'
import Header from '../components/Header'
import { Box, Button, Card, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Stack } from "@mui/material";
import AccordionActions from '@mui/material/AccordionActions';
import MeScreenFormStatus from './MeScreens.js'


const MeScreens = ({ MeAbstract, mainAbs }) => {
  const submitButton = true;
  return (
    <div>
      {/* <Header title="ME Screens" subtitle="" /> */}
      {/* <InfraSheet buttonAbstract={submitButton} /> */}
      <IEFeedBack
        mainAbs={mainAbs} //Default: undefined
        MeAbstract={MeAbstract}  //Default: undefined
        buttonAbstract={submitButton} //Default: true
      ></IEFeedBack>
      {(!mainAbs && !MeAbstract) &&
        (<AccordionActions sx={{ pr: 5, pt: 2 }} justifyContent="center" display="flex">
          <Button variant='contained' color='success' onClick={MeScreenFormStatus}>Approve</Button>
          <Button variant='contained' color='error' onClick={MeScreenFormStatus}>Reject</Button>
        </AccordionActions>)
      }
    </div>
  );
};

export default MeScreens;

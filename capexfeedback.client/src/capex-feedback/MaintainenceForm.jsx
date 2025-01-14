// MaintainenceForm.jsx
import React, { useEffect, useState } from 'react';
import MeScreens from "./MeScreens.jsx";
import { Box, Button, AccordionActions } from "@mui/material";
import { fetchIEDetails } from '../services/MaintainenceFormService.js';
import { maintainenceFormSubmit, MeAbstract } from './MaintainenceForm.js';

const MaintainenceForm = ({ mainAbs }) => {
  const MeAbstract = true;
  const [IEDetailsPreFill, setIEDetailsPreFill] = useState(null);

  //Fetch IEDetails on mounting
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchIEDetails();
      setIEDetailsPreFill(data); //Store data
    };

    fetchData();
  }, []);//Resets the stas

  return (
    <div>
      <MeScreens
        mainAbs={mainAbs} //Default: undefined
        MeAbstract={MeAbstract} //Default: true
        IEDetailsPreFill={IEDetailsPreFill}
      />
      {/* {(!mainAbs && !MeAbstract) &&
              ( */}
              <AccordionActions sx={{ pr: 5, pt: 2 }} justifyContent="center" display="flex">
                <Button variant='contained' color='success' onClick={maintainenceFormSubmit}>Approve</Button>
                <Button variant='contained' color='error' onClick={maintainenceFormSubmit}>Reject</Button>
              </AccordionActions>
              {/* )
            } */}
    </div>


  );
};

export default MaintainenceForm;

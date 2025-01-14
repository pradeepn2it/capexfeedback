import * as React from 'react';
import { Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Header from "../components/Header";
import PRForm from "../components/PRForm";
import InfraSheet from '../components/InfraSheet';
import { useMediaQuery } from "@mui/material";
import {
  useIEFeedback,
  fields
} from './IEFeedback.js';

export default function IEFeedback({ buttonAbstract, MeAbstract, mainAbs }) {
  let isMeScreens = false;
  let isMaintainceForm = false;
  let isProjectForm = false;

  console.log(mainAbs, MeAbstract, buttonAbstract);

  const { initialValues, checkoutSchema, handleMainFormSubmit, isNonMobile } = useIEFeedback();
  if (mainAbs === undefined && MeAbstract === true && buttonAbstract === true) {
    isMaintainceForm = true
    console.log(isMaintainceForm)
  }
  if (mainAbs === true && MeAbstract === true && buttonAbstract === true) {
    isProjectForm = true
    console.log(isProjectForm)
  }
  if (mainAbs === undefined && MeAbstract === undefined && buttonAbstract === true) {
    isMeScreens = true
    console.log(isMeScreens)
  }

  return (
    <Box m="40px">
      <div>
        {isMaintainceForm ? (
          <Header title="Maintainance Form" subtitle="" />
        ) : isProjectForm ? (
          <Header title="Project Form" subtitle="" />
        ) : isMeScreens ? (
          <Header title="ME Screens" subtitle='' />
        ) : (
          <Header title="IE Feedback" subtitle="" />
        )}

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Header title="PR Details" subtitle="" />
          </AccordionSummary>
          <AccordionDetails>
            <PRForm
              initialValues={initialValues}
              // validationSchema={checkoutSchema}
              fields={fields}
              handleMainFormSubmit={handleMainFormSubmit}
              isNonMobile={isNonMobile}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Header title="Infra Sheet Download" subtitle="" />
          </AccordionSummary>
          <AccordionDetails>
            <InfraSheet
              buttonAbstract={buttonAbstract}
              MeAbstract={MeAbstract}
              mainAbs={mainAbs}
            />
          </AccordionDetails>
        </Accordion>

      </div>
    </Box>
  );
}

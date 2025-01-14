import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik } from "formik";
import ComboBox from '../components/mini-components/ComboBox'
import { Grid } from "@mui/material";
import MeScreens from '../capex-feedback/MeScreens';

export default function InfraSheet({ buttonAbstract, MeAbstract, mainAbs }) {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const [file, setFile] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  // const [submitButton, setSubmitButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = "x"; // Mocked response
        if (!response.ok) {
          throw new Error('No existing Infra Sheet found!');
        }

        const blob = await response.blob();

        if (blob.size === 0) {
          throw new Error('No file content found');
        }

        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'infra-sheet.xlsx';
        link.click();

        setResponseData('File fetched and downloaded successfully!');
        setErrorMessage(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setResponseData(null);
        setErrorMessage(error.message);
      }
    };

    fetchData();
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <div>
      {errorMessage && (
        <Typography color="error" fontWeight="bold">
          {errorMessage}
          <Box mb={2} />
        </Typography>
      )}
      {responseData && <Typography>{responseData}</Typography>}
      {!(buttonAbstract || MeAbstract || mainAbs) && (
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Infra Sheet Upload</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload Infra Sheet
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
          </AccordionDetails>

      </Accordion>
      )}

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">IE Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Formik>
            <form>
              <Box display="flex" flexDirection="column" gap={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      variant="outlined"
                      type="email"
                      value="capex@capex.co.in"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      variant="outlined"
                      type="text"
                      placeholder="DFM Infiltration"
                      disabled={buttonAbstract}

                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      variant="outlined"
                      type="text"
                      placeholder="Capacity"
                      disabled={buttonAbstract}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {buttonAbstract ? (
                      <Grid item xs={6}>
                        <TextField
                          size="small"
                          variant="outlined"
                          type="text"
                          placeholder="Block and Equilibrium"
                          disabled={buttonAbstract}
                        />
                      </Grid>
                    ) : (
                      <Grid item xs={6}>
                        <ComboBox
                          options={['--Block and Equilibrium--', 'Block x', 'Equilibrium y']}
                        />
                      </Grid>
                    )}
                  </Grid>
                  <Grid item xs={12}

                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    {buttonAbstract ? (
                      null
                    ) :
                      <Button color="secondary" variant="contained">
                        Submit
                      </Button>
                    }


                  </Grid>
                </Grid>

              </Box>

            </form>
          </Formik>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

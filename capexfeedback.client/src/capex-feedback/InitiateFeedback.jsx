import React, { useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import PRForm from "../components/PRForm";
import WorkflowTable from "../components/WorkflowTable";
import InitiateFeedbackService from "../services/InitiateFeedbackService";

const InitiateFeedback = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const prFormRef = useRef();

  const [fieldValues, setfieldValues] = useState([
    { value: "", name: "purchReq", label: "Purch.Req." },
    { value: "", name: "requisnr", label: "Requisnr." },
    { value: "", name: "item", label: "Item" },
    { value: "", name: "material", label: "Material" },
    { value: "", name: "shortText", label: "Short Text" },
    { value: "", name: "po", label: "PO" },
    { value: "", name: "pgr", label: "PGr" },
    { value: "", name: "matlGroup", label: "Matl Group" },
    { value: "", name: "delivDate", label: "Deliv.Date" },
    { value: "", name: "issStLoc", label: "Iss.StLoc." },
    { value: "", name: "d", label: "D" },
    { value: "", name: "sLoc", label: "SLoc" },
    { value: "", name: "supplier", label: "Supplier" },
    { value: "", name: "s", label: "S" },
    { value: "", name: "cl", label: "Cl." },
    { value: "", name: "totalValue", label: "Total Value" },
    { value: "", name: "reqDate", label: "Req. Date" },
    { value: "", name: "releaseDt", label: "Release Dt" },
    { value: "", name: "chngdOn", label: "Chngd On" },
    { value: "", name: "quantity", label: "Quantity" },
    { value: "", name: "poDate", label: "PO Date" },
    { value: "", name: "ordered", label: "Ordered" },
    { value: "", name: "un", label: "Un" },
    { value: "", name: "shortage", label: "Shortage" },
    { value: "", name: "per", label: "Per" },
    { value: "", name: "crcy", label: "Crcy" },
    { value: "", name: "valnPrice", label: "Valn Price" },
  ]);

  const getPRField = [{ name: "prnum", label: "PR Number" }];

  const initialSmallFormValues = getPRField.reduce((acc, { name }) => {
    acc[name] = "";
    return acc;
  }, {});

  const checkoutSchema = yup.object().shape({});

  const handleMainFormSubmit = async (value) => {
    console.log("Main form submitted", value);
    alert("Form Submitted");
  };

  const handlePRFormSubmit = async (value) => {
    // const data= InitiateFeedbackService.getPRDetails();
    const data = {
      purchReq: "12345",
      requisnr: "R12345",
      item: "Item123",
      material: "MaterialABC",
      shortText: "Test short description",
      po: "PO123",
      pgr: "PGR1",
      matlGroup: "Material Group A",
      delivDate: "2025-02-10",
      issStLoc: "Location123",
      d: "2025-01-15",
      sLoc: "SL123",
      supplier: "SupplierXYZ",
      s: "S123",
      cl: "C123",
      totalValue: "10000",
      reqDate: "2025-01-10",
      releaseDt: "2025-02-05",
      chngdOn: "2025-01-02",
      quantity: "500",
      poDate: "2025-01-05",
      ordered: "400",
      un: undefined,
      shortage: "20",
      per: "50",
      crcy: "USD",
      valnPrice: "20",
    };

    // Use functional form to update state based on previous values
    setfieldValues((prev) =>
      prev.map((field) => {
        const updatedValue = data[field.name] !== undefined ? data[field.name] : undefined;
        return { ...field, value: updatedValue };
      })
    );
  };

  // Inside the component render, log the updated state (right after state update)
  console.log(fieldValues);


  const handleInitiateFeedback = async () => {
    if (prFormRef.current) {
      const prFormData = prFormRef.current.values;
      try {
        const result = await InitiateFeedbackService.postFeedbackData(prFormData);
        console.log("Feedback submitted successfully:", result);
        alert("Feedback successfully initiated!");
      } catch (error) {
        alert("Failed to initiate feedback. Please try again.");
      }
    }
  };

  return (
    <Box m="40px">
      <Header title="PR Details Form" subtitle="Initiate Your Feedback" />

      <Formik
        onSubmit={handlePRFormSubmit}
        initialValues={initialSmallFormValues}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              mb="20px"
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(2, 1fr)"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
              }}
            >
              {getPRField.map(({ name, label }) => (
                <TextField
                  size="small"
                  key={name}
                  fullWidth
                  variant="outlined"
                  type="text"
                  label={label}
                  onBlur={handleBlur}
                  value={values[name]}
                  name={name}
                  error={!!touched[name] && !!errors[name]}
                  helperText={touched[name] && errors[name]}
                  inputProps={{ maxLength: 15 }}
                  onChange={(e) => {
                    const uppercasedValue = e.target.value.toUpperCase();
                    e.target.value = uppercasedValue;

                    if (uppercasedValue.length === 15) {
                      e.target.style.color = "green";
                      e.target.style.backgroundColor = "#F3F7F1";
                    } else {
                      e.target.style.color = "";
                      e.target.style.backgroundColor = "";
                    }

                    handleChange(e);
                  }}
                />
              ))}
              <Button type="submit" color="secondary" variant="contained">
                Get PR Details
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <PRForm
        fieldValues={fieldValues}
        handleMainFormSubmit={handleMainFormSubmit}
      />

      <WorkflowTable />

      <Box mt="20px" display="flex" justifyContent="end">
        <Button
          onClick={handleInitiateFeedback}
          color="secondary"
          variant="contained"
        >
          Initiate Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default InitiateFeedback;

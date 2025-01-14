import React, { forwardRef } from "react";
import { Box, TextField } from "@mui/material";
import { Formik } from "formik";

const MainForm = forwardRef(({ validationSchema, fieldValues, handleMainFormSubmit, isNonMobile }, ref) => {
  return (
    <Formik
      onSubmit={handleMainFormSubmit}
      validationSchema={validationSchema}
      innerRef={ref}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="20px"
            gridTemplateColumns="repeat(3, 1fr)"
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              "& > div": { gridColumn: isNonMobile ? undefined : "span 1" },
            }}

          >
            {fieldValues && fieldValues.length > 0 && fieldValues.map(({ name, label }) => {
              const fieldValue = fieldValues.find(field => field.name === name)?.value || ""; // Get value from fieldValues array
              return (
                <TextField
                  size="small"
                  key={name}
                  fullWidth
                  variant="outlined"
                  type="text"
                  label={label}
                  onBlur={handleBlur}
                  value={fieldValue} // Use the correct value from fieldValues
                  name={name}
                  error={!!touched[name] && !!errors[name]}
                  helperText={touched[name] && errors[name]}
                  readOnly
                  color="primary"
                />
              );
            })}
          </Box>
        </form>
      )}
    </Formik>
  );
});

export default MainForm;

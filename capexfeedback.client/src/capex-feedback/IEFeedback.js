import { useMediaQuery } from "@mui/material";
import * as yup from "yup";
import InitiateFeedback from "./InitiateFeedback.js";
import IEFeedbackService from "../services/IEFeedbackService";

export const fields = InitiateFeedback.fields;

export const initialValues = fields.reduce((acc, { name }) => {
  acc[name] = "";
  return acc;
}, {});

export const checkoutSchema = yup.object().shape({
  ...fields.reduce((acc, { name }) => {
    acc[name] = yup.string().required("Unable to fetch");
    return acc;
  }, {}),
});

export function useIEFeedback() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleMainFormSubmit = async (values) => {
    console.log("Main form submitted", values);
    alert("Form Submitted");
  };

  return {
    initialValues,
    checkoutSchema,
    handleMainFormSubmit,
    isNonMobile,
  };
}

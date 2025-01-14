import * as yup from "yup";
// import apiService from '../services/apiService';
import InitiateFeedbackService from "../services/InitiateFeedbackService";

// const [loading, setLoading] = useState(false);
export const fields = [
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
];

export const initialValues = fields.reduce((acc, { name, value }) => {
  acc[name] = value;
  return acc;
}, {});

export const smallFormFields = [{ name: "prnum", label: "PR Number" }];

export const initialSmallFormValues = smallFormFields.reduce((acc, { name }) => {
  acc[name] = "";  // Leave empty value for small form field
  return acc;
}, {});

export const checkoutSchema = yup.object().shape({
  ...fields.reduce((acc, { name }) => {
    acc[name] = yup.string().required("Unable to fetch");
    return acc;
  }, {}),
});

export const handleMainFormSubmit = async (value, { setFieldValue }) => {
  console.log("Main form submitted", value);
  alert("Form Submitted");
};

export const handlePRFormSubmit = async (value, setFieldValue, fields) => {
  // Dummy data to simulate API response
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
    un: "100",
    shortage: "20",
    per: "50",
    crcy: "USD",
    valnPrice: "20",
  };

  // Map the dummy data to the fields
  fields.forEach(({ name }) => {
    if (data[name] !== undefined) {
      setFieldValue(name, data[name]);
    }
  });
};


const formHandlers = {
  handleMainFormSubmit,
  handlePRFormSubmit,
  fields,
  initialValues,
  smallFormFields,
  initialSmallFormValues,
  checkoutSchema
};

export default formHandlers;

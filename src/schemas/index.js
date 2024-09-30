import * as Yup from "yup";
export const bookingSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(5, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  phone_number: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only numbers")
    .length(11, "Phone number must be exactly 11 digits")
    .required("Phone number is required"),
  // });
  email: Yup.string().email("Invalid email").required("Required"),
});

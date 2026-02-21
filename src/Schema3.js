import * as Yup from "yup";
export const Schema3=Yup.object({
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Email is required"),
})
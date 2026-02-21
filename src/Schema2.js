import * as Yup from "yup";
export const Schema2=Yup.object({
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Email is required"),
        password:Yup.string().required("password is required")
})
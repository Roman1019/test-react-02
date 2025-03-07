import { Formik, Form, Field, ErrorMessage } from "formik";
// // Namespace
import * as Yup from "yup";

import css from "./UserForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  role: Yup.string().oneOf(["guest", "user", "admin"]).required("Required"),
  notif: Yup.array()
    .of(Yup.string().oneOf(["email", "SMS", "push"]))
    .max(3),
});

export default function UserForm() {
  const handleSubmit = (value, actions) => {
    console.log(value);
    console.log(actions);
    console.log("handleSubmit");
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "user",
        notif: ["email"],
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Username:</label>
          <Field className={css.input} type="text" name="username" />
          <ErrorMessage
            className={css.error}
            component="span"
            name="username"
          />
        </div>

        <div className={css.group}>
          <label className={css.label}>Email:</label>
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} component="span" name="email" />
        </div>

        <div className={css.group}>
          <label className={css.label}>Role:</label>
          <Field className={css.input} as="select" name="role">
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage className={css.error} component="span" name="role" />
        </div>

        <fieldset className={css.group}>
          <legend className={css.legend}>Notification Preferences</legend>

          <label className={css.checkboxLabel}>
            <Field
              className={css.checkboxInput}
              type="checkbox"
              name="notif"
              value="email"
            />
            Receive email notifications
          </label>

          <label className={css.checkboxLabel}>
            <Field
              className={css.checkboxInput}
              type="checkbox"
              name="notif"
              value="SMS"
            />
            Receive SMS notifications
          </label>

          <label className={css.checkboxLabel}>
            <Field
              className={css.checkboxInput}
              type="checkbox"
              name="notif"
              value="push"
            />
            Receive push notifications
          </label>
        </fieldset>

        <button className={css.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

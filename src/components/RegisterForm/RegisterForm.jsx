import { Field, Form, Formik } from "formik"
import { useId } from "react"

const RegisterForm = ({submit}) => {
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
const handleSubmit = (values, actions) => { 
    console.log('values', values)
    submit(values)
    actions.resetForm()
 }

      return (
    <div>
        <Formik initialValues={{name:'', email:'', password:''}} onSubmit={handleSubmit}>
            <Form>
            <label htmlFor={nameId}>Name:</label>
            <Field name='name' id={nameId}/>
            <br />
            <label htmlFor={emailId}>Email:</label>
            <Field name='email' id={emailId}/>
            <br />
            <label htmlFor={passwordId}>Password:</label>
            <Field name='password' type='password' id={passwordId}/>
            <hr />

            <button type="submit">Register</button>
            </Form>
        </Formik>
    </div>
  )
}

export default RegisterForm
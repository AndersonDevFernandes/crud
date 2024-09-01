import {Formik, Field, ErrorMessage, Form} from "formik"
import * as yup from "yup";
import './App.css'

function App() {

 const handleClickRegister =(values) => console.log(values)

 const handleClickLogin = (values) => console.log(values) 

 const validationLogin = yup.object().shape({
  email: yup
  .string()
  .email()
  .required("Este campo é obrigatório"),
  password: yup
  .string()
  .min(8, "A senha deve ter 8 caracteres")
  .required("este campo é obrigatório."),
 })

 const validationRegister = yup.object().shape({
  email: yup
  .string()
  .email()
  .required("Este campo é obrigatório"),
  password: yup
  .string()
  .min(8, "A senha deve ter 8 caracteres")
  .required("este campo é obrigatório."),
  confirmPassword: yup
  .string()
  .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
 });

  return (
    <div className="container">
      <div className="box-container">
      <h1>LOGUIN</h1>
       <Formik initialValues={{}}
      onSubmit={handleClickLogin}
      validationSchema={validationLogin}>
        <Form className="login-form">
         <div className="login-form-group">
          <Field name="email" className="form-field" placeHolder="Email"/>
          <ErrorMessage 
          component="span"
          name="email"
          className="form-error"
          />
         </div>
         <div className="login-form-group">
          <Field name="password" className="form-field" placeHolder="Senha"/>
          <ErrorMessage 
          component="span"
          name="password"
          className="form-error"
          />
         </div>
         <button className="button" type="submit">login</button>
        </Form>
      </Formik>
      <br />
      <h1>CADASTRO</h1>
      <Formik initialValues={{}}
      onSubmit={handleClickRegister}
      validationSchema={validationRegister}>
        <Form className="login-form">
         <div className="login-form-group">
          <Field name="email" className="form-field" placeHolder="Email"/>
          <ErrorMessage 
          component="span"
          name="email"
          className="form-error"
          />
         </div>
         <div className="login-form-group">
          <Field name="password" className="form-field" placeHolder="Senha"/>
          <ErrorMessage 
          component="span"
          name="password"
          className="form-error"
          />
         </div>
         <div className="login-form-group">
          <Field name="confirmPassword" className="form-field" placeHolder="Confirme sua senha"/>
          <ErrorMessage 
          component="span"
          name="password"
          className="form-error"
          />
         </div>
         <button className="button" type="submit">login</button>
        </Form>
      </Formik> 
      
     </div> 
    </div>
  )
}

export default App

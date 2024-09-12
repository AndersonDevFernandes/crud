// Feito em react VITE utilizando Formik, Yup no frontend

// Importa bibliotecas e componentes necessários
import { Formik, Field, ErrorMessage, Form } from "formik"; // Biblioteca Formik para lidar com formulários
import * as yup from "yup"; // Biblioteca yup para validação de dados
import Axios from "axios"; // Biblioteca Axios para fazer requisições HTTP
import './App.css'; // Arquivo de estilo para a aplicação

function App() {
  // Função para lidar com o registro de um novo usuário
  const handleClickRegister = (values) => (
    // Envia uma requisição POST para o servidor para registrar o usuário
    Axios.post("http://localhost:3003/register", {
      email: values.email, // Envia o email do formulário
      password: values.password, // Envia a senha do formulário
    }).then((response) => {
      console.log(response); // Exibe a resposta do servidor no console
    })
  );

  // Função para lidar com o login (atualmente apenas exibe os valores no console)
  const handleClickLogin = (values) => console.log(values);

  // Validações para o formulário de login
  const validationLogin = yup.object().shape({
    email: yup
      .string() // O campo deve ser uma string
      .email() // Deve ser um email válido
      .required("Este campo é obrigatório"), // Mensagem de erro se o campo estiver vazio
    password: yup
      .string() // O campo deve ser uma string
      .min(8, "A senha deve ter 8 caracteres") // A senha deve ter pelo menos 8 caracteres
      .required("este campo é obrigatório."), // Mensagem de erro se o campo estiver vazio
  });

  // Validações para o formulário de registro
  const validationRegister = yup.object().shape({
    email: yup
      .string() // O campo deve ser uma string
      .email() // Deve ser um email válido
      .required("Este campo é obrigatório"), // Mensagem de erro se o campo estiver vazio
    password: yup
      .string() // O campo deve ser uma string
      .min(8, "A senha deve ter 8 caracteres") // A senha deve ter pelo menos 8 caracteres
      .required("este campo é obrigatório."), // Mensagem de erro se o campo estiver vazio
    confirmPassword: yup
      .string() // O campo deve ser uma string
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"), // A senha deve corresponder à senha confirmada
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

export default App // Exporta o componente App para ser usado em outras partes da aplicação

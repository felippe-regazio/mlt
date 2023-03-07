import styled from "@emotion/styled";
import { DefaultLayout } from "../../layouts/Default";
import { Form } from "../../components/Form/Form";
import { isEmail } from "../../utils/utils";
import { FormEvent } from "react";
import { toast } from 'react-toastify';
import { API } from "../../api/API";
import { AxiosResponse } from "axios";
import serialize from 'form-serialize';
import { Link } from "react-router-dom";

const RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 16px;
  
  h1 {
    font-size: 32px;
  }

  > div {
    text-align: left;
    width: 100%;
    max-width: 460px;
  }
`;

export default function Register() {
  const submit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = serialize(form, { hash: true });
    const inputs = Array.from(form.querySelectorAll('input, select, textarea'));

    if (inputs.some((input: any) => input.required && !input.value)) {
      toast.warn('Todos os campos devem ser preenchidos.');

      return false;      
    }

    if (!isEmail(data.email as string)) {
      toast.warn('Você deve inserir um e-mail estruturalmente válido, mesmo que fictício.');

      return false;
    }

    API.post('/login', data)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          const redirect = new URLSearchParams(window.location.search).get('redirect');
          window.location.href = redirect || '/';
        } else {
          toast.error(response.statusText);
        }
      })
      .catch(error => {
        toast.error(error?.response?.data?.errorMessage || error.message);
      });
  }

  return(
    <DefaultLayout>      
      <RegisterWrapper>
        <div>
          <h1>Login</h1>

          <Form onSubmit={submit} encType='multipart/form-data' noValidate>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required/>
            </div>

            <div className="field">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" required/>
            </div>

            <div className="actions">
              <button className="button-primary" type="submit">Entrar</button>
              
              <Link to="/register">
                <button type="button">Registrar</button>
              </Link>
            </div>
          </Form>
        </div>
      </RegisterWrapper>
    </DefaultLayout>
  )
}
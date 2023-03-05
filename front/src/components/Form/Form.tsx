import styled from '@emotion/styled';

export const Form = styled.form`
  .field {
    input {
      display: block;
      width: 100%;
      border-color: #bbb;
    }
  }

  .actions {
    display: flex;
    gap: 8px;
  }
`;

export const isEmail = (email: string) => {
  return email.toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
// export const Text = styled.span`
//   font-weight: 600;
//   margin-bottom: 5px;
// `;

export const Input = styled.input`
  height: 40px;
  width: 600px;
  padding: 0 10px 0 10px;
  &::placeholder {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background-color: #4b4b4b;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
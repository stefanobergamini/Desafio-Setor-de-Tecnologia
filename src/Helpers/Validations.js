import { swalAlert } from "./Swal";

function isValidDocument(document) {
  let Soma;
  let Resto;
  Soma = 0;
  if (document === "00000000000" ||
    document === "11111111111" ||
    document === "22222222222" ||
    document === "33333333333" ||
    document === "44444444444" ||
    document === "55555555555" ||
    document === "66666666666" ||
    document === "77777777777" ||
    document === "88888888888" ||
    document === "99999999999") return false;

  for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(document.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(document.substring(9, 10))) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(document.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(document.substring(10, 11))) return false;

  return true;
}

export const validateFields = (cpf, name, lastName) => {
  if (!name) {
    swalAlert.fire({
      title: "Preencha o nome!",
      timer: 3000
    });
    return false
  }
  if (!lastName) {
    swalAlert.fire({
      title: "Preencha o sobrenome!",
      timer: 3000
    });
    return false
  }
  if (!cpf) {
    swalAlert.fire({
      title: "Preencha o CPF!",
      timer: 3000
    });
    return false
  }
  if (!isValidDocument(cpf)) {
    swalAlert.fire({
      title: "CPF inválido",
      timer: 3000
    });
    return false
  }

  return true
}

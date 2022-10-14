export const validateLoginForm = ({ email, password }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, password, username }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);

  return isEmailValid && isPasswordValid && isUsernameValid;
};

const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 20;
};

const validateUsername = (username) => {
  return username.length >= 6 && username.length <= 20;
};

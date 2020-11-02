import { RegisterInput } from '../resolvers/RegisterInput';

export const validateRegister = (options: RegisterInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Invalid email',
      },
    ];
  }
  if (options.fistName.length <= 2) {
    return [
      {
        field: 'firstName',
        message: 'Length must be greater than 2',
      },
    ];
  }
  if (options.lastName.length <= 2) {
    return [
      {
        field: 'lastName',
        message: 'Length must be greater than 2',
      },
    ];
  }
  if (options.password.length <= 4) {
    return [
      {
        field: 'password',
        message: 'Length must be greater than 4',
      },
    ];
  }

  return null;
};

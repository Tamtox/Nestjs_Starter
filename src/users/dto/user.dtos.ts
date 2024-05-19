import {
  createDateTimeValidator,
  createNumberValidator,
  createPasswordValidator,
  createStringValidator,
  createUUIDValidator,
} from 'src/validation/zod/zod_validators';
import { z } from 'zod';

// Sign Up --------------------------------------------------------------------------------------------------------------------
export const signUpBodySchema = z.object(
  {
    username: createStringValidator('Name', {
      minLength: 1,
      maxLength: 255,
    }).optional(),
    email: createStringValidator('Email', {
      minLength: 1,
      maxLength: 255,
    }).email('Invalid email format'),
    password: createPasswordValidator('Password'),
  },
  {
    invalid_type_error: 'Sign Up body should be an object',
    required_error: 'Sign Up body is required',
  },
);

export type SignUpBodyDto = z.infer<typeof signUpBodySchema>;

// Sign In --------------------------------------------------------------------------------------------------------------------
export const signInBodySchema = z.object(
  {
    email: createStringValidator('Email', {
      minLength: 1,
      maxLength: 255,
    })
      .email('Invalid email format')
      .optional(),
    username: createStringValidator('Username', {
      minLength: 1,
      maxLength: 255,
    }).optional(),
    password: createPasswordValidator('Password'),
  },
  {
    invalid_type_error: 'Sign In body should be an object',
    required_error: 'Sign In body is required',
  },
);

export type SignInBodyDto = z.infer<typeof signInBodySchema>;

// Create User --------------------------------------------------------------------------------------------------------------------
export const createUserBodySchema = z.object(
  {
    username: createStringValidator('Name', {
      minLength: 1,
      maxLength: 255,
    }).optional(),
    email: createStringValidator('Email', {
      minLength: 1,
      maxLength: 255,
    }).email('Invalid email format'),
    password: createPasswordValidator('Password'),
  },
  {
    invalid_type_error: 'Create User body should be an object',
    required_error: 'Create User body is required',
  },
);

export type CreateUserBodyDto = z.infer<typeof createUserBodySchema>;

// Update User -------------------------------------------------------------------------------------------------------------------------

export const updateUserBodySchema = z.object(
  {
    id: createUUIDValidator('User ID'),
    username: createStringValidator('Name', {
      minLength: 1,
      maxLength: 255,
    }).optional(),
    oldPassword: createPasswordValidator('Old Password').optional(),
    newPassword: createPasswordValidator('New Password').optional(),
  },
  {
    invalid_type_error: 'Update User body should be an object',
    required_error: 'Update User body is required',
  },
);

export type UpdateUserBodyDto = z.infer<typeof updateUserBodySchema>;

// Reset User Password ---------------------------------------------------------------------------------------------------------------
export const resetUserPasswordBodySchema = z.object(
  {
    email: createStringValidator('Email', {
      minLength: 1,
      maxLength: 255,
    }).email('Invalid email format'),
  },
  {
    invalid_type_error: 'Reset User Password body should be an object',
    required_error: 'Reset User Password body is required',
  },
);

export type ResetUserPasswordBodyDto = z.infer<
  typeof resetUserPasswordBodySchema
>;

// List Users ---------------------------------------------------------------------------------------------------------------------
export const listUsersDto = z.object(
  {
    id: createUUIDValidator('User ID').optional(),
    username: createStringValidator('Username').optional(),
    page: createNumberValidator('Page', {
      min: 1,
      isInt: true,
      isPositive: true,
    }).optional(),
    pageSize: createNumberValidator('Page Size', {
      min: 1,
      isInt: true,
      isPositive: true,
    }).optional(),
    createdDateStart: createDateTimeValidator('Created Date Start').optional(),
    createdDateEnd: createDateTimeValidator('Created Date End').optional(),
    updatedDateStart: createDateTimeValidator('Updated Date Start').optional(),
    updatedDateEnd: createDateTimeValidator('Updated Date End').optional(),
  },
  {
    invalid_type_error: 'List Users query should be an object',
    required_error: 'List Users query is required',
  },
);

export type ListUsersQueryDto = z.infer<typeof listUsersDto>;

import { Injectable } from '@nestjs/common';
import {
  CreateUserBodyDto,
  ListUsersQueryDto,
  ResetUserPasswordBodyDto,
  SignInBodyDto,
  UpdateUserBodyDto,
} from './dto/user.dtos';

@Injectable()
export class UsersService {
  signIn(body: SignInBodyDto) {
    console.log(body);
    return 'Sign in';
  }
  signUp(body: SignInBodyDto) {
    console.log(body);
    return 'Sign up';
  }
  createUser(body: CreateUserBodyDto) {
    console.log(body);
  }
  updateUser(body: UpdateUserBodyDto) {
    console.log(body);
  }
  listUsers(queries: ListUsersQueryDto) {
    console.log(queries);
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Alice Caeiro' },
      { id: 3, name: 'Who Knows' },
    ];
  }
  resetUserPassword(body: ResetUserPasswordBodyDto) {
    console.log(body);
    return 'Reset user password';
  }
}

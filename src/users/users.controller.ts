import { Controller, Get, Post, Body, Patch, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserBodyDto,
  ListUsersQueryDto,
  ResetUserPasswordBodyDto,
  SignInBodyDto,
  SignUpBodyDto,
  UpdateUserBodyDto,
} from './dto/user.dtos';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('sign-in') // Sign In ----------------------------------------------------------------------------------------------------------------
  signIn(@Body() body: SignInBodyDto) {
    return this.usersService.signIn(body);
  }

  @Post('sign-up') // Sign Up ----------------------------------------------------------------------------------------------------------------
  signUp(@Body() body: SignUpBodyDto) {
    return this.usersService.signUp(body);
  }
  @Post() // Create User --------------------------------------------------------------------------------------------------------------------
  createUser(@Body() body: CreateUserBodyDto) {
    return this.usersService.createUser(body);
  }

  @Patch(':id') // Update User ---------------------------------------------------------------------------------------------------------------
  updateUser(@Body() body: UpdateUserBodyDto) {
    return this.usersService.updateUser(body);
  }

  @Get(':id/reset-password') // Reset User Password -----------------------------------------------------------------------------------------
  resetUserPassword(@Body() body: ResetUserPasswordBodyDto) {
    const users = this.usersService.resetUserPassword(body);
    return users;
  }
  @Get(':id') // Get User ------------------------------------------------------------------------------------------------------------------
  getUser(@Query('id') id: string) {
    const users = this.usersService.listUsers({ id });
    return users;
  }
  @Get() // List Users ---------------------------------------------------------------------------------------------------------------------
  listUsers(@Query() query: ListUsersQueryDto) {
    const users = this.usersService.listUsers(query);
    return users;
  }
}

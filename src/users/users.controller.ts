import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserBodyDto,
  SignUpBodyDto,
  UpdateUserBodyDto,
} from './dto/user.dtos';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('sign-up')
  signUp(@Body() signUpBodyDto: SignUpBodyDto) {
    return this.usersService.create(signUpBodyDto);
  }
  @Post()
  create(@Body() createUserDto: CreateUserBodyDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserBodyDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

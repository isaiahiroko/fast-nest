import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CommonController } from '../../common/common.controller';
import { Observable } from 'rxjs';

@Controller('users')
export class UserController extends CommonController<User>{

  constructor(private readonly userService: UserService) {
    super(userService)
  }

  @Post('create')
  create(@Body() entity: User): Observable<User> {
    return this.service.create(entity)
  }

}

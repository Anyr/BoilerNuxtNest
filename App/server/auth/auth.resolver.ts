import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { UserInput } from '../user/user.input';
import { User } from '../user/user.entity';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => User)
  async login(@Args('input') user: UserInput) {
    return await this.authService.login(user);
  }
}

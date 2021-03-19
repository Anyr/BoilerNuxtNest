import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserInput } from './user.input';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Logger, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  private readonly logger = new Logger(RolesGuard.name);

  @Query(() => String)
  async hello() {
    return await 'world';
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async me(@Context('user') user: User) {
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => User)
  async user(@Args('_id', { type: () => String }) _id: string) {
    return this.userService.findOneById(_id);
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async userByUsername(
    @Args('username', { type: () => String }) username: string,
  ) {
    return this.userService.findOneByUsername(username);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: UserInput) {
    return await this.userService.create(input);
  }

  @Mutation(() => User)
  async deleteUser(@Args('username') username: string) {
    return await this.userService.delete(username);
  }
}

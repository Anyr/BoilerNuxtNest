import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserInput } from '../user/user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUser(userData: UserInput): Promise<any> {
    const user = await this.userService.findOneByUsername(userData.username);

    if (user && bcrypt.compareSync(userData.password, user.password)) {
      return user;
    }
    return null;
  }

  public async login(userInput: UserInput): Promise<any | { status: number }> {
    return this.validateUser(userInput).then((userData) => {
      if (!userData) {
        return { status: 404 };
      }
      const payload = { username: userData.username, sub: userData._id };
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600,
        access_token: accessToken,
        status: 200,
      };
    });
  }
}

import { Module } from '@nestjs/common';
import { User } from '../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],
  providers: [UserService, AuthService, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}

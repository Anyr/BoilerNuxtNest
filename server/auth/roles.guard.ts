import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { roleHierarchy } from './constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  private readonly logger = new Logger(RolesGuard.name);

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const ctx = GqlExecutionContext.create(context).getContext();
    if (!roles) {
      return true;
    }
    const user = ctx.user;
    return this.matchRoles(roles, user.roles);
  }

  private matchRoles(targetRoles: string[], userRoles: string[]) {
    const levelTarget = roleHierarchy.roles.indexOf(targetRoles[0]);
    const userRight = roleHierarchy.roles.indexOf(userRoles[0]);

    if (userRight === undefined || levelTarget === undefined) {
      throw new HttpException(
        'Role not in hierarchy',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    if (levelTarget < userRight) {
      throw new HttpException('Not Enough permission', HttpStatus.UNAUTHORIZED);
    }
    return true;
  }
}

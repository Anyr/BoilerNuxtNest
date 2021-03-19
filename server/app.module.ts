//Core
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//API
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//Client
import { NuxtController } from './nuxt.controller';
import { AuthModule } from './auth/auth.module';
//Lib

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/**.graphql'],
      playground: true,
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'change uri here'
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      ssl: true,
      authSource: 'admin',
      w: 'majority',
      replicaSet: 'atlas-1p9ulk-shard-0',
      entities: [__dirname + '/../**/**.entity{.ts,.js}'],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, NuxtController],
  providers: [AppService],
})
export class AppModule {}

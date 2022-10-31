import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { CardModule } from './card/card.module';
import { CoinModule } from './coin/coin.module';
import { UserModule } from './user/user.module';

require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
    UserModule,
    AccountModule,
    CoinModule,
    CardModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    AppResolver
  ],
})
export class AppModule {}

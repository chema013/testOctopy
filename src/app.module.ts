import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORMHOST,
      port: 3306,
      username: process.env.TYPEORMUSERNAME,
      password: process.env.TYPEORMPASSWORD,
      database: process.env.TYPEORMDATABASE,
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

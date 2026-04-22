import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
   imports: [
    UsersModule,
    JwtModule.register({
      secret: 'SALUD_YA_SECRET_KEY', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [UserModule,
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '10days' },
        }),
    ],
    controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
    
})
export class AuthModule {}

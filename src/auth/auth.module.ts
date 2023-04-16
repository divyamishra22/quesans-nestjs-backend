import { Module } from '@nestjs/common';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [UserModule,
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '10days' },
        }),
    ],
    
})
export class AuthModule {}

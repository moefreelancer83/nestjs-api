import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('jwt') {
  // 'jwt' is the name of the strategy that we defined in the jwt.strategy.ts file, it can be any name, but it has to be the same name that we use in the jwt.strategy.ts file in PassportStrategy(Strategy, 'jwt')
  constructor() {
    super();
  }
}

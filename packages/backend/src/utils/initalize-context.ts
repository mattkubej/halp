import { Context as KoaContext } from 'koa';
import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import jwt from 'jsonwebtoken';
import { User } from '../entities';
import { jwtPayload, Context } from '../types';

interface ApolloContext {
  ctx: KoaContext;
}

export function initializeContext(orm: MikroORM<IDatabaseDriver<Connection>>) {
  return async function ({ ctx }: ApolloContext): Promise<Context> {
    const token = ctx.cookies.get('token');

    if (token === undefined) {
      return {
        ctx,
        em: orm.em,
        user: null,
      };
    }

    const payload = jwt.decode(token) as jwtPayload;
    const userRepository = orm.em.getRepository(User);
    const user = await userRepository.findOne({
      id: payload?.sub,
    });

    return {
      ctx,
      em: orm.em,
      user,
    };
  };
}

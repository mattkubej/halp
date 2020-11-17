import { User } from '../entities';
import { Context } from '../types';
import jwt from 'jsonwebtoken';

export function getProfile(context: Context) {
  return context.user;
}

export interface SignUpInput {
  username: string;
  email: string;
  password: string;
}

export async function signUp(input: SignUpInput, context: Context) {
  // TODO: do not create users with the same name or email
  const user = Object.assign(new User(), {
    username: input.username,
    email: input.email,
    passwordHash: input.password,
  });

  await context.em.persist(user).flush();

  // TODO: duplication with signIn
  const token = jwt.sign(
    {
      roles: ['user'],
    },
    'topsecret',
    {
      algorithm: 'HS256',
      subject: user.id,
      expiresIn: '1d',
    }
  );

  context.ctx.cookies.set('token', token, {
    httpOnly: false,
    secure: false,
  });
}

export async function signIn(
  username: string,
  password: string,
  context: Context
) {
  const userRepository = context.em.getRepository(User);
  const user = await userRepository.findOne({
    username,
  });

  if (user === null) {
    throw new Error('user not found');
  }

  // TODO: make this more secure
  if (user.passwordHash !== password) {
    throw new Error('incorrect password');
  }

  const token = jwt.sign(
    {
      roles: ['user'],
    },
    'topsecret',
    {
      algorithm: 'HS256',
      subject: user.id,
      expiresIn: '1d',
    }
  );

  context.ctx.cookies.set('token', token, {
    httpOnly: false,
    secure: false,
  });
}

export function signOut(context: Context) {
  context.ctx.cookies.set('token', '', {
    httpOnly: false,
    secure: false,
  });
}

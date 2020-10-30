import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from 'type-graphql';
import { User } from '../entities';
import { Context } from '../types';

@ObjectType()
class Result {
  @Field()
  ok: boolean = true;
}

@InputType()
class SignUpInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
class SignInInput {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@Resolver(() => User)
export class UserResolver {
  @Mutation(() => Result)
  async signUp(
    @Arg('input') input: SignUpInput,
    @Ctx() ctx: Context
  ): Promise<Result> {
    const user = new User();
    user.username = input.username;
    user.passwordHash = input.password;
    user.email = input.email;

    await ctx.em.persist(user).flush();

    return new Result();
  }

  @Mutation(() => Result)
  async signIn(
    @Arg('input') input: SignInInput,
    @Ctx() ctx: Context
  ): Promise<Result> {
    const userRepository = ctx.em.getRepository(User);
    const user = await userRepository.findOne({
      username: input.username,
    });

    if (user === null) {
      throw new Error('user not found');
    }

    if (user.passwordHash !== input.password) {
      throw new Error('incorrect password');
    }

    return new Result();
  }
}
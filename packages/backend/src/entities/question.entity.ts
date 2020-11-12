import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  Property,
} from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';
import { QuestionValidator } from '../validators';
import { Base } from './base.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';

@ObjectType()
@Entity()
export class Question extends Base<Question> {
  @Field()
  @Property()
  answers: number = 0;

  @Field()
  @ManyToOne()
  user!: User;

  @Field()
  @Property({ type: 'text' })
  body!: string;

  @Field()
  createdAtRelative!: string;

  @Field()
  excerpt!: string;

  @Field()
  @Property()
  question!: string;

  @Field(() => [Tag])
  @ManyToMany({ entity: () => Tag, eager: true })
  tags = new Collection<Tag>(this);

  @Field()
  @Property()
  views: number = 0;

  @Field()
  @Property()
  votes: number = 0;

  constructor(input: QuestionValidator) {
    super(input);
  }
}

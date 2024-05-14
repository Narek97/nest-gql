import { BaseModel } from '../base.model';
import { Column, DataType, Table } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';

interface CreateCompanyAttr {
  email: string;
  name: string;
  password: string;
  avatar: string | null;
  verified: boolean;
}

@Table({ tableName: 'companies' })
@ObjectType()
export class Companies extends BaseModel<Companies, CreateCompanyAttr> {
  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: true, defaultValue: null })
  avatar: string;

  @Field(() => Boolean)
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  verified: boolean;
}

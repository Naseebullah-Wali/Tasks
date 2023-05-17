'use strict';
import { Model, Column,HasMany, DataType, Table,BeforeCreate,BeforeUpdate } from 'sequelize-typescript';
import { hashPassword } from '../utils/password';
import BlogPost from './blogpost';


@Table({
  tableName: 'users',
  timestamps: true,
})
class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    set: function (this: User, value: string) {
      this.setDataValue('token', value);
    },
    get: function (this: User) {
      return this.getDataValue('token');
    },
  })
  token!: string;

  @HasMany(() => BlogPost)
  blogPosts!: BlogPost[];


  @BeforeCreate
  @BeforeUpdate
    static generatePasswordHash(instance: User) {
        const { password } = instance

        if (instance.changed('password')) {
            instance.password = hashPassword(password)
        }
    }
  static associate(models: any) {
    // define association here
  }
}

export default User;
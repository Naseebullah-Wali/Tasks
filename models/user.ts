'use strict';
import { Model, Column, DataType, Table,BeforeCreate,BeforeUpdate } from 'sequelize-typescript';
import { hashPassword } from '../utils/password';


@Table({ timestamps: true })
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ allowNull: false })
  firstName!: string;

  @Column({ allowNull: false })
  lastName!: string;

  @Column({ unique: true, allowNull: false })
  email!: string;

  @Column({ allowNull: false })
  password!: string;

  @Column({ allowNull: true })
  token!: string;


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

import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import  User  from './user';

@Table({ timestamps: true })
export class Post extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ allowNull: false })
  title!: string;

  @Column({ allowNull: false })
  content!: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  authorId!: number;

  @BelongsTo(() => User)
  author?: User;
}

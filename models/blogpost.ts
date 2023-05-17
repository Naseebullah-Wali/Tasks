import { Model, Column, DataType, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './user';

@Table({
  tableName: 'blog_posts',
  timestamps: true,
})
class BlogPost extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  recordingDate!: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  message!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  authorId!: number;

  @BelongsTo(() => User)
  author!: User;
}

export default BlogPost;

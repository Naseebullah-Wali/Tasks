// instance of sequelize
import {Sequelize} from 'sequelize-typescript';
import User from '../models/user';
import BlogPost from '../models/blogpost';

const sequelize:Sequelize = new Sequelize({
    database: 'task',
    dialect: 'sqlite',
    username: 'us1',
    password: 'pass',
    storage: 'db/dev.sqlite'
    

});
const models = [User, BlogPost]

sequelize.addModels(models)


sequelize.sync().then(()=>{
    console.log("database is synced and ready ! ")
}).catch(
    (e)=>console.log(e)
)

export default sequelize;
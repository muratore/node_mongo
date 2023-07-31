import mongoose from "mongoose";
import 'dotenv/config'

const PASSWORD = process.env.DB_PASSWORD
const USER = process.env.DB_USER

// conectando no banco Mongo Atlas
 const dbConnect = mongoose
.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.xaqfopc.mongodb.net/dc_fs12?retryWrites=true&w=majority`)
// mongoose.connect(`mongodb://${USER_COMPASS}${PASSWORD_COMPASS}localhost:27017/?authMechanism=DEFAULT`)
.then(()=>{console.log('BD conectado com sucesso')})
.catch((error)=>{
 console.log('Erro ao conectar no banco de dados');
})
export default dbConnect;
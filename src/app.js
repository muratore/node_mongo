import morgan from "morgan";
// import { dbConnect } from "./db/dbConnect";
// dbConnect
import express from 'express';
import routes from "./routes/index.js";

const app = express();

app.use(express.urlencoded({extended:true}))

app.use(morgan('combined'))

routes(app)
//endpoint inicial
export default app
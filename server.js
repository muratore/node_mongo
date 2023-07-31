import { Usuario } from './src/models/Usuario.js';
import './src/db/dbConnect.js'

import app from './src/app.js';

// compass connection

const HOST = 'localhost'
const PORT = 3000

app.listen(PORT, ()=>console.log(`Server running at port ${HOST}:${PORT}`))
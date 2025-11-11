const express = require('express');
const dotenv= require('dotenv');
const morgan = require('morgan');
const cors= require('cors')
const { User, Product } = require('./database/models/')

const userRoutes= require('./routes/user.routes.js')
const authRoutes= require('./routes/auth.routes.js')
const productRoutes= require('./routes/product.routes.js')

const app= express();
dotenv.config();

const PORT= 3000; //process.env.PORT || 3001 //oare dc nu mi merge?

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) =>{
    res.status(200).json({ message: 'Hello' });
})

app.listen(PORT, () =>{
    console.log(`Server successfully started on port ${PORT}`)
})

//npm run dev- ca sa pornesc server ul
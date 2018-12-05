import express from 'express';
import middlewareConfig from './config/middleware'

import './config/db'
import { CustomerRoutes} from './modules'

const app = express();

middlewareConfig(app);

app.get('/',  (req, res) => {
    res.send(`Welcome to something something at KASILAM`);
});

app.use('/api/v1/customers/', CustomerRoutes)

app.listen(3000, err=> { 
    if(err){
        console.error(err);      
    }else{
        console.log(`Server running on port 3000`);
        
    }
})   
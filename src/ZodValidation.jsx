import {z} from 'zod';
const userdataSchema = z.object({
    name:z.string(),
    age:z.number().min(18, 'Age should be more than 18'),
    address:z.object({
        street:z.string(),
        city:z.string(),
        country:z.string()
    })
    
});
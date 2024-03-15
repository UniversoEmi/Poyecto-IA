import mercadopago from "mercadopago";

export const createOrder = async (req, res) => {
    
    mercadopago.configure({
        access_token: 
        'EST-1803343693495513-031302-c1900d6daa9003f2b3c54e32a6c102c5-1726167154',
    });
    

const result = await mercadopago.preferences.create({
    items: [
        {
            title: "Laptop",
            unit_price: 12000,
            currency_id: "ARS",
            quantity: 1,

        }]

})

console.log(result)

res.send("crando orden");
};
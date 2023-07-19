import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(`mongodb+srv://prajwolneupane68:${encodeURIComponent("s@fn39tb")}@cluster0.xgkgj0h.mongodb.net/?retryWrites=true&w=majority`);

        const connection = mongoose.connection;

        connection.on('connected',()=>{
        })

        connection.on('error',(error) => {
            console.log('MongoDB connected error');
            console.log(error);
        })

    }catch(error){
        console.log(error);
    }
}
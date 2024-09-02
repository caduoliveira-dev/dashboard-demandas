import mongoose from 'mongoose'

mongoose.set("strictQuery", true)

const dbname = "demandas"
const url = `mongodb+srv://ribeirocarlosoliveir:${process.env.DB_PWD}@demandas-auditoria.urx5e.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=demandas-auditoria`

const connect = async() =>{
    return await mongoose.connect(url)
}

const disconnect = async () => {
    return await mongoose.disconnect()
}

const database = {
    connect,
    disconnect
}

export default database
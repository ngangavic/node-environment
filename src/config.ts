import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
})

var config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT as unknown as number || 8000
} 

export { config }
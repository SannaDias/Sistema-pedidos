module.exports = {
    server: {
       port: process.env.PORT || 3000,
     } ,
    database:{
        connection: process.env.connection || 'mongodb://127.0.1:27017'
    },
    auth: {
        secret: "c1c2c3c4c5"
    }
}
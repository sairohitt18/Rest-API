const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_Immortal",
    password: "@!?7yQNc7m&w#UH",
    database: "freedb_Immortal"
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connected to database");
    }
});

module.exports = connection;
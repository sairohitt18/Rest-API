const connection = require("../db/config");

module.exports = {
    getAllUsers:(req,res)=>{
        connection.query("SELECT * FROM users",(err,results)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error retrieving users");
            } else{
                res.json(results);
            }
        });
    },
    deleteUser: (req,res)=>{
        const id = req.params.id;
        connection.query("DELETE FROM users WHERE id=?",[id],(err,results)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error deleting user");
            } else{
                res.status(200).send("User Deleted");
            }
        });
    }
};
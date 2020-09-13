var mysql = require('mysql');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const router= express.Router();


const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "sameer",
    password: "8818810358",
    database: "school"
});


app.post("/mywebsite", function (req, res) {
    var data = req.body;
    console.log(data);
    console.log("got the data");
    console.log("hee");

    var queryString = "insert into StudentInfo4 values('" + data.Name + "', '" + data.Roll_No + "', '" + data.Branch + "', '" + data.Email + "', '" + data.text + "')";
    console.log(queryString);
    
    console.log("ok");
    console.log("okay");
    con.connect(function(error){
        if(error) throw error;
        con.query(queryString, function(error,result){
            if (error) throw error;
            console.log(result);
        })
    })

})


app.post("/showdata", function (req, res) {
    console.log("okay");
    var info = req.body;
    console.log(info);
   
    //res.send(result)
    //console.log(result);
    
    
    // con.connect(function (error) {
    //     if (error) throw error;
    //     else console.log("connected");
        
            var queryString = "select * from StudentInfo4 where Roll_No=" + req.body.Roll_No;
         con.query(queryString, function (error, result) {
            if (error) {throw error;}
            {
                console.log(result[0]);
                console.log("okay");
                res.send(result[0-4])
              }
        })
        
    
})

    app.post("/editdata", function (req, res) {
        var data = req.body;
        console.log(data);
        console.log("got the data");
        console.log("hee");
                        
        var queryString = "update StudentInfo4 set Name='"+data.Name+"',Roll_No= '"+data.Roll_No+"',Branch= '"+data.Branch+"',Email= '"+data.Email+"',text= '"+data.text+"' where Roll_No='"+data.editRoll_No+"' ;  ";
        console.log(queryString);
        
        console.log("ok");
        console.log("okay");
        con.connect(function(error){
            if(error) throw error;
            con.query(queryString, function(error,result){
                if (error) throw error;
                console.log(result);
            })
        })
    
    })
    app.post("/deletedata", function (req, res) {
        var data = req.body;
        console.log(data);
        console.log("got the data");
        console.log("hee");
                        
        var queryString = "delete from StudentInfo4  where Roll_No='"+data.editRoll_No+"' ;  ";
        console.log(queryString);
        
        console.log("ok");
        console.log("okay");
        con.connect(function(error){
            if(error) throw error;
            con.query(queryString, function(error,result){
                if (error) throw error;
                console.log(result);
            })
        })
    
    })
    
    //console.log(result.result);
    // return result;
    

console.log("okay");

app.listen(4500, function (req, res) {
    console.log("okay");
    console.log("server running")
})






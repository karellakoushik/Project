const express = require("express");
const userModel = require("../models/models.js");
const machineModel = require("../models/machine.js");
const domainModel = require("../models/domain.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const authing = require("./authing.js")

////////////////////////////////////////////////////////////////////////////////////////


const jwt = require("jsonwebtoken");
const app = express();

////////////////////////////////////////////////////////////////////////////////////////

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

///////////////////////////////// LOGIN ROUTES ///////////////////////////////////////////////////////

app.post("/register", async (request, response) => {
  console.log(request.body);
    var n =await userModel.findOne({ "Email": request.body.Email});
    if(n)
    {
      response.send("Email already exists");
    }
    else
    {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(request.body.password, salt);
        request.body.password = hashedPassword;
        const user = new userModel(request.body);
        await user.save(err=>{
        if(err)
        {
          response.send(err);
        }
        else{
          response.send("Successfully registered");
        }   
      })
        console.log(user);
      } catch (err) {
          console.log(err);
      }
    }
});

app.post("/login", async (request, response) => {

  try {
    
    var n =await userModel.findOne({ "Email": request.body.Email});
    if(!n || !await bcrypt.compare(request.body.password,n.password)){
      response.send("Invalid Email or Password");
    }
    else{
      var token = jwt.sign({"Email":n.Email, _id: n._id }, "thisissecret", { expiresIn: "1h" });
    // response.status(200).json({"Email":n.Email,_id: n._id,"token":token});
    response.cookie("token", token,{
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 
    }).json({"Email":n.Email,_id: n._id,"name":n.FirstName});
    }
  } catch (error) {
    console.log(error);
  } 
  });
  
app.get("/users", authing ,async (request, response,next) => {  
      console.log("protected route");
      response.send("this is from protected route");
});

  // console.log(request.cookies["token"]);
  //     try {
  //       if(!request.cookies["token"]){
  //         throw new Error("Unauthorized");
  //     ``}
  //       const t = jwt.verify(request.cookies["token"], "thisissecret");
  //       console.log(t);
  //       var n =await userModel.findOne({ _id: t._id});
  //       if(n){
  //         try {
  //           console.log(request.cookies["token"]);
  //           response.send("Authorized");
  //         } catch (error) {
  //           response.status(401).send(error);
  //         }
  //       }
  //     }
  //     catch (error) {
  //       response.status(401).send(error);
  //     }
      

  app.post("/register", async (request, response) => {
    console.log(request.body);
      var n =await userModel.findOne({ "Email": request.body.Email});
      if(n)
      {
        response.send("Email already exists");
      }
      else
      {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(request.body.password, salt);
          request.body.password = hashedPassword;
          const user = new userModel(request.body);
          await user.save(err=>{
          if(err)
          {
            response.send(err);
          }
          else{
            response.send("Successfully registered");
          }   
        })
          console.log(user);
        } catch (err) {
            console.log(err);
        }
      }
  });
////////////////////////////////////////// MACHINE ROUTE //////////////////////////////////////////////

app.post("/register-machine", async (request, response) => {
  console.log(request.body);
    var n =await machineModel.findOne({ "MachineName": request.body.MachineName});
    if(n)
    {
      response.send("Machine already exists");
    }
    else
    {
      try {
        const machine = new machineModel(request.body);
        await machine.save(err=>{
        if(err)
        {
          response.send(err);
        }
        else{
          response.send("Successfully registered Machine");
        }   
      })
      } catch (err) {
          console.log(err);
      }
    }
});

app.get('/machines', async(request,response) => {
  try
  {
      const data = await machineModel.find()
      var e=data.map((obj)=>
      {
          return  {
              machinename:obj.machinename,
              status:obj.status,
              _id:obj._id
          } 
      })
      response.send(data)
  }
  catch(err)
  {
    response.send('Error ' + err)
  }
})

app.post('/getmachine', async(request,response) => {
  try
  {
    console.log(request.body.id)
      const data = await machineModel.findById(request.body.id)
      // var e=data.map((obj)=>
      // {
      //     return  {
      //         machinename:obj.machinename,
      //         status:obj.status,
      //         _id:obj._id
      //     } 
      // })
      console.log(data)
      response.send(data)
      if(!data)
      {
        response.status(401).send("Machine not found")
      }
  }
  catch(err)
  {
    response.send('Error ' + err)
  }
})

///////////////////////////////////// DOMAIN ROUTES ///////////////////////////////////////////////////

app.post("/register-domain", async (request, response) => {
  console.log(request.body);
    var n =await domainModel.findOne({ "Domain": request.body.Domain});
    if(n)
    {
      response.send("Domain already exists");
    }
    else
    {
      try {
        const domain = new domainModel(request.body);
        await domain.save(err=>{
        if(err)
        {
          response.send(err);
        }
        else{
          response.send("Successfully registered domain");
        }   
      })
      } catch (err) {
          console.log(err);
      }
    }
});

app.get('/domain', async(request,response) => {
  try
  {
      const data = await domainModel.find()
      var e=data.map((obj)=>
      {
          return  {
            Domain:obj.Domain,
              //id:obj._id
          } 
      })
      response.send(data)
  }
  catch(err)
  {
    response.send('Error ' + err)
  }
})


////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////// LOGOUT ROUTE ///////////////////////////////////////////////////

app.post("/logout", async (request, response) => {
  response.clearCookie("token");
  response.send("logged out");
});

module.exports = app;
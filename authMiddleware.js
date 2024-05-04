
const jwt = require('jsonwebtoken');
const { promisify } = require('util');


module.exports = {
  verificarToken: async function (req, res, next) {
    const authHeader = req.header('Authorization');
   // console.log(authHeader);
    if(!authHeader){
      return res.status(400).json({
        erro: true,
        message: "Error: You need to log in to access the page! Token A is missing!"
      });
    }
    const [, token ] = authHeader.split(' ');
    //console.log( "token: " + token);
    if(!token){
      return res.status(400).json({
        erro: true,
        message: "Error: You need to log in to access the page! Token B is missing!"
      });
    }
  
    try{
      const decode = await promisify(jwt.verify)(token, "SDONCPLATRSVCUXMOBWPQBVA823P1N92WS");
      req.userId = decode.id;
      return next();
    } catch(err){
      return res.status(400).json({
        erro: true,
        message: "Error: You need to log in to access the page! Invalid token!"
      });
    }
    
  }
   
}

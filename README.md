# Welcome to APP AdmSys Backend
### Deploy to Heroku [BackAdmSys](https://backadmsys.herokuapp.com/).

 The Backend of  App **Admsys** is created with love & uses technologies such as:
 - NodeJS.
 - Express.
 - MongoDB.
 - Mongoose.
 - JsonWebToken.
 - BcryptJS.
 - Dotenv.
 - Body Parser.

Use Postman for request:
[![Server Online](https://i.gyazo.com/84c37f2876870349993b53947c85686f.gif)](https://gyazo.com/84c37f2876870349993b53947c85686f)

## Endpoints

- Register User (POST):
>/users/register
>[![Register User](https://i.gyazo.com/852fa82abcec3273bd3e1ea0051ae32e.gif)](https://gyazo.com/852fa82abcec3273bd3e1ea0051ae32e)
>Register Admin User:
>[![Image from Gyazo](https://i.gyazo.com/8421f0fc43b16a368d5689ed211cad43.gif)](https://gyazo.com/8421f0fc43b16a368d5689ed211cad43)

- Login User (POST):
>/users/login
>[![Image from Gyazo](https://i.gyazo.com/8ab9d2c347e91a1fe7e1cb2aa294495d.gif)](https://gyazo.com/8ab9d2c347e91a1fe7e1cb2aa294495d)

- View User (GET):
> /users/id/:userId
> Params: userId
- Logout User (POST):
> /users/logout
> [![Image from Gyazo](https://i.gyazo.com/8ea04bf1fb9133752517cb1562342d19.gif)](https://gyazo.com/8ea04bf1fb9133752517cb1562342d19)
> Body: email.
> 
- View Users (GET):
> /users/showAll
> [![Image from Gyazo](https://i.gyazo.com/124028caa17701978fb447513c5c8254.gif)](https://gyazo.com/124028caa17701978fb447513c5c8254)

- Create Tickets (POST):
> /users/:dni/tickets
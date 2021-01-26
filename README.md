# Welcome to APP AdmSys Backend
### Deploy to Heroku [BackAdmSys](https://backadmsys.herokuapp.com/).

AdmSys is an application for system administration, the backend was developed to create, read, update and delete users, log in with token, create and delete tickets for support cases in the IT department. The option to create, read, update, delete of an inventory of computer equipment and have everything in order within the organisation at a technological level. Easy to manage in the area of user support and computer equipment.

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
>[![Register admin user](https://i.gyazo.com/8421f0fc43b16a368d5689ed211cad43.gif)](https://gyazo.com/8421f0fc43b16a368d5689ed211cad43)
- Login User (POST):
>/users/login
>[![Login User](https://i.gyazo.com/8ab9d2c347e91a1fe7e1cb2aa294495d.gif)](https://gyazo.com/8ab9d2c347e91a1fe7e1cb2aa294495d)

- View User (GET):
> /users/id/:userId
> Params: userId
- Logout User (POST):
> /users/logout
> [![Logout](https://i.gyazo.com/8ea04bf1fb9133752517cb1562342d19.gif)](https://gyazo.com/8ea04bf1fb9133752517cb1562342d19)
> Body: email.
> 
- View Users (GET):
> /users/showAll
> [![View Users](https://i.gyazo.com/124028caa17701978fb447513c5c8254.gif)](https://gyazo.com/124028caa17701978fb447513c5c8254)

- Create Tickets (POST):
> /users/:dni/tickets

> Params: DNI.
> [![create tickets](https://i.gyazo.com/c40d141f27b1fbe04ef54a906498b6b7.gif)](https://gyazo.com/c40d141f27b1fbe04ef54a906498b6b7)
###### frontend-dev-profile

Project for DhwaniRIS

###### Task 1

> Card Input Box:

- I have made four input boxes with the help of looping the parent components
- every input box accepts 4 character
- user can add card numbers to list
- List Array Accepts items and arrange it on order below the card components
- it shows the card numbers and a delete button attached with it
- user can delete the selective card number by clicking the delete button besides it

###### Task 2

> Five Box:

- Made 5 Boxes with the help of `Position:absolute`
- If user will click the Box 1 it will come Up
- if Box 2 will CLicked then Box 1 remain in the same position and box 2 also comeup
- But if user doesn't click the box 2 and clicked on box 1 then box 1 will go **behind**

###### Task 3

> Backend Using MRC:
**installation** 
```_npm i bcrypt cors dotenv express express-validator joi jsonwebtoken mongoose uuid_```


- All files are structured in ** Model, Route, and Controller**
- Created 4 Api for taking the data
- The First One is User Register

  - paste this url to postman **[For Register](http://localhost:5000/api/register)**
  ```
     {
       "email": "MasaiSchool@gmail.com",
       "password": "Mypassword"
     }
  ```

- In this project i have used ```const bcrypt = require("bcryptjs")``` for hashing
- 
  

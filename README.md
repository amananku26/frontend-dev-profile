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

**installation** 
   ```npm i bcrypt cors dotenv express express-validator joi jsonwebtoken mongoose uuid```

> Backend Using MRC:

- All files are structured in ** Model, Route, and Controller**
- For running the server and to connect to DB use ```nodemon server.js```
- Created 4 Api for taking the data
- The First One is User Register

  - paste this url to postman **(http://localhost:5000/api/register)**
  ```
     {
       "email": "MasaiSchool@gmail.com",
       "password": "Mypassword"
     }
  ```

- In this project i have used ```const bcrypt = require("bcryptjs")``` for hashing
- For ID One mongoose default `<_id>` and one i have used to match the state abd district data to child id ```uuidv4()```
- For Login **(http://localhost:5000/api/login)**
  ```
     {
       "email": "MasaiSchool@gmail.com",
       "password": "Mypassword"
     }
  ```
- For Getting the info of state  **(http://localhost:5000/api/getstate)**
- For ```Post``` the data to DB **(http://localhost:5000/api/addstate)**
  ```
     {
        "state":"Bihar"
     }
  ``` 

- For Getting the info of District  **(http://localhost:5000/api/getdistrict)**
- For ```Post``` the data to DB **(http://localhost:5000/api/adddistrict)**
  ```
     {
        "state":"Bihar",
        "district":"Saharsa"
     }
  ``` 

- For Getting the info of Child  **(http://localhost:5000/api/getchild)**
- For ```Post``` the child data to DB **(http://localhost:5000/api/addchild)**
  ```
     {
    "name":"Rahul Gandhi",
    "sex":"Male",
    "dob":"17/12/1987",
    "fatherName":"Rajiv Gandhi",
    "motherName":"Sonia Gandhi",
    "state":"New Delhi",
    "district":"Pritampura",
    "stateid":"3",
    "districtid":"4"
    }
  ```   

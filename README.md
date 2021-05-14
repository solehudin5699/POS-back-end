<h1 align="center">CitaRasa Web - Backend</h1>

<div align="center">
    <img width="250" src="https://raw.githubusercontent.com/solehudin5699/POS-frontend/master/public/logo512.png">
</div>

## Contents

- [Description](#description)
- [Requirements](#requirements)
- [Installation](#installation)
- [Related Project](#related-project)

## Description

This is RESTful api design for
[`CitaRasa Web frontend (POS-frontend repository) `](https://github.com/solehudin5699/POS-frontend.git).
Built with Node js, using ExpressJs framework and other libraries.

## Requirements

- [`Node Js`](https://nodejs.org/en/)
- [`npm`](https://www.npmjs.com/get-npm)
- [`ExpressJs`](https://expressjs.com/)
- [`Postman`](https://www.postman.com/downloads/)
- [`XAMPP`](https://www.apachefriends.org/index.html)

## Installation

1. Open your terminal or command prompt
2. Type `git clone https://github.com/solehudin5699/POS-back-end.git`
3. Open the folder and type `npm install` for install dependencies
4. If you haven't installed nodemon, please install it globally, type
   `npm install -g nodemon`
5. Create database such as named **_products_db_** and import database
   **products_db.sql** in folder sql to your new database
6. Create file **_.env_** in root folder with the following contents :

```bash
DB_HOST = 'localhost'
DB_USERNAME = 'root'
DB_DATABASE = 'products_db'
DB_PASSWORD = ''

PORT = 1000
SECRET_KEY_SUPERVISOR='SUPERviSOr'
SECRET_KEY_CASHIER='CAShieR'
SERVER='http://localhost:1000'
```

Customize DB_HOST, DB_USERNAME, and other key with the one you are using.

7. Run XAMPP control panel
8. Type `npm run server` or `npm start` in terminal for run this backend.

## Related Project

Frontend CitaRasa Web (POS-frontend repository) that use this RESTful API.

<a href="https://github.com/solehudin5699/POS-frontend.git">
<img src="https://img.shields.io/badge/CitaRasa--Web%20Frontend-Repository-blue.svg?style=popout&logo=github"/>
</a>

# User API Documentation

## Endpoints :

List of available endpoints:

- `POST /api/register`
- `GET /api/login`
- `POST / api/createProfile`
- `GET /api/getProfile`
- `PUT /api/updateProfile`

&nbsp;

## 1. POST /api/register

Request:

- body:

```json
{
  "email": "string",
  "username": "string",
  "password": "string",
  "passwordConfirm": "string"
}
```

_Response (201 - Created)_

```json
{
  {"token": "string"}
}
```

&nbsp;

## 2. POST /api/login

Description:
Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
   {"token": "string"}
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email/Password required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email / password"
}
```

&nbsp;

## 3. POST / api/createProfile

Description:
Request:

- headers:

```json
{
  "Authorization": "string (required)"
}
```

_Response (201 - Created)_

```json
{
  "displayName": "string",
  "gender": "string",
  "birthday": "string",
  "horoscope": "string",
  "zodiac": "string",
  "height": "number",
  "weight": "number",
  "user": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Unauthorized"
}
```

&nbsp;

## 4. GET /api/getProfile

Description:

- GET Profile

  Request:

- headers:

```json
{
  "Authorization": "string (required)"
}
```

_Response (200 - OK)_

```json
{
  "_id": "64622881eb9d5f56962afc0c",
  "displayName": "Rivaldo",
  "gender": "Male",
  "birthday": "20-09-1997",
  "horoscope": "leo",
  "zodiac": "leo",
  "height": 12,
  "weight": 12,
  "user": "6461db7855425bceefa92ae7",
  "createdAt": "2023-05-15T12:41:37.823Z",
  "updatedAt": "2023-05-15T18:28:23.297Z",
  "__v": 0
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Unauthorized"
}
```

&nbsp;

## 5. PUT /api/updateProfile

Description:

- PUT profile

  Request:

- headers:

```json
{
  "Authorization": "string (required)"
}
```

_Response (200 - OK)_

```json
{
  "displayName": "string",
  "gender": "string",
  "birthday": "string",
  "horoscope": "string",
  "zodiac": "string",
  "height": "number",
  "weight": "number",
  "user": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Unauthorized"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

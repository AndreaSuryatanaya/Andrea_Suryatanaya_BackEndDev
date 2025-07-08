# Include: A README.md explaining:

## Stack used

-   Typescript
-   Node js
-   Express

## How to run it locally

1.  npm install
2.  npm run dev

## API Spec Documentation

Running : localhost:3000

##

### GET Leads

Endpoint : GET /leads

Response Body (Success) :

```
{
    "id": 1,
    "name": "andrea",
    "email": "andrea@gmail.com",
    "phone": "+62812147147",
    "status": "new"
}
```

##

### ADD Leads

Endpoint : POST /leads

Request Body :

```
{
    "name":"andrea",
    "email":"andrea@gmail.com",
    "phone":"+62812147147",
    "status": "new" | "junior" | "mid" | "senior"
}
```

Response Body (Success) :

```
{
    "id": 1,
    "name": "andrea",
    "email": "andrea@gmail.com",
    "phone": "+62812147147",
    "status": "new"
}
```

Response Body (Failed) :

```
{
    "message" : "Name is required"
}

OR

{
    "message" : "Email is required"
}

OR

{
    message: "Phone is required"
}

OR

{
    message: "Email already exists."
}
```

##

### UPDATE Leads

Endpoint : PUT /leads/:id

Request Body :

```
{
    "name":"andrea",
    "email":"andrea@gmail.com",
    "phone":"+62812147147",
    "status": "new" | "junior" | "mid" | "senior"
}
```

Response Body (Success) :

```
{
    "id": 1,
    "name": "andrea",
    "email": "andrea@gmail.com",
    "phone": "+62812147147",
    "status": "new"
}
```

Response Body (Failed)

```
{
    "message": "Lead not found"
}
```

##

### DELETE Leads

Endpoint : DELETE /leads/:id

Response Body (Success)

```
{
    "message": "Success deleted"
}
```

Response Body (Failed)

```
{
    "message": "Lead not found"
}
```

# Rablo APIServer


# Testing on Local Environment

## Step 1 : Installation of dependencies

```
npm install
```
## Step 2 : Starting the server

```
npm start
```

# URLs for Testing Locally

# All Get Requests
## Get Request for fetching all the Products
http://localhost:8000/products

## Get Request for fetching all the Featured Products
http://localhost:8000/products/featured

# All Post Requests
## Updating any product by parsing the prod_id through the body
http://localhost:8000/products

## Creating the Product by parsing the details of the Products through body
http://localhost:8000/products/create-product

## Fetching the Products after applying price filter (filter is passed through body itself
http://localhost:8000/products/filter/price

## Fetching the Products after applying rating filter (filter is passed through body itself
http://localhost:8000/products/filter/rating


# URLs After hosting the server on railway

# All Delete Requests
## Deleting any product by parsing the prod_id through the body
http://localhost:8000/products


# All Get Requests
## Get Request for fetching all the Products
https://rabloproductsapiserver.up.railway.app/products

## Get Request for fetching all the Featured Products
https://rabloproductsapiserver.up.railway.app/products/featured

# All Post Requests
## Updating any product by parsing the prod_id through the body
https://rabloproductsapiserver.up.railway.app/products

## Creating the Product by parsing the details of the Products through body
https://rabloproductsapiserver.up.railway.app/products/create-product

## Fetching the Products after applying price filter (filter is passed through body itself
https://rabloproductsapiserver.up.railway.app/products/filter/price

## Fetching the Products after applying rating filter (filter is passed through body itself
https://rabloproductsapiserver.up.railway.app/products/filter/rating


# All Delete Requests
## Deleting any product by parsing the prod_id through the body
https://rabloproductsapiserver.up.railway.app/products
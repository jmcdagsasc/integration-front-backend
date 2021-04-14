# Integracion de frontend en React con API lambdas

## APIs en Netlify lambda

### Obtener categorias

TIPO: POST

CONTENT-TYPE: application/json

URL: https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/getcategories


Ejemplo:

{

	"business_id":83

}

Resultado:

{

  "error": false,

  "categoriesLength": 40,

  "categories": [
    {
      "id": 1232,
      "name": "Antiinfeccioso"
    },
    ...
  ]

 }

 ### Obtener negocio

TIPO: POST

CONTENT-TYPE: application/json

URL: https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/getbusiness


Ejemplo:

{

	"business_id":83

}

Resultado:

{

  "error": false,

  "business": {
    "id": 83,
    "name": "Farmazone - Guadalupe Inn",
    "address": "1000 West 5th Street, Austin, TX, USA",
    "slug": "SanAngel",
    "phone": "5513137476",
    "cellphone": null,
    "email": "Sanangel@farmazone.com.mx"
  }

}


### Obtener productos

TIPO: POST

CONTENT-TYPE: application/json

URL: https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/getproducts


Ejemplo:


{
	"business_id":59, OBLIGATORIO
	"category":390, OBLIGATORIO
	"limit":3,	OPCIONAL
	"start_at":2 	OPCIONAL
}

Resultado:


{
  "error": false,
  "productsLength": 3,
  "products": [

    {
      "id": 14856,
      "name": "Proalid Ungüento con 15 g (1 mg)",
      "price": 419,
      "sku": null,
      "description": "Proalid Ungüento con 15 g Tacrolimus (1 mg)",
      "in_offer": false,
      "offer_price": null
    },

    {
      "id": 14857,
      "name": "Italdermol Crema con 30 g (0.1/15 g)",
      "price": 507,
      ...
    },

    {
      "id": 14858,
      "name": "Italdermol 10 Gasas con Crema con 4 g (150 mg)",
      "price": 695,
      ...
    }
  ]
}


### Obtener negocio teniendo coordenadas de localización

TIPO: POST

CONTENT-TYPE: application/json

URL: https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/getproducts


Ejemplo:


{
	"location":"19.34403985031544, -99.15059790738852"
}

Resultado:


{
  "error": false,
  "businessFound": 1,
  "businessList": [
    {

      "id": 83,
      "name": "Farmazone - Guadalupe Inn",
      "address": "1000 West 5th Street, Austin, TX, USA",
      "slug": "SanAngel",
      "open": false

    }
  ]
}

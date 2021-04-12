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

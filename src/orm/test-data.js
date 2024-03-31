import { Parser } from 'n3'
import rdf from 'rdf-ext'

const rabbitTurtle = `
  @prefix schema: <http://schema.org/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix ex: <http://example.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

ex:WhiteRabbit schema:address ex:address ;
    foaf:img <https://miro.medium.com/max/720/1*HZazTjGg9EBSOoz34IN-tA.jpeg> ;
    rdfs:label "Coniglio bianco"@it ,
                "Conejo blanco"@es ,
                "White rabbit"@en ;
    foaf:knows ex:Alice ;
    ex:schedule (ex:wakingUp ex:drinkTea ex:jumpAround).

ex:address rdf:type schema:PostalAddress ;
    schema:streetAddress "5 Wonderland Street" ;
    schema:postalCode "4879" ;
    schema:email "white@wonderland.com" ,
                 "rabbit@hotmailz.com" ;
    schema:name "Postal address" .

ex:Alice rdf:type ex:Person ;
    schema:name "Alice" ;
    foaf:img <https://miro.medium.com/max/1100/1*xupcHn3b0jEFPkjvuH5Pbw.jpeg> .


ex:drinkTea schema:name "Drink tea" ;
           ex:when "During the morning" .`

function parseTurtle (str) {
  const result = rdf.dataset()
  for (const quad of new Parser().parse(str)) {
    result.add(quad)
  }
  return result
}

function getRabbit () {
  return parseTurtle(rabbitTurtle)
}

export { getRabbit }

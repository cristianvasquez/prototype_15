import rdf from 'rdf-ext'

const ns = {
  ex: rdf.namespace('http://example.org/'),
  schema: rdf.namespace('http://schema.org/'),
  rdf: rdf.namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#'),
  rdfs: rdf.namespace('http://www.w3.org/2000/01/rdf-schema#'),
  foaf: rdf.namespace('http://xmlns.com/foaf/0.1/'),
}

export {
  ns,
}

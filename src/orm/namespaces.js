import rdf from 'rdf-ext'

const ns = {
  ex: rdf.namespace('http://example.org/'),
  schema: rdf.namespace('http://schema.org/'),
  rdf: rdf.namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#'),
  rdfs: rdf.namespace('http://www.w3.org/2000/01/rdf-schema#'),
  foaf: rdf.namespace('http://xmlns.com/foaf/0.1/'),
}

function splitIfVocab (iri) {
  const candidates = Array.from(Object.entries(ns)).filter(([_, value]) => {
    return iri.startsWith(value().value)
  })
  if (candidates.length) {
    candidates.sort(([, iri1], [, iri2]) => iri2.length - iri1.length)
    const found = candidates[0]

    return {
      prefix: found[0],
      value: iri.replace(new RegExp(`^${found[1]().value}`), ''),
    }
  }
  const lastSegment = iri.endsWith('/')
    ? iri.slice(0, -1).split('/').pop()
    : iri.split('/').pop()
  return {
    value: lastSegment,
  }
}

export {
  ns, splitIfVocab,
}

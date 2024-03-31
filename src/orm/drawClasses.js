import { splitIfVocab } from './namespaces.js'
import { toORM } from './orm.js'

function muchABit (dataset) {
  const { nodes, edges } = toORM(dataset)

  function shrink (iri) {
    const { prefix, value } = splitIfVocab(iri)
    return prefix ? `${prefix}:${value}` : value
  }

  return nodes.map(x => ({
    header: shrink(x.subject.value),
    rows: [...x.dataset].map(
      quad => `${shrink(quad.predicate.value)} ${quad.object.value}`),
  }))
}

export { muchABit }

import rdf from 'rdf-ext'
import { toORM } from './orm.js'
import { getRabbit } from './test-data.js'

const first = rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#first')
const rest = rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#rest')
const nil = rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#nil')

function merge (nodes, subject1, subject2) {
  console.log('merging', subject1, subject2)
  const node1 = nodes.find(
    ({ subject, merged }) => subject.equals(subject1) || merged &&
      merged.has(subject1))
  const node2 = nodes.find(
    ({ subject, merged }) => subject.equals(subject2) || merged &&
      merged.has(subject2))

  node1.dataset.addAll(node2.dataset)
  node1.merged = (node1.merged ?? rdf.termSet()).add(subject2)

  return nodes.filter(({ subject }) => !subject.equals(subject2))
}

function print (nodes, edges) {
  console.log(
    nodes.map(x => ({ subject: x.subject, data: x.dataset.toCanonical() })))
  console.log([...edges].map(
    ({ subject, predicate, object }) => ({ subject, predicate, object })))

  console.log(nodes.length, 'nodes', edges.length, 'edges')
}

const dataset = getRabbit()
const { nodes, edges } = toORM(dataset)

// print(nodes, edges)

const toMerge = (quad) => quad.predicate.equals(rest) ||
  quad.predicate.equals(first)
let nodex = nodes
for (const { subject, predicate, object } of edges.filter(toMerge)) {
  nodex = merge(nodex, subject, object)
}

let edgesx = edges.filter(x => !toMerge(x))

print(nodex, edgesx)



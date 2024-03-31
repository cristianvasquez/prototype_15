import rdf from 'rdf-ext'

function toORM (dataset) {
  const subjects = dataset.reduce((set, quad) => set.add(quad.subject),
    rdf.termSet())
  const connectSubjects = (quad) => subjects.has(quad.subject) &&
    subjects.has(quad.object)
  const nodes = [...subjects].map(
    subject => ({
      subject,
      dataset: dataset.filter(
        quad => quad.subject.equals(subject) && !connectSubjects(quad)),
    }),
  )
  // const edges = [...dataset.filter(connectSubjects)]
  const edges = [...dataset.filter(connectSubjects)]
  return {
    nodes,
    edges,
  }
}

export { toORM }

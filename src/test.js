import { toORM } from './orm.js'
import { getRabbit } from './test-data.js'

const dataset = getRabbit()

const { edges,nodes }= toORM(dataset)

for (const { subject, dataset } of nodes) {
  console.log(
    `---
${subject.value}
---
${[...dataset].map(quad => `${quad.predicate.value} ${quad.object.value}`).
      join('\n')}
---
`,
  )
}
console.log(edges.toCanonical())

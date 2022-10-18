/* eslint-disable no-console */
const { MeiliSearch } = require('meilisearch')

const { MEILISEARCH_API_KEY, MEILISEARCH_HOST } = Cypress.env()

Cypress.Commands.add('deleteAllIndexes', async () => {
  try {
    const client = new MeiliSearch({
      host: MEILISEARCH_HOST,
      apiKey: MEILISEARCH_API_KEY,
    })
    const indexes = await client.getIndexes()
    indexes?.results?.forEach(async index => {
      await client.deleteIndex(index.uid)
    })
  } catch (e) {
    console.log({ e })
  }
})

Cypress.Commands.add('addDocuments', async (uid, documents) => {
  try {
    const client = new MeiliSearch({
      host: MEILISEARCH_HOST,
      apiKey: MEILISEARCH_API_KEY,
    })
    const index = client.index(uid)
    const { updateId } = await index.addDocuments(documents)
    await index.waitForPendingUpdate(updateId)
  } catch (e) {
    console.log({ e })
  }
})

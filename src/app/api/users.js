import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("demandas")

  switch (req.method) {
    case "GET":
      const users = await db.collection("demanda-administrativa").find({}).toArray()
      res.json(users)
      break
    case "POST":
      const newUser = req.body
      const result = await db.collection("demanda-administrativa").insertOne(newUser)
      res.json(result)
      break
    default:
      res.status(405).end() // Method Not Allowed
  }
}
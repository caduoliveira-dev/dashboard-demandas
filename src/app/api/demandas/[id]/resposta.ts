import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient(process.env.MONGO_URI as string)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PATCH') {
        const { id } = req.query
        const { resposta } = req.body

        if (!ObjectId.isValid(id as string)) {
            return res.status(400).json({ message: 'Invalid ID' })
        }

        try {
            await client.connect()
            const db = client.db('demandas')
            const collection = db.collection('demanda-administrativa')

            const result = await collection.updateOne(
                { _id: new ObjectId(id as string) },
                { $set: { resposta } }
            )

            if (result.modifiedCount === 0) {
                return res.status(404).json({ message: 'Demanda not found' })
            }

            res.status(200).json({ message: 'Resposta updated successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' })
        } finally {
            await client.close()
        }
    } else {
        res.setHeader('Allow', ['PATCH'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

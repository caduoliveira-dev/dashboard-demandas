'use server'

import dbClient from "@/db/mongodb"
import { ObjectId } from 'mongodb'

export async function createDemanda(formData: FormData) {
  const dataCadastro = formData.get('dataCadastro') as string
  const sgd = formData.get('sgd') as string
  const assunto = formData.get('assunto') as string
  const orgao = formData.get('orgao') as string
  const municipio = formData.get('municipio') as string
  const paciente = formData.get('paciente') as string
  const solicitante = formData.get('solicitante') as string
  const dataVencimento = formData.get('dataVencimento') as string

  const result = await dbClient
    .db('demandas')
    .collection('demanda-judicial')
    .insertOne({
      dataCadastro,
      sgd,
      assunto,
      orgao,
      municipio,
      paciente,
      solicitante,
      dataVencimento
    })

  // Return a plain object with the string representation of ObjectId
  return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString()
  }
}
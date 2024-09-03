// src/app/demanda-administrativa/actions.ts
'use server'

import dbClient from "@/db/mongodb"
import { ObjectId } from 'mongodb'

export interface Demanda {
  _id: string
  dataCadastro: string
  sgd: string
  assunto: string
  orgao: string
  municipio: string
  paciente: string
  solicitante: string
  dataVencimento: string
}

export async function getDemandas(): Promise<Demanda[]> {
  try {
    const demandas = await dbClient
      .db('demandas')
      .collection('demanda-administrativa')
      .find({})
      .sort({ dataCadastro: -1 })
      .toArray()

    return demandas.map(demanda => ({
      _id: demanda._id.toString(),
      dataCadastro: demanda.dataCadastro || '',
      sgd: demanda.sgd || '',
      assunto: demanda.assunto || '',
      orgao: demanda.orgao || '',
      municipio: demanda.municipio || '',
      paciente: demanda.paciente || '',
      solicitante: demanda.solicitante || '',
      dataVencimento: demanda.dataVencimento || '',
    }))
  } catch (error) {
    console.error('Error fetching demandas:', error)
    throw new Error('Failed to fetch demandas')
  }
}

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
    .collection('demanda-administrativa')
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




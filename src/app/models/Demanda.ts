import mongoose, { Document, Schema } from 'mongoose';

// Define a interface para o documento Demanda
export interface Demanda extends Document {
    dataCadastro: string;
    sgd: string;
    assunto: string;
    orgao: string;
    municipio: string;
    paciente: string;
    solicitante: string;
    dataVencimento: string;
    resposta?: string; // Opcional, se a resposta não for obrigatória
}

// Define o esquema para o modelo Demanda
const demandaSchema = new Schema<Demanda>({
    dataCadastro: { type: String, required: true },
    sgd: { type: String, required: true },
    assunto: { type: String, required: true },
    orgao: { type: String, required: true },
    municipio: { type: String, required: true },
    paciente: { type: String, required: true },
    solicitante: { type: String, required: true },
    dataVencimento: { type: String, required: true },
    resposta: { type: String } // Opcional, se necessário
}, {
    timestamps: true // Adiciona timestamps de criação e atualização
});

// Cria o modelo Demanda a partir do esquema
const DemandaModel = mongoose.model<Demanda>('Demanda', demandaSchema);

export default DemandaModel;

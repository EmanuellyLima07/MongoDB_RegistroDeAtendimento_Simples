use suporteTi
db.createCollection("atendimentos")

db.atendimentos.insertMany([
  {
    solicitante: "Fernanda Brum",
    local: "Financeiro - Bloco A",
    tipo_problema: "Hardware",
    descricao: "Computador não liga, emitindo 3 bipes curtos ao pressionar o botão de energia.",
    prioridade: "Alta",
    data_abertura: ISODate("2026-05-22T09:30:00Z"),
    status: "Pendente"
  },
  {
    solicitante: "Thalles Roberto",
    local: "Marketing - Bloco C",
    tipo_problema: "Software",
    descricao: "Adobe Photoshop fechando sozinho inesperadamente durante a renderização.",
    prioridade: "Média",
    data_abertura: ISODate("2026-05-22T14:15:00Z"),
    status: "Pendente"
  },
  {
    solicitante: "Eliã Oliveira",
    local: "Recursos Humanos - Bloco A",
    tipo_problema: "Rede",
    descricao: "Instabilidade na conexão Wi-Fi corporativa. Quedas frequentes a cada 10 minutos.",
    prioridade: "Alta",
    data_abertura: ISODate("2026-05-22T08:00:00Z"),
    status: "Pendente"
  },
  {
    solicitante: "Sérgio Lopes",
    local: "Depósito",
    tipo_problema: "Acesso/Credenciais",
    descricao: "Usuário bloqueado no sistema ERP após errar a senha de acesso por 3 vezes.",
    prioridade: "Baixa",
    data_abertura: ISODate("2026-05-22T10:45:00Z"),
    status: "Resolvido"
  },
  {
    solicitante: "Forrest Frank",
    local: "Diretoria - Bloco B",
    tipo_problema: "E-mail",
    descricao: "Não está conseguindo enviar e-mails para domínios externos, recebendo erro de timeout.",
    prioridade: "Crítica",
    data_abertura: ISODate("2026-05-22T11:20:00Z"),
    status: "Pendente"
  },
  {
    solicitante: "Eliã Oliveira",
    local: "Recursos Humanos - Bloco A",
    tipo_problema: "Rede",
    descricao: "Instabilidade na conexão Wi-Fi corporativa. Quedas frequentes a cada 10 minutos.",
    prioridade: "Alta",
    data_abertura: ISODate("2026-05-22T08:00:00Z"),
    status: "Pendente"
  }
])

db.atendimentos.find().pretty()

db.atendimentos.find({ status: "Pendente" }).pretty()

db.atendimentos.find({ prioridade: "Alta" }).pretty()

db.atendimentos.updateOne(
  { solicitante: "Thalles Roberto", tipo_problema: "Software" },
  { 
    $set: { 
      status: "Resolvido",
      data_resolucao: ISODate("2026-05-22T15:30:00Z")
    } 
  }
)

db.atendimentos.deleteOne({
  solicitante: "Eliã Oliveira",
  tipo_problema: "Rede"
})
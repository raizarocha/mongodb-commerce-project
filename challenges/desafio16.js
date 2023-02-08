db.produtos.updateMany(
    { nome: { $eq: "Big Mac" } },
    { $set:
      { ultimaModificacao: { $currentDate: { $type: "date" } } },
    },
  );
  
db.produtos.find(
  { ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 },
);
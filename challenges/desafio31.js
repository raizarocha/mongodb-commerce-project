db.produtos.find(
  { $expr: { $gt: ["$curtidas", "$vendidos"] } },
  { _id: 0, nome: 1 },
);

// ref: https://stackoverflow.com/questions/4442453/mongodb-query-condition-on-comparing-2-fields
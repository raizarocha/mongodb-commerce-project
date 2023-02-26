# README
## Projeto MongoDB Commerce <br />

O projeto foi desenvolvido utilizando Docker, onde trabalhei com o banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas. 

Nele foi colocado em prática o que aprendemos sobre: <br />
- Docker :heavy_check_mark:; <br />
- MongoDB :heavy_check_mark:; <br />
- Filter Operators :heavy_check_mark:; <br />
- Operadores de consulta :heavy_check_mark:; <br />
- Updates Simples :heavy_check_mark:; <br />
- Updates Complexos :heavy_check_mark:; <br />

Lista de requisitos realizados por mim neste projeto:
1. Retorne a quantidade de documentos inseridos na coleção `produtos` <br />
2. Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos` <br />
3. Retorne o lanche mais vendido, mostrando apenas o `nome` e a quantidade do lanche mais vendido <br />
4. Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente <br />
5. Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85` <br />
6. Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100` <br />
7. Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista <br />
8. Delete os lanches com menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco <br />
9. Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500` <br />
10. Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40` <br />
11. Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken` <br />
12. Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes` <br />
13. Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo <br />
14. Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais` <br />
15. Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo <br />
16. Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac` <br />
17. Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos` <br />
18. Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo` <br />
19. Remova o item `cebola` de todos os sanduíches <br />
20. Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo` <br />
21. Remova o último `ingrediente` do sanduíche `Cheddar McMelt` <br />
22. Adicione a quantidade de vendas dos sanduíches por dia da semana <br />
23. Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z) <br />
24. Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente <br />
25. Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40` <br />
26. Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40` <br />
27. Conte quantos produtos contém `Mc` no nome, sem considerar letras maiúsculas ou minúsculas <br />
28. Conte quantos produtos têm `4` ingredientes <br />
29. Renomeie o campo `descricao` para `descricaoSite` em todos os documentos <br />
30. Remova o campo `curtidas` do item `Big Mac` <br />
31. Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos` <br />
32. Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5` <br />

As partes que desenvolvi no projeto, podem ser encontradas na pasta challenges, nos arquivos: {desafio1..32}. Todos os outros arquivos já são entregues prontos para os alunos em aprendizado da Trybe.
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

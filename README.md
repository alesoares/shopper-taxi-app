CENÁRIO

Vamos desenvolver uma aplicação conceito onde o usuário poderá solicitar uma viagem em carro particular de um ponto A até um ponto B. 
Ele poderá escolher entre algumas opções de motoristas e valores e confirmar a viagem. Depois também poderá listar o histórico das viagens realizadas. 
O diagrama abaixo mostra a estrutura geral da aplicação.

DEFINIÇÕES DO BACKEND

O backend deverá ser uma API Rest em NodeJS e Typescript, e terá os seguintes endpoints:

POST /ride/estimate

descrição aqui...

ATENÇÃO: 

Você precisará obter uma chave de acesso para usar a funcionalidade. Pode ser necessário adicionar um cartão para obter a chave, 
mas um crédito do Google será automaticamente aplicado e cobrirá o uso necessário para testar. Não realize despesas financeiras para realizar esse teste.

PATCH /ride/confirm

descrição aqui...

GET /ride/{customer_id}?driver_id={id do motorista}

descrição aqui...

DEFINIÇÕES DO FRONTEND:

O Frontend deverá ser uma Single Page Application em React e TypeScript e terá as seguintes telas:

Solicitação de viagem

Opções de viagem

Histórico de viagens

Tratamento de erros

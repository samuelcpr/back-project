# Conteúso do projeto

\*Pontos importantes

─ API Redtful

─Tratamento de erros

─Entidades e repositórios typeORM

─Relacionamento Many-to-Many

─Filesystem/upload de arquivos

─Cache com Redis

─Atenticação jtwt token

─Envio de email fake (dev env)

─Proteção contra ataques DDos

# Celebrate para validar dados

Para validar os dados utilizaremos o pacote celebrate
que utiliza a biblioteca joi que  é uma biblioteca de validação de dados

# criando migrations com typeorm

> criar migrations
yarn typeorm migration:create -n CreateProducts

> rodar migrations

yarn typeorm migration:run

# Entidade de usuario


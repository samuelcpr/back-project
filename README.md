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

![alt](https://data:image/png;base64,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)

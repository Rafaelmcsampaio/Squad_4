<<<<<<< HEAD
# Tratamento Global de Erros

Este projeto implementa um middleware global para capturar e tratar erros no backend (Node.js + Express).

## Funcionamento

- Todas as exceções são capturadas por `errorHandler.js`.
- Os erros são registrados automaticamente no console.
- A resposta para o cliente é padronizada.

## Formato da Resposta de Erro

```json
{
  "statusCode": 500,
  "message": "Erro interno do servidor",
  "error": "Error",
  "path": "/rota",
  "timestamp": "2025-05-30T15:00:00.000Z",
  "trace_id": "abc123def"
}
```

## Tratamentos Específicos

- 400 - Requisição inválida
- 404 - Rota não encontrada
- 422 - Entidade não processável
- 500 - Erro interno do servidor

## Testes

Acesse as rotas:
- `/erro400`
- `/erro404`
- `/erro422`
- `/erro500`
=======
# Squad 4 - Projeto de Processo de Software

Repositório do projeto de Processo de Software - ESW-MAT-PIT-2S-T1.

> Participantes

- Bruno Belem
- Caique Souza
- Carlos Eduardo Sayão
- Edson Abdon
- Guilherme Daltro
- Júlia Lessa
- Pedro Souza
- Rafael Moura
- Raoni Dourado
- Victor Brasil

> Meta

Ter acesso ao repositório com uma base organizada, mostrando clareza e colaboração da equipe desde o início do projeto.

> Execução local

Git clone: https://github.com/brunobelemm/Squad_4.git


>>>>>>> f9a261adc1df1ddc52208cfae45561da33011ea8

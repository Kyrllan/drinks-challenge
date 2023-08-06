# Drink Challenge

O projeto Drink Challenge é uma aplicação frontend desenvolvida como desafio tecnico usando a API TheCocktailDB(https://www.thecocktaildb.com/api.php) para obter informações sobre coquetéis. A API TheCocktailDB fornece dados sobre receitas de coquetéis, ingredientes, categorias, filtros e muito mais.

Demo: https://drinks-challenge.vercel.app/

## Organização do Projeto

- assets: Armazenado animation.json utilizado na animação de rota desconhecida da aplicação
- components: Componentes reutilizaveis
- constants: Armazenado as constantes da aplicação
- models: Armazenado os Models/Interfaces TypeScript
- pages: Páginas da aplicação
  - index.vue: Página Home
  - favorites.vue: Página de favoritos
- plugins: Plugins da aplicação
  - Vuetify: Biblioteca de UI para vueJs
  - Vue3Lottie: Plugin de animação
- store: Armazenamento de dados centralizados da aplicação (Pinia)
- app.vue: Arquivo inicial da aplicação
- error.vue: Página de tratamento caso usuario procure por uma página que não existe na aplicação


## Instruções de Instalação e Execução

Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, faça o download e instale a versão mais recente do Node.js em https://nodejs.org.

Clone este repositório em seu ambiente local:

```
git clone https://github.com/Kyrllan/drinks-challenge.git
cd drinks-challenge
```

Instale as dependências do projeto usando o gerenciador de pacotes npm:

```
npm install
```

Inicie o servidor de desenvolvimento para executar a aplicação:

```
npm run dev
```

A aplicação estará disponível em http://localhost:3000. Acesse essa URL em seu navegador para visualizar a aplicação.

## Requisitos do desafio

- Dado que sou um usuário eu quero visualizar as categorias de bebidas :heavy_check_mark:
  - Ao escolher uma categoria eu devo visualizar a lista das bebidas dessa categoria. :heavy_check_mark:

- Dado que sou um usuário eu quero ver os detalhes da bebida. :heavy_check_mark:
  - A aplicação deve apresentar a imagem da bebida escolhida; :heavy_check_mark:
  - A aplicação deve apresentar a instrução da bebida escolhida. :heavy_check_mark:

- Dado que sou um usuário eu quero pesquisar uma bebida específica através de um campo de busca.**(opcional)** :heavy_check_mark:

- Dado que sou um usuário eu posso favoritar uma bebida para facilmente acessá-la no futuro.**(opcional)** :heavy_check_mark:

## Requisitos técnicos

### Obrigatórios

- Criar documentação assertiva para a execução e apresentação do projeto no README; :heavy_check_mark:
- Utilizar typescript; :heavy_check_mark:
- Criar nome para aplicação; :heavy_check_mark:
- Tratamento básicos de erros da API;( 500, 400 ) :heavy_check_mark:
- Fácil de buildar e executar a aplicação para testes :heavy_check_mark:

### Opcionais

- Tratamento para rotas que não existem; :heavy_check_mark:
- Escrever testes; :heavy_multiplication_x:
- Aplicação deve ser responsiva; :heavy_check_mark:

### Diferenciais

- Documentar decisões tomadas durante o desafio técnico. :heavy_check_mark:
- Paleta de cores única; :heavy_check_mark:
- UX agradável; :heavy_check_mark:
- Criar commits semânticos. :heavy_check_mark:

### Observação

Utilizar NuxtJS :heavy_check_mark:


    


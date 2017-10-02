[![Build Status](https://travis-ci.org/Ongbook/ongbook-front-end.svg?branch=develop)](https://travis-ci.org/Ongbook/ongbook-front-end)

# Ongbook

Catálogo de entidades sociais com o objetivo de diminuir a distância entre entidades do terceiro setor e volutáriado.

## Formas de colaboração

Para contribuir com o front end da ongbook, é necessário ter os pré requisitos instalados, 
seguir as boas práticas utilizadas no projeto e caso tenhas dúvida, abra uma issue :)

### Pré requisitos

É necessário ter instalado o [Node.JS](https://nodejs.org/en/) instalado na sua máquina.

Caso tenha dúvidas para a instalação, [este artigo](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-debian-8) pode lhe ser útil.

### Instalação

Para instalar o projeto em sua máquina, siga os passos abaixo:

Crie uma pasta para o projeto e acesse ela:

```
$ mkdir ongbook && cd ongbook
```

Instale as dependências do projeto através do npm:

```
$ npm install
```

Para você rodar o projeto em um navegador, você deve utilizar
um servidor local, como sugestão utilizamos o [http-server](https://www.npmjs.com/package/http-server), para utilizar basta rodar o comando de inicilização na pasta do projeto:

```
$ http-server -p 8081
```
 Você pode alterar a porta conforme sua necessidade.

## Testes

Para os testes unitários, estamos utilizando o [Mocha](https://mochajs.org), [Chai](http://chaijs.com/) e [Sinon](http://sinonjs.org/) com a metodologia do [TDD](https://pt.wikipedia.org/wiki/Test_Driven_Development).

### Para rodar os testes basta utilizar:

```
$ npm test
```

<!-- ### And coding style tests

Explain what these tests test and why

```
Give an example
``` -->

## Deployment

Para fazer o teste do projeto em modo de produção, com compressão e certificar de que tudo está ok:

```
$ npm prod
```

## Feito em

* [Angular 1.x](https://angularjs.org/) - Framework utilizado.
* [Npm](https://www.npmjs.com/) - Gerenciador de dependências.
* [Travis CI](travis-ci.org) - Integração contínua.
* [Heroku](https://dashboard.heroku.com/) - Cloud

## Como contribuir!

Para contribuir basta acessar a sessão de [CONTRIBUTING.md](), lá você pode buscar informações de como trabalhamos usando o Gitflow e como você deve submeter suas alterações.

## Versionamento

Utilizamos o [Git](https://git-scm.com/) para o versionamento. Você pode acompanhar nossos releases através das [tags nos repositórios](https://github.com/ongbook/ongbook-front-end/tags). 

## Autores

Veja nossa [lista de contribuidores](https://github.com/your/project/contributors).

## Licença

Optamos por utilizar a licença do  [MIT License](https://opensource.org/licenses/MIT) - [LICENSE.md](LICENSE.md) file for details

## Para tirar dúvidas sobre o projeto e sobre formas de contribuição, disponibilizamos dos seguintes canais:

- [Gitter](https://gitter.im/Ongbook) - Dúvidas sobre contribuições.
- Sugestões e Dúvidas através de [issues](https://github.com/Ongbook/ongbook-front-end/issues) aqui no Github.

## Redes Sociais

- [Facebook](https://www.facebook.com/Ongbook/)
- [Twitter](https://twitter.com/_Ongbook)
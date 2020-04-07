# Be The Hero
Projeto desenvolvido durante a omnistack da [Rocketseat](http://rocketseat.com.br).

Esse projeto permite as ONGs informar algum caso especifico que necessitam de doações. Esses casos são apresentados para usuários mobile para que possam entrar em contato com a ONG e realizar a sua doação.

# Back-end
O back-end da aplicação foi desenvolvido em NODEJS, é para esse projeto foi utilizado as seguintes ferramentas:
* [Celebrate](https://github.com/arb/celebrate): Um middleware utilizado nas rotas para validação dos dados enviados.
* [Cors](https://github.com/expressjs/cors): Para tratamento de CORS.
* [Cross-env](https://github.com/kentcdodds/cross-env): Manipulação de variáveis de ambiente.
* [Express](https://github.com/expressjs/express): Gerenciamento de rotas.
* [Knex](https://github.com/knex/knex): Query builder.
* [SQLite](https://www.sqlite.org/index.html): Banco de dados.

# Front-end
O front-end foi todo desenvolvido em React e fazendo a comunicação com o back-end via API utilizando [Axios](https://github.com/axios/axios).

* Login
<img src="https://github.com/felipeurbansk/react-be-the-hero/blob/master/screen/login.png" alt="Login" width="400"/>

* Registrar nova ONG
<img src="https://github.com/felipeurbansk/react-be-the-hero/blob/master/screen/register.png" alt="Registrar nova ONG" width="400"/>

* Perfil da ONG
<img src="https://github.com/felipeurbansk/react-be-the-hero/blob/master/screen/profile_list_incidents.png" alt="Perfil da ONG" width="400"/>

* Cadastro de casos
<img src="https://github.com/felipeurbansk/react-be-the-hero/blob/master/screen/register_incidents.png" alt="Registro de casos" width="400"/>

# Mobile
O aplicativo foi desenvolvido em React Native consumindo a API do NODEJS utilizando [Axios](https://github.com/axios/axios) e o [EXPO](https://github.com/expo/expo) para executar o aplicativo.

* Lista de casos
<img src="https://github.com/felipeurbansk/react-be-the-hero/blob/master/screen/app_list_all_incidents.jpg" alt="Lista de casos" width="400"/>

* Lista de apenas um caso
<img src="https://github.com/felipeurbansk/react-be-the-hero/blob/master/screen/app_list_single_incidents.jpg" alt="Lista de um caso" width="400"/>

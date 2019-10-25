# FastNest

A nodejs workspace consisting of [Nest](https://github.com/nestjs/nest), [Fastify](https://github.com/fastify/fastify) and [Typeorm](https://github.com/typeorm/typeorm)


## Installation

```bash
$ git clone https://github.com/isaiahiroko/fast-nest.git project-name

$ cd ./project-name

$ npm install

```
## Configuration

update ormconfig.json to reflect your environment

```bash
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "test",
    "password": "test",
    "database": "test",
    "entities": [
        "dist/**/*.entity{.ts,.js}"
    ],
    "synchronize": true,
    "logging": true
}
```

## Running the app

```bash

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## [Licensed](LICENSE)

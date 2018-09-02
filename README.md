# Reaper-ES8V2


La version 2 de Reaper-ES8 agrega ahora babel 7.0.0 y con ayuda de este creo una build de produccion aṕta para node.js traspilando el codigo de ES6 a ES5

## Requerimientos

Solo como recomendacion usar ![yarn](https://yarnpkg.com/en/)

## Instalacion 
```git
git clone https://github.com/ErickVAleman/Reaper-ES8V2.git

yarn o npm i
```

> Nota: Si se ocupa npm en el package.json cambiar el comando "build": "yarn clean && babel src --out-dir build --source-maps inline" por "build": "npm run clean && babel src --out-dir build --source-maps inline",

Crea un archivo llamado config.db.json dentro de src y este contendra una configuracion en formato json sobre las bases de datos que deseas configurar

```bash 
touch src/config.db.json
```
```json
{
  "user": "user",
  "pwd": "password",
  "port": 0101,
  "dialect": "mysql|mssql|postgresql",
  "prefix": ".dyndns.org",
  "databases" : {
    "local": "localdb",
    "external": "externaldb",
  },
  "url" : {
    "local": "local.db",
    "external": "external.db",
  }
}

```
## Comandos 

```
yarn clean | npm run clean
``` 
> Borrara la carpeta build si existe

```
yarn build | npm run build
```
> Usara babel para traspilar el codigo es6 a es5 para que node lo entienda y creara la build de produccion, recuerda setear NODE_ENV = 'production'

```
yarn start | npm start
```
> Una vez realizada la build de produccion este arrancara la build 

```
yarn debug | npm run debug
```
> Ocuparemos nodemon con debug para poder ver los errores de la build

```
yarn dev | npm run dev
```
> Utiliza @babe/node para poder arrancar el desarrollo, pero cuidado este traspilara en codigo en vivo asi que trabajara mas lento y consumira mas memoria de la necesaria, aparte de eso babel recomienda no ocuparla.

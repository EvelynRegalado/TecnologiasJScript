# Comandos Docker

## docker ps

Este comando listaba los contenedores que estan **corriendo**.
```
>> docker ps
```

## docker ps -a

Este comando listaba **TODOS** los contenedores que estan **instalados**.
```
>> docker ps -a
```

## docker stop 'id' o 'nombre'

Este comando **detiene** los o el  contenedor que este **corriendo**.
```
>> docker stop 12mMC232udD micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi
```

## docker start 'id' o 'nombre'

Este comando **levanta** los o el  contenedor que este **detenido**.
```
>> docker start 12mMC232udD micontenedor
>> docker start 12
>> docker start m
>> docker start 12 mi
```

## docker rm 'id' o 'nombre'

Este comando **elimina** los o el  contenedor que esten **detenido**.
```
>> docker rm 12mMC232udD micontenedor
>> docker rm 12
>> docker rm m
>> docker rm 12 mi
```

* No se puede **borrar** los contenedores que esten corriendo.

## Mysql

Para utilizar docker con mysql vamos a utilizar el siguiente comando:

```
>> docker run --name evelyn -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=evelyn -e MYSQL_USER=evelyn -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```

##Descripción

### --name evelyn

El nombre del contenedor

### -e MYSQL_ROOT_PASSWORD=

-e Le dice al docker que es una variable de entorno

La clave del usuario **root**

### -e MYSQL_DATABASE=evelyn

-e Le dice al docker que es una variable de entorno

El nombre de la **base de datos**

### -e MYSQL_USER=

-e Le dice al docker que es una variable de entorno

El nombre del **Usuario** de la base de datos.

### -e MYSQL_PASSWORD

-e Le dice al docker que es una variable de entorno

La clave del usuario **creado**

### -p 3306:3306

-p Es para el port binding con el sistema operativo **host**

- 3306 de la **izquierda** es el puerto que se **usa** en el contenedor.

- 3306 de la **derecha** es el puerto para acceder en la maquina **host**


## Postgres
```
>> docker run --name postgresevelyn -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=evelyn -e POSTGRES_DB=politecnica -p 5432:5432 -d postgres
```
##Descripción

### --name postgresevelyn

Nombre del contenedor

-e Le dice al docker que es una variable de entorno

### -e POSTGRES_PASSWORD=

Contraseña del usuario creado

-e Le dice al docker que es una variable de entorno

### -e POSTGRES_USER=evelyn=

Nombre del usuario de la base de datos

-e Le dice al docker que es una variable de entorno

### -e POSTGRES_DB=politecnica

-e Le dice al docker que es una variable de entorno
....

### -p 5432:5432

-p Es para el port binding con el sistema operativo **host**

Puerto que utilizará la base de datos postgres

- 3306 de la **izquierda** es el puerto que se **usa** en el contenedor.

- 3306 de la **derecha** es el puerto para acceder en la maquina **host**


## MongoDB

##Descripción

```
>> docker run --name evelynmongo -p 27017:27017 -d mongo
```
### --name evelynmongo

nombre de la base de datos

### -p 27017:27017

Puerto que utilizará la base de datos mongo

- 3306 de la **izquierda** es el puerto que se **usa** en el contenedor.

- 3306 de la **derecha** es el puerto para acceder en la maquina **host**



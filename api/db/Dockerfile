FROM mysql

ENV MYSQL_ROOT_PASSWORD dbdocker

COPY ./api/db/db/ /docker-entrypoint-initdb.d

EXPOSE 3306
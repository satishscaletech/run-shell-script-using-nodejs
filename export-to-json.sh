./clickhouse local -q "SELECT * FROM
   mysql(
    'host:port',
    'database-name',
    'table-name',
    'db-user',
    'password'
)
INTO OUTFILE 'table-name.json'"

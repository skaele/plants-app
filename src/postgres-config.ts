import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

const options: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '4k9HnozuUWP0gyjWARLw',
    database: 'plants',
    // Typically it is unsafe to use 'synchronize: true' for schema synchronization on production once you get data in your database.
    // https://orkhan.gitbook.io/typeorm/docs/migrations
    synchronize: true,
}

export default options

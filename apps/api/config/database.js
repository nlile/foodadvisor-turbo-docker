const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "strapi"),
//       user: env("DATABASE_USERNAME", "strapi"),
//       password: env("DATABASE_PASSWORD", "strapi"),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
